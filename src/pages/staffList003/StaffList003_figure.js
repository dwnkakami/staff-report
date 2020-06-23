import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'relative',
  },
  root2: {
    flexGrow: 2,
    position: 'relative',
  },
  root3: {
    flexGrow: 3,
    position: 'relative',
  },
  root4: {
    flexGrow: 4,
    position: 'relative',
  },
  number: {
    height: 500,
    width: 100,
    textAlign: 'center',
    fontSize: 30,
    color: theme.palette.text.secondary,
  },
  content: {
    height: 50,
    width: 380,
    textAlign: 'center',
    fontSize: 30,
    color: theme.palette.text.secondary,
  },
  content2: {
    height: 50,
    width: 120,
    fontSize: 30,
    textAlign: 'center',
    float: 'left',
    color: theme.palette.text.secondary,
  },
  content3: {
    height: 50,
    width: 260,
    fontSize: 30,
    textAlign: 'center',
    float: 'left',
    color: theme.palette.text.secondary,
  },
  content4: {
    height: 200,
    width: 120,
    fontSize: 30,
    textAlign: 'center',
    float: 'left',
    color: theme.palette.text.secondary,
  },
  content5: {
    height: 200,
    width: 260,
    fontSize: 30,
    textAlign: 'center',
    float: 'left',
    color: theme.palette.text.secondary,
  },
  content6: {
    height: 50,
    width: 165,
    fontSize: 30,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  content7: {
    height: 50,
    width: 215,
    textAlign: 'right',
    fontSize: 30,
    color: theme.palette.text.secondary,
  },
  content8: {
    height: 400,
    width: 380,
    textAlign: 'center',
    fontSize: 30,
    color: theme.palette.text.secondary,
  },
  content9: {
    height: 50,
    width: 340,
    textAlign: 'center',
    fontSize: 30,
    color: theme.palette.text.secondary,
  },
  figure: {
    float: 'left',
  },
  figure2: {
    float: 'left',
  },
  figure3: {
    float: 'left',
  },
  figure4: {
    float: 'left',
  },
}));
export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.figure}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="baseline">
            <Grid>
              <Paper className={classes.content}>期間</Paper>
            </Grid>
            <Grid>
              <Paper  className={classes.content}>~</Paper>
            </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline">
              <Grid>
                <Paper className={classes.content2}>職種</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content3}></Paper>
              </Grid>
              </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content2}>業種</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content3}></Paper>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content4}>工程</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content5}></Paper>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content6}>役割規模</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content7}>人</Paper>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content2}>担当</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content3}></Paper>
              </Grid>
              </Grid>
          </Grid>
        </div>

        <div className={classes.figure2}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="baseline">
            <Grid>
              <Paper className={classes.content}>案件名</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.content}></Paper>
            </Grid>
            <Grid>
              <Paper className={classes.content8}></Paper>
            </Grid>
            </Grid>
          </div>

          <div className={classes.figure3}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content9}>環境使用/ソフト</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
            </Grid>
          </div>

          <div className={classes.figure4}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content9}>言語/その他</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9}></Paper>
              </Grid> 
            </Grid>
          </div>
    </div>
  );
}