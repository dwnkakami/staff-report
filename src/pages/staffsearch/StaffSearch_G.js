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

  const [check, setCheck] = useState({
    checkedA: false,
    checkedB: false,
    checkedF: false,
    checkedG: false,
  });

  const [license, setLicense] = useState({
    li: '',
  });

  const [skill1, setSkill1] = useState({
    sk1: '',
  });

  const [skill2, setSkill2] = useState({
    sk2: '',
  });

  const [skill3, setSkill3] = useState({
    sk3: '',
  });

  const [status1, setStatus1] = useState({
    st1: '',
  });

  const [status2, setStatus2] = useState({
    st2: '',
  });

  const [status3, setStatus3] = useState({
    st3: '',
  });

  const [gender, setGender] = useState({
    ge: '',
  });

  const [areas,setAreas] = useState({
    areas:'',
  })

  const [text,setText]= useState({
    label: '',
  });

  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
    setText(event.target.value);
  };

  const Reset = () => {
    setCheck({check:false});
    setLicense({li:""});
    setSkill1({sk1:""});
    setSkill2({sk2:""});
    setSkill3({sk3:""});
    setStatus1({st1:""});
    setStatus2({st2:""});
    setStatus3({st3:""});
    setGender({ge:''});
    setAreas({areas:''});
    setText({label:''});
  };

  const Changehandle = (event) => {
    //const name = event.target.name;
    setLicense({
      ...license,
      [event.target.name]: event.target.value
    });
    setSkill1({
      ...skill1,
      [event.target.name]: event.target.value
    });
    setSkill2({
      ...skill2,
      [event.target.name]: event.target.value
    });
    setSkill3({
      ...skill3,
      [event.target.name]: event.target.value
    });
    setStatus1({
      ...status1,
      [event.target.name]: event.target.value
    });
    setStatus2({
      ...status2,
      [event.target.name]: event.target.value
    });
    setStatus3({
      ...status3,
      [event.target.name]: event.target.value
    });
    setGender({
      ...gender,
      [event.target.name]: event.target.value
    });
    setAreas({
      ...areas,
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
          value={license.li}
          onChange={Changehandle}
          inputProps={{
            name: 'li',
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
          value={skill1.sk1}
          onChange={Changehandle}
          inputProps={{
            name: 'sk1',
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
          value={status1.st1}
          onChange={Changehandle}
          inputProps={{
            name: 'st1',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
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
          value={skill2.sk2}
          onChange={Changehandle}
          inputProps={{
            name: 'sk2',
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
          value={status2.st2}
          onChange={Changehandle}
          inputProps={{
            name: 'st2',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
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
          value={skill3.sk3}
          onChange={Changehandle}
          inputProps={{
            name: 'sk3',
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
          value={status3.st3}
          onChange={Changehandle}
          inputProps={{
            name: 'st3',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </Select>
      </FormControl>

    <p class='older'>年齢</p>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" variant="outlined" 
        onChange={handleChange}
        value={text.label}
      />
    </form>

    <p class='gender'>性別</p>
    <FormControl variant="filled" className={classes.formControl3}>
        <Select
          native
          value={gender.ge}
          onChange={Changehandle}
          inputProps={{
            name: 'ge',
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
          value={areas.areas}
          onChange={Changehandle}
          inputProps={{
            name: 'areas',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={'北海道'}>北海道</option>
          <option value={'青森'}>青森</option>
          <option value={'東京'}>東京</option>
        </Select>
      </FormControl>
    
      {/* リセットボタン */}
      <Button class='reset' variant="contained" onClick={Reset}>
        クリア
      </Button>
      
      {/* 検索ボタン */}
      <Button class='search' variant="contained">検索</Button>
    </Card>
    </div>
  );
}