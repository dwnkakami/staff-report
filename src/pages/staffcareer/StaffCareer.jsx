import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: '0px 0px 35px 0px'
  }, 
  paper: {
    borderRadius: '0px 0px 0px 0px',
  },
  content:{
    height: theme.spacing(14),
  }, 
  title: {
    backgroundColor: '#d6ffea'
  },
}));

const StaffCareer = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => getData(),[]);

  const classes = useStyles();

  const getData = () => {
    if(user.length === 0){
        axios
            .get(`/api/stafflist003/${props.id}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(() => {
                console.log('connected error');
            })
}}

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
      {user.map((data) => (
        <Typography gutterBottom key={data.staff_id}>
        <table>
          <tr>
            <th className={classes.title}>案件名</th>
            <th className={classes.title}>案件保有会社</th>
          </tr>
          <tr>
            <td>{data.matter_name}</td>
            <td>{data.customer}</td>
          </tr>
        </table>
        <table>
          <tr>
            <th className={classes.title}>依頼単価</th>
            <th className={classes.title}>勤務地</th>
            <th className={classes.title}>職種</th>
          </tr>
          <tr>
           <td>{data.cost}</td> 
           <td>{data.place}</td> 
           <td>{data.occupation}</td> 
          </tr>
          <tr>
            <th className={classes.title}>募集人数</th>
            <th className={classes.title}>案件開始日</th>
            <th className={classes.title}>案件終了日</th>
          </tr>
          <tr>
            <td>{data.people}人</td>
            <td>{data.start_day}</td>
            <td>{data.end_day}</td>
          </tr>
        </table>
        <table>
          <tr>
          <th className={classes.title}>案件内容</th>
          </tr>
          <tr>
            <td className={classes.content}>{data.matter_content}</td>
          </tr>
        </table>
        <table>
          <tr>
            <th className={classes.title}>スキル1</th>
            <th className={classes.title}>スキル2</th>
            <th className={classes.title}>スキル3</th>
          </tr>
          <tr>
            <td>{data.skill_1 ? data.skill_1:"データなし"}</td>
            <td>{data.skill_2 ? data.skill_2:"データなし"}</td>
            <td>{data.skill_3 ? data.skill_3:"データなし"}</td>
          </tr>
        </table>
        <table>
          <tr>
            <th className={classes.title}>必須スキル</th>
            <th className={classes.title}>備考欄</th>
          </tr>
          <tr>
            <td>{data.skill_level ? data.skill_level:"データなし"}</td>
            <td>{data.note ? data.note:"データなし"}</td>
          </tr>
        </table>
        </Typography>
      ))}
      </Paper>
    </div>
);
}

const StaffList003_map = (props) => {
  const [user, setUser] = useState([]);  

  useEffect(() => getData(),[]);

  const getData = () => {
    if(user.length === 0){
        axios
            .get(`/api/stafflist003/${props.id}`)
            .then(response => {
                setUser(response.data);
            })
            .catch(() => {
                console.log('connected error');
            })
}}
return (
  <div>
    {user.map((data) => (
    <div key={props.id}>
    {data.matter_name ? <StaffCareer id={props.id}/>:"経歴データなし"}
    </div>
    ))} 
  </div>
);
}

export default StaffList003_map;

