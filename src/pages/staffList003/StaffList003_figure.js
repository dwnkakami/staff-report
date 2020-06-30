import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { useEffect } from 'react';

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
    height: 400,
    width: 80,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 12,
    fontSize: 35,
    borderRadius: '0px 0px 0px 0px'
  },
  content: {
    height: 40,
    width: 344,
    textAlign: 'center',
    color: '#000000',
    fontSize: 25,
    borderRadius: '0px 0px 0px 0px'
  },
  content_day: {
    height: 40,
    width: 344,
    textAlign: 'center',
    color: '#000000',
    fontSize: 18,
    borderRadius: '0px 0px 0px 0px'
  },
  content_color: {
    height: 40,
    width: 344,
    textAlign: 'center',
    fontSize: 32,
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content2: {
    height: 40,
    width: 100,
    fontSize: 30,
    textAlign: 'center',
    float: 'left',
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content3: {
    height: 40,
    width: 244,
    fontSize: 25,
    textAlign: 'center',
    color: '#000000',
    float: 'left',
    borderRadius: '0px 0px 0px 0px'
  },
  content4: {
    height: 160,
    width: 100,
    fontSize: 30,
    textAlign: 'center',
    lineHeight: 5,
    background: '#6699ff',
    color: '#000000',
    float: 'left',
    borderRadius: '0px 0px 0px 0px'
  },
  content5: {
    height: 160,
    width: 244,
    fontSize: 25,
    textAlign: 'center',
    color: '#000000',
    float: 'left',
    borderRadius: '0px 0px 0px 0px'
  },
  content6: {
    height: 40,
    width: 145,
    fontSize: 30,
    textAlign: 'center',
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content7: {
    height: 40,
    width: 199,
    textAlign: 'right',
    color: '#000000',
    fontSize: 30,
    borderRadius: '0px 0px 0px 0px'
  },
  content8: {
    height: 320,
    width: 344,
    textAlign: 'center',
    color: '#000000',
    fontSize: 25,
    borderRadius: '0px 0px 0px 0px'
  },
  content9: {
    height: 40,
    width: 280,
    textAlign: 'center',
    color: '#000000',
    fontSize: 25,
    borderRadius: '0px 0px 0px 0px'
  },
  content9_color: {
    height: 40,
    width: 280,
    textAlign: 'center',
    fontSize: 32,
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  figure: {
    float: 'left',
  },
  add: {
    height: 30,
    width: 1328,
    borderRadius: '0px 0px 0px 0px'
  }
}));


const StaffList003_figure = () => {
  const [user, setUser] = useState([]);

  useEffect(() => getData());

  const classes = useStyles();

  const getData = () => {
    if(user.length === 0){
        axios
            .get('/api/stafflist003/4')
            .then(response => {
                setUser(response.data);
            })
            .catch(() => {
                console.log('connected error');
            })
}}

  return (
    <div className={classes.root}>
      <div className={classes.figure}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="baseline">
            <Grid>
              <Paper className={classes.number} variant="outlined">１</Paper>
            </Grid>
        </Grid>
      </div>

      <div className={classes.figure}>
      {user.map((data) => (
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="baseline">
            <Grid>
              <Paper className={classes.content_color} variant="outlined">期間</Paper>
            </Grid>
            <Grid>
              <Paper  className={classes.content_day} variant="outlined" key={data.経歴番号}>{data.開始日}~{data.終了日}</Paper>
            </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline">
              <Grid>
                <Paper className={classes.content2} variant="outlined">職種</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content3} variant="outlined"key={data.経歴番号}>{data.職種}</Paper>
              </Grid>
              </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content2} variant="outlined">業種</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content3} variant="outlined"></Paper>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content4} variant="outlined">工程</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content5} variant="outlined"></Paper>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content6} variant="outlined">役割規模</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content7} variant="outlined" key={data.経歴番号}>{data.人数}人</Paper>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content2} variant="outlined">担当</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content3} variant="outlined"></Paper>
              </Grid>
              </Grid>
          </Grid>
            ))}
        </div>

        <div className={classes.figure}>
        {user.map((data) => (
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="baseline">
            <Grid>
              <Paper className={classes.content_color} variant="outlined">案件名</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.content} variant="outlined" key={data.経歴番号}>{data.案件名}</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.content8} variant="outlined" key={data.経歴番号}>{data.案件内容}</Paper>
            </Grid>
            </Grid>
              ))}
          </div>

          <div className={classes.figure}>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content9_color} variant="outlined">環境使用/ソフト</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
            </Grid>
          </div>

          <div className={classes.figure}>
          {user.map((data) => (
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content9_color} variant="outlined">言語/その他</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined" key={data.経歴番号}>{data.言語}</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content9} variant="outlined"></Paper>
              </Grid> 
            </Grid>
              ))}
          </div>
          <div>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="baseline">
              <Paper className={classes.add}></Paper>
            </Grid>
          </div>
    </div>
  );
}

export default StaffList003_figure;