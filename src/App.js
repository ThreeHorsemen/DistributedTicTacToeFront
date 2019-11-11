import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "8vw"
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Distributed systems - TicTacToe
          </Typography>
        </Box>
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
      </Container>
    </div>
  );
}

export default App;
