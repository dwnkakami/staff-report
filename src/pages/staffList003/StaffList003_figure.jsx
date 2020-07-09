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
  content: {
    height: 35,
    width: 330,
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    borderRadius: '0px 0px 0px 0px'
  },

  content1_color: {
    height: 35,
    width: 310,
    textAlign: 'center',
    fontSize: 27,
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content1_1: {
    height: 64,
    width: 310,
    fontSize: 24,
    lineHeight: 2,
    textAlign: 'center',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content1_2: {
    height: 55,
    width: 90,
    fontSize: 28,
    lineHeight: 2,
    textAlign: 'center',
    float: 'left',
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content1_3: {
    height: 55,
    width: 220,
    fontSize: 28,
    lineHeight: 2,
    textAlign: 'center',
    color: '#000000',
    float: 'left',
    borderRadius: '0px 0px 0px 0px'
  },
  content1_4: {
    height: 53,
    width: 115,
    fontSize: 23,
    lineHeight: 2.5,
    textAlign: 'center',
    float: 'left',
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content1_5: {
    height: 53,
    width: 195,
    fontSize: 26,
    lineHeight: 2,
    textAlign: 'center',
    color: '#000000',
    float: 'left',
    borderRadius: '0px 0px 0px 0px'
  },

  content2_day: {
    height: 63,
    width: 320,
    textAlign: 'center',
    color: '#000000',
    fontSize: 19,
    lineHeight: 2,
    borderRadius: '0px 0px 0px 0px'
  },
  content2_color: {
    height: 35,
    width: 320,
    textAlign: 'center',
    fontSize: 27,
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content2_1: {
    height: 63,
    width: 320,
    textAlign: 'center',
    color: '#000000',
    fontSize: 27,
    lineHeight: 2,
    borderRadius: '0px 0px 0px 0px'
  },
  content2_2: {
    height: 84,
    width: 320,
    textAlign: 'center',
    color: '#000000',
    fontSize: 25,
    lineHeight: 2,
    borderRadius: '0px 0px 0px 0px'
  },

  content3_color: {
    height: 35,
    width: 335,
    textAlign: 'center',
    fontSize: 27,
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content3_1: {
    height: 63,
    width: 335,
    textAlign: 'center',
    color: '#000000',
    fontSize: 24,
    lineHeight: 2,
    borderRadius: '0px 0px 0px 0px'
  },
  content3_2: {
    height:182,
    width: 335,
    textAlign: 'center',
    color: '#000000',
    fontSize: 21,
    borderRadius: '0px 0px 0px 0px'
  },

  content4_color: {
    height: 35,
    width: 265,
    textAlign: 'center',
    fontSize: 27,
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content4_1: {
    height: 100,
    width: 265,
    textAlign: 'center',
    lineHeight: 2,
    color: '#000000',
    fontSize: 26,
    borderRadius: '0px 0px 0px 0px'
  },
  content4_2: {
    height: 145,
    width: 265,
    textAlign: 'center',
    lineHeight: 2,
    color: '#000000',
    fontSize: 24,
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
            .get('/api/stafflist003/3')
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
      {user.map((data) => ( 
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="baseline">
            <Grid>
              <Paper className={classes.content1_color} variant="outlined">案件先</Paper>
            </Grid>
            <Grid>
              <Paper  className={classes.content1_1} variant="outlined" key={data.staff_id}>{data.customer}</Paper>
            </Grid>
            <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline">
              <Grid>
                <Paper className={classes.content1_2} variant="outlined">場所</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content1_3} variant="outlined"key={data.staff_id}>{data.place}</Paper>
              </Grid>
              </Grid>
              <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline">
              <Grid>
                <Paper className={classes.content1_2} variant="outlined">職種</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content1_3} variant="outlined"key={data.staff_id}>{data.occupation}</Paper>
              </Grid>
              </Grid>
              <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="baseline">
              <Grid>
                <Paper className={classes.content1_4} variant="outlined">役割規模</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content1_5} variant="outlined" key={data.staff_id}>{data.people}人</Paper>
              </Grid>
            </Grid>
              <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline">
              <Grid>
                <Paper className={classes.content1_4} variant="outlined">担当営業</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content1_5} variant="outlined"key={data.staff_id}>{data.sales_name}様</Paper>
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
              <Paper className={classes.content2_color} variant="outlined">期間</Paper>
            </Grid>
            <Grid>
              <Paper  className={classes.content2_day} variant="outlined" key={data.staff_id}>{data.start_day}~{data.end_day}</Paper>
            </Grid>
              <Grid>
                <Paper className={classes.content2_color} variant="outlined">コスト</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content2_1} variant="outlined"　key={data.staff_id}>{data.cost}</Paper>
              </Grid>
            <Grid>
                <Paper className={classes.content2_color} variant="outlined">技能レベル</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content2_2} variant="outlined" key={data.staff_id}>{data.skill_level}</Paper>
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
              <Paper className={classes.content3_1} variant="outlined" key={data.staff_id}>{data.matter_name}</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.content3_color} variant="outlined">案件内容</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.content3_2} variant="outlined" key={data.staff_id}>{data.matter_content}</Paper>
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
                <Paper className={classes.content4_color} variant="outlined">言語</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content4_1} variant="outlined" key={data.staff_id}>{data.language}</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content4_color} variant="outlined">備考</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content4_2} variant="outlined" key={data.staff_id}>{data.remark}</Paper>
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