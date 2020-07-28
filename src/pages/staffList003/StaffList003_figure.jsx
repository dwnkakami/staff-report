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
    lineHeight: 1.5,
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
        <table>
          <tr>
            <th>案件名</th>
            <th>案件保有会社</th>
          </tr>
          <tr>
            <td>{data.matter_name}</td>
            <td>{data.customer}</td>
          </tr>
          {/* <tr>
            <th>依頼単価</th>
            <th>勤務地</th>
          </tr> */}
          <tr>
           <td>{data.cost}</td> 
           <td>{data.place}</td> 
          </tr>
          <tr>
            
          </tr>
        </table>
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

