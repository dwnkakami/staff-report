import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles,withStyles} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import '../Css/Search.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Card } from '@material-ui/core';

// const GreenCheckbox = withStyles({
//   root: {
//     color: green[400],
//     '&$checked': {
//       color: green[600],
//     },
//   },
//   checked: {},
// })((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  formControl1: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  formControl2: {
    margin: theme.spacing(1),
    minWidth: 120,
    left: 300,
  },

  formControl3: {
    margin: theme.spacing(1),
    minWidth: 120,
    left: 400,
    top:-120,
  },

  formControl4: {
    margin: theme.spacing(1),
    minWidth: 120,
    left: 80,
    top:-120,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      left:60,
    },
  },
}));


export default function StaffSearch() {
  const classes = useStyles();

  const [check, setCheck] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
  });

  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };

  const Click = () => {
    setCheck({check:false});
    setState({age:""});
    setState2({age2:""});
    setState3({age3:""});
    setState4({age4:""});
  }

  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const [state2, setState2] = React.useState({
    age2: '',
    name: 'hai',
  });

  const [state3, setState3] = React.useState({
    age3: '',
    name: 'hai',
  });

  const [state4, setState4] = React.useState({
    age4: '',
    name: 'hai',
  });

  const Changehandle = (event) => {
    //const name = event.target.name;
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
    setState2({
      ...state2,
      [event.target.name]: event.target.value
    });
    setState3({
      ...state3,
      [event.target.name]: event.target.value
    });
    setState4({
      ...state4,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
    <Card class='paper'>
    <p class='font'>スタッフ検索</p>
    <p>職種</p>
    {/* 職種選択 */}
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={check.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        label="：ディレクター"
      />
      
      <FormControlLabel
        control={
          <Checkbox
            checked={check.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="：プログラマ"
      />

    <FormControlLabel
        control={
          <Checkbox
            checked={check.checkedF}
            onChange={handleChange}
            name="checkedF"
            color="primary"
          />
        }
        label="：サポート"
      />

　　<FormControlLabel
        control={
          <Checkbox
            checked={check.checkedG}
            onChange={handleChange}
            name="checkedG"
            color="primary"
          />
        }
        label="：その他"
    />　
    </FormGroup>

    {/* 資格情報 */}
    <p>資格</p>
    <FormControl variant="filled" className={classes.formControl1}>
        <Select
          native
          value={state.age}
          onChange={Changehandle}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"ITパスポート"}>ITパスポート</option>
          <option value={"基本情報技術者"}>基本情報技術者</option>
          <option value={"応用情報技術者"}>応用情報技術者</option>
        </Select>
    </FormControl>

      {/* スキル情報１ */}
      <p>スキルレベル</p>
     <FormControl variant="filled" className={classes.formControl1}>
        <Select
          native
          value={state2.age2}
          onChange={Changehandle}
          inputProps={{
            name: 'age2',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Java"}>Java</option>
          <option value={"C#"}>C#</option>
          <option value={"C++"}>C++</option>
        </Select>
      </FormControl>

      {/* ステータス１ */}
      <FormControl variant="filled" className={classes.formControl2}>
        <Select
          native
          value={state.age}
          onChange={Changehandle}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>

    {/* 絞り込みボタン */}
    <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="and"
          control={<Radio color="primary" />}
          label="and"
          labelPlacement="and"
        />

        <FormControlLabel
          value="or"
          control={<Radio color="primary" />}
          label="or"
          labelPlacement="or"
        />
    </RadioGroup>

    {/* スキル情報２ */}
    <FormControl variant="filled" className={classes.formControl1}>
        <Select
          native
          value={state3.age3}
          onChange={Changehandle}
          inputProps={{
            name: 'age3',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Java"}>Java</option>
          <option value={"C#"}>C#</option>
          <option value={"C++"}>C++</option>
        </Select>
      </FormControl>

      {/* ステータス2 */}
      <FormControl variant="filled" className={classes.formControl2}>
        <Select
          native
          value={state.age}
          onChange={Changehandle}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    
     {/* 絞り込みボタン */}
     <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="and"
          control={<Radio color="primary" />}
          label="and"
          labelPlacement="and"
        />

        <FormControlLabel
          value="or"
          control={<Radio color="primary" />}
          label="or"
          labelPlacement="or"
        />
    </RadioGroup>

    {/* スキル情報３ */}
    <FormControl variant="filled" className={classes.formControl1}>
        <Select
          native
          value={state4.age4}
          onChange={Changehandle}
          inputProps={{
            name: 'age4',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Java"}>Java</option>
          <option value={"C#"}>C#</option>
          <option value={"C++"}>C++</option>
        </Select>
      </FormControl>

      {/* ステータス3 */}
      <FormControl variant="filled" className={classes.formControl2}>
        <Select
          native
          value={state.age}
          onChange={Changehandle}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>

    <p class='older'>年齢</p>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>

    <p class='gender'>性別</p>
    <FormControl variant="filled" className={classes.formControl3}>
        <Select
          native
          value={state.age4}
          onChange={Changehandle}
          inputProps={{
            name: 'age4',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={"男"}>男</option>
          <option value={"女"}>女</option>
        </Select>
      </FormControl>

      <p class='area'>地域</p>
      <FormControl variant="filled" className={classes.formControl4}>
        <Select
          native
          value={state.age}
          onChange={Changehandle}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </Select>
      </FormControl>
    
      {/* リセットボタン */}
      <Button class='reset' variant="contained" onClick={Click}>
        クリア
      </Button>
      
      {/* 検索ボタン */}
      <Button class='search' variant="contained">検索</Button>
    </Card>
    </div>
  );
}