// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { ComposedChart,Tooltip, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
// // import { static } from 'express';
// // import { withStyles } from '@material-ui/core/styles';
// // import Dialog from '@material-ui/core/Dialog';
// // import MuiDialogTitle from '@material-ui/core/DialogTitle';
// // import MuiDialogContent from '@material-ui/core/DialogContent';
// // import MuiDialogActions from '@material-ui/core/DialogActions';
// // import CloseIcon from '@material-ui/icons/Close';
// // import Typography from '@material-ui/core/Typography';
// import axios from 'axios';
// import { useEffect } from 'react';


// const useStyles = makeStyles((theme) => ({
// graph1: {
//   position: "absolute",
//   top: 0,
//   left: 35,
//   margin: 0,
//   width: 300,
//   height: 200,
// },
// graph2: {
//   position: "absolute",
//   top: 0,
//   left: 440,
//   margin:0,
//   width: 300,
//   height:200,
// },
// }));
//   //表示させたいデータ群
//   // const  data_event = [
//   //   { name: '国語', "点数": 500 },
//   //   { name: '数学', "点数": 168 },
//   //   { name: '理科', "点数": 397 },
//   //   { name: '社会', "点数": 480 },
//   //   { name: '英語', "点数": 20 },
//   // ]
// const Skill = () => {
//   const [user, setUser] = useState([]);
//   useEffect(() => getData());
//   const classes = useStyles();
//   const getData = () => {
//     if(user.length === 0){
//         axios
//             .get('/api/stafflist002/1')
//             .then(response => {
//                 setUser(response.data);
//             })
//             .catch(() => {
//                 console.log('connected error');
//             })
// }}
//   return (
// <div>
// <div className={classes.graph1}>
//   {user.map((data) => (
// <ComposedChart　　//グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
// key={data.スタッフ番号}
// width={350}  //グラフ全体の幅を指定
// height={180}  //グラフ全体の高さを指定
// layout="vertical" //グラフのX軸とY軸を入れ替え
// data={data.スキルレベル}   //Array型のデータを指定
// margin={{ top: 20, right: 60, bottom: 0, left: 0 }}  //marginを指定
// >
// <XAxis  //X軸に関する設定
// type="number" //データタイプをnumberに変更。デフォルトではcategoryになっている
// domain={['dataMin - 100', 'dataMax + 10']} //軸の表示領域を指定
// />
// <YAxis //Y軸に関する設定
// type="category" //データタイプをcategoryに変更
// dataKey="name"  //Array型のデータの、Y軸に表示したい値のキーを指定
// />
// <Tooltip /> 
// {/* hoverさせた時に具体的な値を表示させるように指定 */}
// <CartesianGrid  //グラフのグリッドを指定
// stroke="#f5f5f5"  //グリッド線の色を指定
// /> 
// <Bar
// dataKey="点数"
// barSize={20}
// stroke="rgba(34, 80, 162, 0.2)"
// fillOpacity={1}
// fill="#2250A2"
// />
// </ComposedChart>
//   ))}
// </div>
// <div className={classes.graph2}>
//   {user.map((data) => 
// <ComposedChart　　//グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
// width={350}  //グラフ全体の幅を指定
// height={180}  //グラフ全体の高さを指定
// layout="vertical" //グラフのX軸とY軸を入れ替え
// data={data.自己評価}   //Array型のデータを指定
// margin={{ top: 20, right: 60, bottom: 0, left: 0 }}  //marginを指定
// >
// <XAxis  //X軸に関する設定
// type="number" //データタイプをnumberに変更。デフォルトではcategoryになっている
// domain={['dataMin - 100', 'dataMax + 10']} //軸の表示領域を指定
// />
// <YAxis //Y軸に関する設定
// type="category" //データタイプをcategoryに変更
// dataKey="name"  //Array型のデータの、Y軸に表示したい値のキーを指定
// />
// <Tooltip /> 
// {/* hoverさせた時に具体的な値を表示させるように指定 */}
// <CartesianGrid  //グラフのグリッドを指定
// stroke="#f5f5f5"  //グリッド線の色を指定
// /> 
// <Bar
// dataKey="点数"
// barSize={20}
// stroke="rgba(34, 80, 162, 0.2)"
// fillOpacity={1}
// fill="#2250A2"
// />
// </ComposedChart>
//   )}
// </div>
// </div>
//   );
// }
// export default Skill;

import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import {ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar} from 'recharts';
// import classes from '*.module.css';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  graph:{
    position: "absolute",
    top: -280,
    left: 500,
  }
}));

// const data = [
//     { name: {data.level}, "レベル": 5 },
    // { name: 'PHP', "レベル": 0 },
    // { name: 'Python', "レベル": 1 },
    // { name: 'Ruby', "レベル": 4 },
    // { name: 'JavaScript', "レベル": 3 },
// ];

// const Graph = () =>  {
//     const [chartData, setChartData] = useState([]);
//     const classes = useStyles();

    // useEffect(() => {
    //     setChartData(data);
    // },[]);
    const Graph = () => {
  const [user, setUser] = useState([]);
  useEffect(() => getData());
  const classes = useStyles();
  const getData = () => {
    if(user.length === 0){
        axios
            .get('/api/stafflist002/1')
            .then(response => {
                setUser(response.data);
            })
            .catch(() => {
                console.log('connected error');
            })
}}

  return (
    
    <Paper>
      {user.map((data) => ( 
      <ComposedChart
          width={600}
          height={280}
          layout="vertical"
          key={data.staffnamber}
        //   data={data.level}
          margin={{ top: 20, right: 60, bottom: 0, left: 150 }}
      >
          {data.level}
      <XAxis
          type="number"
          domain={['0','1','2','3','4','5']} //軸の表示領域を指定
      />
      <YAxis
          type="category"
          dataKey="name"
      />
      <Tooltip />
      <CartesianGrid
          stroke="#f5f5f5"
      /> 
      <Bar
          dataKey="レベル"
          barSize={20}
          stroke="rgba(34, 80, 162, 0.2)"
          fillOpacity={1}
          fill="#2250A2"
      />
      </ComposedChart>
      ))}
      <ComposedChart
          width={600}
          height={280}
          layout="vertical"
        //   data={data.assessment}
          margin={{ top: 20, right: 60, bottom: 0, left: 150 }}
      className={classes.graph}>
      <XAxis
          type="number"
          domain={['0','1','2','3','4','5']} //軸の表示領域を指定
      />
      <YAxis
          type="category"
          dataKey="name"
      />
      <Tooltip />
      <CartesianGrid
          stroke="#f5f5f5"
      /> 
      <Bar
          dataKey="レベル"
          barSize={20}
          stroke="rgba(34, 80, 162, 0.2)"
          fillOpacity={1}
          fill="#2250A2"
      />
      </ComposedChart>
      
      </Paper>
    
  );
      }

export default Graph;