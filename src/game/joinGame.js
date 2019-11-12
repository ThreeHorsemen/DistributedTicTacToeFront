import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontSize: "6vw",
    color: theme.palette.text.secondary,
    height: "8vw"
  },
}));

export default function JoinGame(props) {
  const classes = useStyles();
  return(
    <Grid container spacing={2} gutter={2}>
      <Grid item xs={12} sm={12} >
        <Paper className={classes.paper} onClick={props.connectHandler}> Join Game</Paper>
      </Grid>
    </Grid>
  )
}