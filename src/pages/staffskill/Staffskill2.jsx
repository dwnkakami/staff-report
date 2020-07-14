import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ComposedChart,Tooltip, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
// import { static } from 'express';
// import { withStyles } from '@material-ui/core/styles';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import MuiDialogActions from '@material-ui/core/DialogActions';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
graph1: {
  position: "absolute",
  top: 0,
  left: 35,
  margin: 0,
  width: 300,
  height: 200,
},
graph2: {
  position: "absolute",
  top: 0,
  left: 440,
  margin:0,
  width: 300,
  height:200,
},
// graph3: {
//   position: "absolute",
//   top: 0,
//   left: 840,
//   margin: 0,
//   width: 300,
//   height:200,
// },
}));
  //表示させたいデータ群
  // const  data_event = [
  //   { name: '国語', "点数": 500 },
  //   { name: '数学', "点数": 168 },
  //   { name: '理科', "点数": 397 },
  //   { name: '社会', "点数": 480 },
  //   { name: '英語', "点数": 20 },
  // ]
const Skill = () => {
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
<div>
<div className={classes.graph1}>
  {user.map((data) => (
<ComposedChart　　//グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
key={data.スタッフ番号}
width={350}  //グラフ全体の幅を指定
height={180}  //グラフ全体の高さを指定
layout="vertical" //グラフのX軸とY軸を入れ替え
data={data.スキルレベル}   //Array型のデータを指定
margin={{ top: 20, right: 60, bottom: 0, left: 0 }}  //marginを指定
>
<XAxis  //X軸に関する設定
type="number" //データタイプをnumberに変更。デフォルトではcategoryになっている
domain={['dataMin - 100', 'dataMax + 10']} //軸の表示領域を指定
/>
<YAxis //Y軸に関する設定
type="category" //データタイプをcategoryに変更
dataKey="name"  //Array型のデータの、Y軸に表示したい値のキーを指定
/>
<Tooltip /> 
{/* hoverさせた時に具体的な値を表示させるように指定 */}
<CartesianGrid  //グラフのグリッドを指定
stroke="#f5f5f5"  //グリッド線の色を指定
/> 
<Bar
dataKey="点数"
barSize={20}
stroke="rgba(34, 80, 162, 0.2)"
fillOpacity={1}
fill="#2250A2"
/>
</ComposedChart>
  ))}
</div>
<div className={classes.graph2}>
  {user.map((data) => 
<ComposedChart　　//グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
width={350}  //グラフ全体の幅を指定
height={180}  //グラフ全体の高さを指定
layout="vertical" //グラフのX軸とY軸を入れ替え
data={data.自己評価}   //Array型のデータを指定
margin={{ top: 20, right: 60, bottom: 0, left: 0 }}  //marginを指定
>
<XAxis  //X軸に関する設定
type="number" //データタイプをnumberに変更。デフォルトではcategoryになっている
domain={['dataMin - 100', 'dataMax + 10']} //軸の表示領域を指定
/>
<YAxis //Y軸に関する設定
type="category" //データタイプをcategoryに変更
dataKey="name"  //Array型のデータの、Y軸に表示したい値のキーを指定
/>
<Tooltip /> 
{/* hoverさせた時に具体的な値を表示させるように指定 */}
<CartesianGrid  //グラフのグリッドを指定
stroke="#f5f5f5"  //グリッド線の色を指定
/> 
<Bar
dataKey="点数"
barSize={20}
stroke="rgba(34, 80, 162, 0.2)"
fillOpacity={1}
fill="#2250A2"
/>
</ComposedChart>
  )}
</div>
{/* <div className={classes.graph3}>
  {user.map((data) => 
<ComposedChart　　//グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
width={350}  //グラフ全体の幅を指定
height={180}  //グラフ全体の高さを指定
layout="vertical" //グラフのX軸とY軸を入れ替え
data={data.自己評価}   //Array型のデータを指定
margin={{ top: 20, right: 60, bottom: 0, left: 0 }}  //marginを指定
>
<XAxis  //X軸に関する設定
type="number" //データタイプをnumberに変更。デフォルトではcategoryになっている
domain={['dataMin - 100', 'dataMax + 10']} //軸の表示領域を指定
/>
<YAxis //Y軸に関する設定
type="category" //データタイプをcategoryに変更
dataKey="name"  //Array型のデータの、Y軸に表示したい値のキーを指定
/>
<Tooltip /> 
{/* hoverさせた時に具体的な値を表示させるように指定 */}
{/* <CartesianGrid  //グラフのグリッドを指定
stroke="#f5f5f5"  //グリッド線の色を指定
/> 
<Bar
dataKey="点数"
barSize={20}
stroke="rgba(34, 80, 162, 0.2)"
fillOpacity={1}
fill="#2250A2"
/>
</ComposedChart>
  )} */}
{/* </div> */} 
</div>
  );
}
export default Skill;