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
      game: {},
      connected: false,
      styles: makeStyles(theme => ({
        root: {
          flexGrow: 1,
        }
      }))
    };
  
  }
  connectHandler = () => {
    networking.connect().then(res => this.setState({connected: res.status, id: res.id}))
  }

  heartbeatHandler = () => {
    const id = networking.heartbeat()
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
          <Game/>
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
