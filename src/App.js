import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Game from './game/game'
import JoinGame from './game/joinGame'
import { makeStyles } from '@material-ui/core/styles';
import networking from './networking/networking'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      game: [0,0,0,0,0,0,0,0,0],
      game_ongoing: false,
      status: true,
      connected: false,
      turn: false,
      winner: undefined,
      styles: makeStyles(theme => ({
        root: {
          flexGrow: 1,
        }
      }))
    };
  }
  // Used to connect to the python server
  connectHandler = async () => {
    await networking.connect()
    .then(res => 
      this.setState({
        connected: res.status,
        status: res.status,
        id: res.id
      })
    )
    this.firstHeartbeatHandler()
  }

  // Used to send out the initial hearbeat
  firstHeartbeatHandler = () => {
    if (this.state.id) {
      this.heartbeatHandler()
    }
    else if (this.state.status === false) {
      this.setState({connected: false})
    }
    else {
      //console.log(this.state.id)
      setTimeout(this.firstHeartbeatHandler, 1000)
    }
  }

  // Used to reset the app state
  reset = () => {
    this.setState({
      id: null,
      game: [0,0,0,0,0,0,0,0,0],
      game_ongoing: false,
      status: true,
      connected: false,
      turn: false,
      winner: undefined
    })
  }

  // Used to send out regular hearbeats in an interval until the game ends
  heartbeatHandler = () => {
    if (!this.state.connected) {
      this.reset()
      return
    }
    if (this.state.winner) {
      if (this.state.winner === -1) {
        window.alert("draw")
      }
      else if (this.state.winner === this.state.id) {
        window.confirm("uwon")
      } else {
        window.alert("ulose")
      }
      this.reset()
    } else {
      // Send a heartbeat to the python server
      networking.heartbeat(this.state.id).then(res => 
        this.heartbeatResolver(res)
      ).catch(e => {
        console.log(e)
        this.reset()
      })

      // Start another heartbeat if no errors occure during networking and the game hasn't ended
      setTimeout(this.heartbeatHandler, 1000)
    }
  }

  // Used to set the app's state based on a heartbeat response
  heartbeatResolver = (res) => {
    console.log(res)
    this.setState({
      game: res.game,
      game_ongoing: res.game_ongoing,
      turn: res.value
    })
    // Set winner if game has ended
    if (!res.game_ongoing) {
      this.setState({winner: res.winner})
    }
  }

  // Used to handle a move by a player
  turnHandler = (event) => {
    if (this.state.turn) {
      networking.sendAction(this.state.id, parseInt(event.target.id)).then(res => 
        this.setState({
          // Set the turn state to false after an action
          turn: false,
          game: res.game
        })
      )
    }
  }

  render() {
    return (
      <div className={this.state.styles.root}>
        <Container maxWidth="sm">
          <Box my={4}>
            <Typography variant="h4" component="h1" gutterBottom>
              Distributed systems - TicTacToe
            </Typography>
          </Box>
          {this.state.connected ?
          <Game 
            turn={this.state.turn}
            game={this.state.game}
            turnHandler={this.turnHandler}
          />
          :
          <JoinGame
            connectHandler={this.connectHandler}
          />
            
          }
        </Container>
      </div>
    );
  }
}

export default App;
