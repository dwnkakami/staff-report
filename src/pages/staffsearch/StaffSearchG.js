import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../Css/Search.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import {occupations} from '../variables/Occupations';
import {licenses} from '../variables/License';
import {skill} from '../variables/Skill';
import {area} from '../variables/Area';
import {gender} from '../variables/Gender';
import {status} from '../variables/Status';
import CheckBox from './CheckBox';

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

const StaffSearch = () => {
  const classes = useStyles();
  
  // //チェックボックス項目
  // const [check, setCheck] = useState({
  //       checked: false,
  // });

  // //チェック切り替え
  // const handleChange = (event) => {
  //   setCheck({ ...check, [event.target.name]: event.target.checked });
  // };

  const [license, setLicense] = useState([]);

    const handleChange2 = (event) => {
      setLicense(event.target.value);
    };

  //セレクト項目
  const [state, setState] = useState({
    sk1: '',
    sk2: '',
    sk3: '',
    st1: '',
    st2: '',
    st3: '',
    ge: '',
    areas:'',
  });

  //セレクト切り替え
  const handleChange3 = (event) => {
    setState({ ...state,[event.target.name]: event.target.value});
  };

  //テキスト（年齢）
  const [text,setText]= useState({
    label: '',
  });

  //text更新
  const handleChange4 = (event) => {
    setText(event.target.value);
  };

  //radioボタン
  const [value,setValue]=useState({
    radioA: '',
    radioB: '',
  });

  //radioボタン切り替え
  const handleChange5 = (event) => {
    setValue({ ...value,[event.target.name]: event.target.value});
  };

  //リセット機能
  const Reset = () => {
    // setCheck({check:false});
    setLicense({license:''});
    setValue({value:''});
    setState({state:''});
    setText({label:''});
  };

  const Search=()=>{

  }

  return (
    <div>
    <Card class='paper'>
    <p class='font'>スタッフ検索</p>
    <p>職種</p>
    {/* 職種選択 */}
    <div>
      <ul>
        {occupations.map((data) => (
        <CheckBox 
          {...data}
          
        />))}
      </ul>
    </div>

    {/* 資格情報 */}
    <p>資格</p>
    <FormControl variant="filled" className={classes.formControl1}>
        <Select
          value={license}
          onChange={handleChange2}
        >
          {licenses.map((data)=>(
            <option key={data.name} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
    </FormControl>

      {/* スキル情報１ */}
      <p>スキルレベル</p>
     <FormControl variant="filled" className={classes.formControl1}>
        <Select
          value={state.sk1}
          onChange={handleChange3}
          name="sk1"
          label="スキルレベル１"
        >
          {skill.map((data)=>(
            <option key={data.name} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>

      {/* ステータス１ */}
      <FormControl variant="filled" className={classes.formControl2}>
        <Select
          value={state.st1}
          onChange={handleChange3}
          name="st1"
        >
         {status.map((data)=>(
            <option key={data.name} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>

    {/* 絞り込みボタン */}
    <RadioGroup row aria-label="position"  name="radioA" value={value.radioA} onChange={handleChange5} defaultValue="top">
        <FormControlLabel
          value="and"
          control={<Radio color="primary" />}
          label="and"
        />

        <FormControlLabel
          value="or"
          control={<Radio color="primary" />}
          label="or"
        />
    </RadioGroup>

    {/* スキル情報２ */}
    <FormControl variant="filled" className={classes.formControl1}>
        <Select
          value={state.sk2}
          onChange={handleChange3}
          inputProps={{
            name: 'sk2',
            id: 'filled-age-native-simple',
          }}
        >
          {skill.map((data)=>(
            <option key={data.name} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>

      {/* ステータス2 */}
      <FormControl variant="filled" className={classes.formControl2}>
        <Select
          value={state.st2}
          onChange={handleChange3}
          inputProps={{
            name: 'st2',
            id: 'filled-age-native-simple',
          }}
        >
         {status.map((data)=>(
            <option key={data.name} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>
    
     {/* 絞り込みボタン */}
     <RadioGroup row aria-label="position"  name="radioB" value={value.radioB} onChange={handleChange5} defaultValue="top">
        <FormControlLabel
          value="and"
          control={<Radio color="primary" />}
          label="and"
        />

        <FormControlLabel
          value="or"
          control={<Radio color="primary" />}
          label="or"
        />
    </RadioGroup>

    {/* スキル情報３ */}
    <FormControl variant="filled" className={classes.formControl1}>
        <Select
          value={state.sk3}
          onChange={handleChange3}
          inputProps={{
            name: 'sk3',
            id: 'filled-age-native-simple',
          }}
        >
          {skill.map((data)=>(
            <option key={data.name} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>

      {/* ステータス3 */}
      <FormControl variant="filled" className={classes.formControl2}>
        <Select
          value={state.st3}
          onChange={handleChange3}
          inputProps={{
            name: 'st3',
            id: 'filled-age-native-simple',
          }}
        >
          {status.map((data)=>(
            <option key={data.name} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>

    <p class='older'>年齢</p>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" variant="outlined" 
        onChange={handleChange4}
        value={text.label}
      />
    </form>

    <p class='gender'>性別</p>
    <FormControl variant="filled" className={classes.formControl3}>
        <Select
          value={state.ge}
          onChange={handleChange3}
          inputProps={{
            name: 'ge',
            id: 'filled-age-native-simple',
          }}
        >
          {gender.map((data)=>(
            <option key={data.name} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>

      <p class='area'>地域</p>
      <FormControl variant="filled" className={classes.formControl4}>
        <Select
          value={state.areas}
          onChange={handleChange3}
          inputProps={{
            name: 'areas',
            id: 'filled-age-native-simple',
          }}
        >
          {area.map((data)=>(
            <option key={data.name} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>
    
      {/* リセットボタン */}
      <Button class='reset' variant="contained" onClick={Reset}>クリア</Button>
      
      {/* 検索ボタン */}
      <Button class='search' variant="contained" onClick={Search}>検索</Button>
    </Card>
    </div>
  );
}

export default StaffSearch;