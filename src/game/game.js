import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


export default function Game(props) {

  const useStyles = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: "150px"
    },
  }));
  const classes = useStyles();
  
  const tileContent = (val) => {
    if (props.game[val] === 0) {
      return (
        <div></div>
      )
    } else if (props.game[val] === 1) {
      return (
        <p className="value">X</p>
      )
    }
    else if (props.game[val] === 2) {
      return (
        <p className="value">0</p>
      )
    }
  }
  const tile = (val) => {
    return (
      <Grid item xs={12} sm={4} height={2} key={val}>
        <Paper className={classes.paper} onClick={props.turnHandler} id={val}>
          {tileContent(val)}
        </Paper>
      </Grid>
    )
  }
  console.log(props)
  return(
    <div>
      {props.turn ?
        <p>your turn</p>
        :
        <p>opponent's turn</p>
        }
      <Grid container spacing={2} gutter={2}>
        {props.game.map((val,index) =>
          tile(index)
        )}
      </Grid>
    </div>
  )
}

