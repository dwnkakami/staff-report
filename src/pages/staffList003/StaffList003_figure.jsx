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
    height: 315,
    width: 70,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 8,
    fontSize: 31,
    borderRadius: '0px 0px 0px 0px'
  },
  content: {
    height: 35,
    width: 320,
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    borderRadius: '0px 0px 0px 0px'
  },
  content_day: {
    height: 63,
    width: 320,
    textAlign: 'center',
    color: '#000000',
    fontSize: 19,
    lineHeight: 2,
    borderRadius: '0px 0px 0px 0px'
  },
  content_color: {
    height: 35,
    width: 320,
    textAlign: 'center',
    fontSize: 27,
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content2_1: {
    height: 49,
    width: 90,
    fontSize: 26,
    lineHeight: 2,
    textAlign: 'center',
    float: 'left',
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content2_2: {
    height: 49,
    width: 230,
    fontSize: 25,
    lineHeight: 2,
    textAlign: 'center',
    color: '#000000',
    float: 'left',
    borderRadius: '0px 0px 0px 0px'
  },
  content2_3: {
    height: 70,
    width: 90,
    fontSize: 26,
    lineHeight: 2.5,
    textAlign: 'center',
    float: 'left',
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content2_4: {
    height: 70,
    width: 230,
    fontSize: 25,
    textAlign: 'center',
    lineHeight: 1.5,
    color: '#000000',
    float: 'left',
    borderRadius: '0px 0px 0px 0px'
  },
  content2_5: {
    height: 49,
    width: 135,
    fontSize: 27,
    lineHeight: 2,
    textAlign: 'center',
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content2_6: {
    height: 49,
    width: 185,
    textAlign: 'right',
    color: '#000000',
    fontSize: 27,
    lineHeight: 2,
    borderRadius: '0px 0px 0px 0px'
  },

  content3_color: {
    height: 35,
    width: 340,
    textAlign: 'center',
    fontSize: 27,
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content3_1: {
    height: 50,
    width: 340,
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    lineHeight: 2,
    borderRadius: '0px 0px 0px 0px'
  },
  content3_2: {
    height:230,
    width: 340,
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    borderRadius: '0px 0px 0px 0px'
  },

  content4_color: {
    height: 35,
    width: 260,
    textAlign: 'center',
    fontSize: 27,
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content4_1: {
    height: 105,
    width: 260,
    textAlign: 'center',
    lineHeight: 2,
    color: '#000000',
    fontSize: 23,
    borderRadius: '0px 0px 0px 0px'
  },
  content4_2: {
    height: 140,
    width: 260,
    textAlign: 'center',
    lineHeight: 2,
    color: '#000000',
    fontSize: 23,
    borderRadius: '0px 0px 0px 0px'
  },

  content5_color: {
    height: 35,
    width: 240,
    textAlign: 'center',
    fontSize: 27,
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content5_1: {
    height: 35,
    width: 240,
    textAlign: 'center',
    color: '#000000',
    fontSize: 25,
    borderRadius: '0px 0px 0px 0px'
  },

  figure: {
    float: 'left',
  },
  add: {
    height: 30,
    width: 1230,
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
          {user.map((data) => ( 
            <Grid>
              <Paper className={classes.number} variant="outlined" key={data.スタッフ番号}>{data.経歴番号}</Paper>
            </Grid>
              ))}
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
              <Paper  className={classes.content_day} variant="outlined" key={data.スタッフ番号}>{data.開始日}~{data.終了日}</Paper>
            </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline">
              <Grid>
                <Paper className={classes.content2_1} variant="outlined">場所</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content2_2} variant="outlined"key={data.スタッフ番号}>{data.場所}</Paper>
              </Grid>
              </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content2_3} variant="outlined">コスト</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content2_4} variant="outlined"　key={data.スタッフ番号}>{data.コスト}</Paper>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content2_5} variant="outlined">役割規模</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content2_6} variant="outlined" key={data.スタッフ番号}>{data.人数}人</Paper>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content2_1} variant="outlined">担当</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content2_2} variant="outlined"></Paper>
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
              <Paper className={classes.content3_color} variant="outlined">案件名</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.content3_1} variant="outlined" key={data.スタッフ番号}>{data.案件名}</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.content3_2} variant="outlined" key={data.スタッフ番号}>{data.案件内容}</Paper>
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
                <Paper className={classes.content4_color} variant="outlined">技能レベル</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content4_1} variant="outlined" key={data.スタッフ番号}>{data.技能レベル}</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content4_color} variant="outlined">備考</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content4_2} variant="outlined" key={data.スタッフ番号}>{data.備考}</Paper>
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
                <Paper className={classes.content5_color} variant="outlined">言語/その他</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content5_1} variant="outlined" key={data.スタッフ番号}>{data.言語}</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content5_1} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content5_1} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content5_1} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content5_1} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content5_1} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content5_1} variant="outlined"></Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content5_1} variant="outlined"></Paper>
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