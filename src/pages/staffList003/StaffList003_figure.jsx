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

  color_short: {
    height: 26,
    width: 307,
    textAlign: 'center',
    fontSize: 23,
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  color_short2: {
    height: 26,
    width: 307,
    textAlign: 'center',
    fontSize: 23,
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content1_1: {
    height: 63,
    width: 307,
    fontSize: 22,
    lineHeight: 2,
    textAlign: 'center',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content1_2: {
    height: 39,
    width: 307,
    fontSize: 28,
    textAlign: 'center',
    color: '#000000',
    float: 'left',
    borderRadius: '0px 0px 0px 0px'
  },
  content1_3: {
    height: 37,
    width: 307,
    fontSize: 26,
    textAlign: 'center',
    color: '#000000',
    float: 'left',
    borderRadius: '0px 0px 0px 0px'
  },
  content1_4: {
    height: 63,
    width: 307,
    fontSize: 25,
    lineHeight: 2,
    textAlign: 'center',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },

  color_long: {
    height: 26,
    width: 614,
    textAlign: 'center',
    fontSize: 23,
    background: '#6699ff',
    color: '#000000',
    borderRadius: '0px 0px 0px 0px'
  },
  content2_1: {
    height: 104,
    width: 614,
    textAlign: 'center',
    color: '#000000',
    fontSize: 23,
    borderRadius: '0px 0px 0px 0px'
  },
  content2_2: {
    height: 102,
    width: 614,
    textAlign: 'center',
    color: '#000000',
    fontSize: 23,
    borderRadius: '0px 0px 0px 0px'
  },

  content3_1: {
    height: 104,
    width: 307,
    textAlign: 'center',
    color: '#000000',
    fontSize: 25,
    lineHeight: 2,
    borderRadius: '0px 0px 0px 0px'
  },
  content3_2: {
    height: 102,
    width: 307,
    textAlign: 'center',
    color: '#000000',
    fontSize: 25,
    lineHeight: 2,
    borderRadius: '0px 0px 0px 0px'
  },

  figure: {
    float: 'left',
  },
  add: {
    height: 25,
    width: 1228,
    borderRadius: '0px 0px 0px 0px'
  }
}));


const StaffList003_figure = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => getData());

  const classes = useStyles();

  const getData = () => {
    if(user.length === 0){
        axios
            .get('/api/stafflist003/1')
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
              <Paper className={classes.color_short} variant="outlined">案件先</Paper>
            </Grid>
            <Grid>
              <Paper  className={classes.content1_4} variant="outlined" key={props.id}>{data.customer}</Paper>
            </Grid>
              <Grid>
                <Paper className={classes.color_short} variant="outlined">場所</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content1_2} variant="outlined"key={data.staff_id}>{data.place}</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.color_short} variant="outlined">職種</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content1_2} variant="outlined"key={data.staff_id}>{data.occupation}</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.color_short} variant="outlined">役割規模</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content1_2} variant="outlined" key={data.staff_id}>{data.people}人</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.color_short} variant="outlined">担当営業</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content1_2} variant="outlined"key={data.staff_id}>{data.sales_name}様</Paper>
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
            <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline">
            <Grid>
              <Paper className={classes.color_short} variant="outlined">期間</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.color_short} variant="outlined">案件名</Paper>
            </Grid>
            </Grid>
            <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline">
            <Grid>
              <Paper  className={classes.content1_1} variant="outlined" key={data.staff_id}>{data.start_day}~{data.end_day}</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.content1_1} variant="outlined" key={data.staff_id}>{data.matter_name}</Paper>
            </Grid>
            </Grid>

            <Grid>
              <Paper className={classes.color_long} variant="outlined">案件内容</Paper>
            </Grid>
            <Grid>
              <Paper className={classes.content2_1} variant="outlined" key={data.staff_id}>{data.matter_content}</Paper>
            </Grid>
            <Grid>
                <Paper className={classes.color_long} variant="outlined">備考</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content2_1} variant="outlined" key={data.staff_id}>{data.remark}</Paper>
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
                <Paper className={classes.color_short} variant="outlined">コスト</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content1_4} variant="outlined"　key={data.staff_id}>{data.cost}</Paper>
              </Grid>
            <Grid>
                <Paper className={classes.color_short} variant="outlined">技能レベル</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content3_1} variant="outlined" key={data.staff_id}>{data.skill_level}</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.color_short} variant="outlined">言語</Paper>
              </Grid>
              <Grid>
                <Paper className={classes.content3_1} variant="outlined" key={data.staff_id}>{data.language}</Paper>
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
              <Paper elevation={0} className={classes.add}></Paper>
            </Grid>
          </div>
    </div>
);
}

export default StaffList003_figure;