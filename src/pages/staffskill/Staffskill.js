import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
import CancelIcon from '@material-ui/icons/Cancel';
// import AlarmIcon from '@material-ui/icons/Alarm';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { List } from '@material-ui/core';
import { ComposedChart,Tooltip, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
// import { static } from 'express';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(200),
      height: theme.spacing(80),
    },
  },
  title: {
    position: "absolute",
    fontSize: 40,
    margin: 0,
    left: 80,
    top: 60,
  },
  icon: {
    position: "absolute",
    left: 1200,
    top: 10,
  },
  name: {
    position: "absolute",
    top: 130,
    left: 50,
    fontSize: 20,
  },
  buttongroup: {
    position: "absolute",
    top: 160,
    left: 50,
  },
  button1: {
    position: "absolute",
    top:160,
    left: 850,
  },
  button2: {
    position: "absolute",
    top: 160,
    left: 1050,
  },
  list1: {
    lineheight: 1 ,
  },
  list2: {
    lineheight: 1 ,
    backgroundColor: "SkyBlue",
  },
  background: {
    position :"relative",
    top: 200,
    width: 1150,
    left: 40,
  }
}));
  //表示させたいデータ群
  const  data_event = [
    { name: '国語', "点数": 1500 },
    { name: '数学', "点数": 868 },
    { name: '理科', "点数": 1397 },
    { name: '社会', "点数": 1480 },
    { name: '英語', "点数": 20 },
  ]

export default function Variants() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined">
      <IconButton aria-label="delete">
        <CancelIcon className={classes.icon}/>
      </IconButton>
      <div className={classes.title}>{"スタッフ詳細"}</div>
      <div className={classes.name}>{"テスト 太郎"}</div>
         <ButtonGroup className={classes.buttongroup} variant="contained" color="primary" aria-label="contained primary button group">
         <Button>スキル</Button>
        <Button>経歴</Button>
        <Button>キャリアパス</Button>
        <Button>スタッフ情報</Button>
     </ButtonGroup>
        <Button className={classes.button1} variant="contained" color="primary">
         引き合い登録
       </Button>
       <Button className={classes.button2} variant="contained" color="primary">
         スキルシート出力
       </Button>
       <div className={classes.background}>
         <List className={classes.list1}></List>
         <List className={classes.list2}></List>
         <List className={classes.list1}></List>
         <List className={classes.list2}></List>
         <List className={classes.list1}></List>
         <List className={classes.list2}></List>
         <List className={classes.list1}></List>
         <List className={classes.list2}></List>
         <List className={classes.list1}></List>
         <List className={classes.list2}></List>
         <List className={classes.list1}></List>
         <List className={classes.list2}></List>
       </div>
       <ComposedChart　　//グラフ全体のサイズや位置、データを指定。場合によってmarginで上下左右の位置を指定する必要あり。
    width={600}  //グラフ全体の幅を指定
    height={280}  //グラフ全体の高さを指定
    layout="vertical" //グラフのX軸とY軸を入れ替え
    data={data_event}   //Array型のデータを指定
    margin={{ top: 20, right: 60, bottom: 0, left: 150 }}  //marginを指定
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
      </Paper>
    </div>
  );
};

// const UseStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function IconButtons() {
//   const classes = UseStyles();

//   return (
//     <div className={classes.root}>
//       <IconButton aria-label="delete">
//         <DeleteIcon />
//       </IconButton>
//       <IconButton aria-label="delete" disabled color="primary">
//         <DeleteIcon />
//       </IconButton>
//       <IconButton color="secondary" aria-label="add an alarm">
//         <AlarmIcon />
//       </IconButton>
//       <IconButton color="primary" aria-label="add to shopping cart">
//         <AddShoppingCartIcon />
//       </IconButton>
//     </div>
//   );
// }



// const useStyles = makeStyles((theme) => ({
//   root: {
//     ...theme.typography.button,
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(1),
//   },
// }));

// export default function TypographyTheme() {
//   const classes = useStyles();

//   return <div className={classes.root}>{"This div's text looks like that of a button."}</div>;
// }


// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function BasicButtonGroup() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <ButtonGroup color="primary" aria-label="outlined primary button group">
//         <Button>One</Button>
//         <Button>Two</Button>
//         <Button>Three</Button>
//       </ButtonGroup>
//       <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
//         <Button>One</Button>
//         <Button>Two</Button>
//         <Button>Three</Button>
//       </ButtonGroup>
//       <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
//         <Button>One</Button>
//         <Button>Two</Button>
//         <Button>Three</Button>
//       </ButtonGroup>
//     </div>
//   );
// }

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

// export default function ContainedButtons() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Button variant="contained">Default</Button>
//       <Button variant="contained" color="primary">
//         Primary
//       </Button>
//       <Button variant="contained" color="secondary">
//         Secondary
//       </Button>
//       <Button variant="contained" disabled>
//         Disabled
//       </Button>
//       <Button variant="contained" color="primary" href="#contained-buttons">
//         Link
//       </Button>
//     </div>
//   );
// }
