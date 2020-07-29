import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  }, 
  content:{
    height: theme.spacing(17),
  }, 
}));

const StaffList003_figure = (props) => {
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
      {user.map((data) => (
        <Typography gutterBottom key={data.staff_id}>
        <table>
          <tr>
            <th>案件名</th>
            <th>案件保有会社</th>
          </tr>
          <tr>
            <td>{data.matter_name}</td>
            <td>{data.customer}</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>依頼単価</th>
            <th>勤務地</th>
            <th>職種</th>
          </tr>
          <tr>
           <td>{data.cost}</td> 
           <td>{data.place}</td> 
           <td>{data.occupation}</td> 
          </tr>
          <tr>
            <th>募集人数</th>
            <th>案件開始日</th>
            <th>案件終了日</th>
          </tr>
          <tr>
            <td>{data.people}人</td>
            <td>{data.start_day}</td>
            <td>{data.end_day}</td>
          </tr>
        </table>
        <table>
          <tr>
          <th>案件内容</th>
          </tr>
          <tr>
            <td className={classes.content}>{data.matter_content}</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>スキル1</th>
            <th>スキル2</th>
            <th>スキル3</th>
          </tr>
          <tr>
            <td>{data.skill_1}</td>
            <td>{data.skill_2}</td>
            <td>{data.skill_3}</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>必須スキル</th>
            <th>備考欄</th>
          </tr>
          <tr>
            <td>{data.skill_level}</td>
            <td>{data.note}</td>
          </tr>
        </table>
        </Typography>
      ))}
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
    {data.matter_name ? <StaffList003_figure id={props.id}/>:"経歴データなし"}
    </div>
    ))} 
  </div>
);
}

export default StaffList003_map;

