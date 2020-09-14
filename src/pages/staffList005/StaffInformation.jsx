import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { useState , useEffect } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    borderRadius: '0px 0px 0px 0px',
  },
}));

const StaffInformation = (props) => {
  const classes = useStyles();

  const [user, setUser] = useState([]);

  useEffect(() => getCasedetailData(),[]);

  const getCasedetailData = () => {
    if(user.length === 0) {
      axios
        .get(`/api/stafflist005/${props.id}`)
        .then(response => {
          setUser(response.data);
        })
         .catch(() => {
          console.log('connected error');
        })
    }
  }
  return (
    <div>
      <Paper className={classes.paper} elevation={3}>
       {user.map((data) => (
        <Typography gutterBottom key={data.staff_id}>
          <table className={classes.root}>
            <tr>
              <th>スタッフ番号</th>
              <th>雇用形態</th>
            </tr>
            <tr>
              <td className={classes.content}>{data.staff_id}</td>
              <td>{data.employment_system ? data.employment_system:"データなし"}</td>
            </tr>
            <tr>
              <th>氏名</th>
              <th>所属会社</th>
            </tr>
            <tr>
             <td className={classes.content}>{data.staff_name ? data.staff_name:"データなし"}</td> 
             <td>{data.company ? data.company:"データなし"}</td> 
            </tr>
            <tr>
              <th>役職</th>
              <th>職種</th>
            </tr>
            <tr>
             <td className={classes.content}>{data.position ? data.position:"データなし"}</td>
             <td>{data.occupation ? data.occupation:"データなし"}</td> 
            </tr>
            <tr>
              <th>入社日</th>
              <th>生年月日</th>
            </tr>
            <tr>
             <td className={classes.content}>{data.joining_day ? data.joining_day:"データなし"}</td> 
             <td>{data.birthday ? data.birthday:"データなし"}</td> 
            </tr>
            <tr>
              <th>年齢</th>
              <th>性別</th>
            </tr>
            <tr>
             <td className={classes.content}>{data.age ? data.age:"データなし"}</td> 
             <td>{data.gender ? data.gender:"データなし"}</td> 
            </tr>
            <tr>
              <th>最終学歴</th>
              <th>連絡先</th>
            </tr>
            <tr>
             <td className={classes.content}>{data.school_career ? data.school_career:"データなし"}</td> 
             <td>{data.phone_number ? data.phone_number:"データなし"}</td> 
            </tr>
            <tr>
              <th>最寄り駅</th>
              <th>現配属案件</th>
            </tr>
            <tr>
             <td className={classes.content}>{data.station ? data.station:"データなし"}</td> 
             <td>{data.matter_name ? data.matter_name:"データなし"}</td> 
            </tr>
            <tr>
              <th>現案件終了予定日</th>
            </tr>
            <tr>
             <td className={classes.content}>{data.end_day　? data.end_day:"データなし"}</td> 
            </tr>
          </table>
        </Typography>
        ))}
      </Paper>
    </div>
  );
}
   export default StaffInformation;