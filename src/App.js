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
      styles: makeStyles(theme => ({
        root: {
          flexGrow: 1,
        }
      }))
    };
  
  }
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

  heartbeatHandler = () => {
    networking.heartbeat(this.state.id).then(res => this.heartbeatResolver(res))
    setTimeout(this.heartbeatHandler, 1000)
  }

  heartbeatResolver = (res) => {
    //console.log(res)
    this.setState({
      game: res.game,
      game_ongoing: res.game_ongoing,
      turn: res.value
    })
  }

  turnHandler = (event) => {
    console.log(event.target.id)
    if (this.state.turn) {
      networking.sendAction(this.state.id, parseInt(event.target.id))
      this.setState({turn: false})
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
