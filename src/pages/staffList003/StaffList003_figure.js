import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  number: {
    // padding: theme.spacing(12),
    height: 350,
    width: 100,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  content: {
    // padding: theme.spacing(2),
    height: 40,
    width: 300,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  content2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  content3: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={0}>
          <Paper className={classes.number}>1</Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.content}>期間</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.content2}>xs=5</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.content3}>xs=3</Paper>
        </Grid>
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid> */}
      </Grid>
    </div>
  );
}