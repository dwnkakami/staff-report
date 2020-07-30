import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useState , useEffect } from 'react';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  content:{
    // height: theme.spacing(5),
  },

}));

const StaffList005_figure = (props) => {
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
       {user.map((data) => (
        <Typography gutterBottom key={data.staff_id}>
          <table className={classes.root}>
            <tr>
              <th>スタッフ番号</th>
              <th>雇用形態</th>
            </tr>
            <tr>
              <td className={classes.content}>{data.staff_id}</td>
              <td>{data.employment_system}</td>
            </tr>
            <tr>
              <th>氏名</th>
              <th>所属会社</th>
            </tr>
            <tr>
             <td className={classes.content}>{data.staff_name}</td> 
             <td>{data.company}</td> 
            </tr>
            <tr>
              <th>役職</th>
              <th>入社日</th>
            </tr>
            <tr>
             <td className={classes.content}>{data.position}</td> 
             <td>{data.joining_day}</td> 
            </tr>
            <tr>
              <th>生年月日</th>
              <th>年齢</th>
            </tr>
            <tr>
             <td className={classes.content}>{data.birthday}</td> 
             <td>{data.age}歳</td> 
            </tr>
            <tr>
              <th>性別</th>
              <th>最終学歴</th>
            </tr>
            <tr>
             <td className={classes.content}>{data.gender}</td> 
             <td>{data.school_career}</td> 
            </tr>
            <tr>
              <th>連絡先</th>
              <th>最寄り駅</th>
            </tr>
            <tr>
             <td className={classes.content}>{data.phone_number}</td> 
             <td>{data.station}</td> 
            </tr>
            <tr>
              <th>現配属案件</th>
              <th>現案件終了予定日</th>
            </tr>
            <tr>
             <td className={classes.content}>{data.matter_name}</td> 
             <td>{data.end_day}</td> 
            </tr>
          </table>
        </Typography>
        ))}
    </div>
  );
}
   export default StaffList005_figure;