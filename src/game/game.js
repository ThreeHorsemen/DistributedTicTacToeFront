import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "8vw"
  },
}));


export default function Game() {
  const classes = useStyles();
  return(
    <Grid container spacing={2} gutter={2}>
      <Grid item xs={12} sm={4} >
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Paper className={classes.paper}></Paper>
      </Grid>
      <Grid item xs={12} sm={4} >
        <Paper className={classes.paper}></Paper>
      </Grid>
    </Grid>
  )
}

