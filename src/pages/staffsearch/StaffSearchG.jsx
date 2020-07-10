import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
//import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import '../Css/Search.css';
import Button from '@material-ui/core/Button';
import { Card } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import {licenses} from '../variables/License';
import {skill} from '../variables/Skill';
import {area} from '../variables/Area';
import {gender} from '../variables/Gender';
import {status} from '../variables/Status';
import {older} from '../variables/Older';
import axios from 'axios';
//import Keyword from './Keyword';

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

  //KeywordSearch
  // const [keyword, setKeyWord] = useState();
  
  //チェックボックス項目
  const [check, setCheck] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
    checkedD: false,
    checkedE: false,
    checkedF: false,
  });

  //チェック切り替え
  const handleChange = (event) => {
    setCheck({ ...check, [event.target.name]: event.target.checked });
  };

  const [license, setLicense] = useState([]);
    const handleChange2 = (event) => {
      setLicense(event.target.value);
    };

  const [skill1,setSkill1] = useState([]);
  const Skill1Change = (event) => {
    setSkill1(event.target.value);
  }

  const [skill2,setSkill2] = useState([]);
  const Skill2Change = (event) => {
    setSkill2(event.target.value);
  }

  const [skill3,setSkill3] = useState([]);
  const Skill3Change = (event) => {
    setSkill3(event.target.value);
  }

  const [status1,setStatus1] = useState([]);
  const Status1Change = (event) => {
    setStatus1(event.target.value);
  }

  const [status2,setStatus2] = useState([]);
  const Status2Change = (event) => {
    setStatus2(event.target.value);
  }

  const [status3,setStatus3] = useState([]);
  const Status3Change = (event) => {
    setStatus3(event.target.value);
  }

  const [areas,setAreas]=useState([]);
  const aresChenge = (event) => {
    setAreas(event.target.value);
  }

  const [ge,setGe]=useState([]);
  const genderChange = (event) => {
    setGe(event.target.value);
  }

  const [age,setAge] = useState([]);
  const ageChange = (event) => {
    setAge(event.target.value);
  }

  const [post,setPost] = useState([]);

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
    //setKeyWord();
    setCheck({check:false});
    setLicense({license:''});
    setSkill1({skill1:''});
    setSkill2({skill2:''});
    setSkill3({skill3:''});
    setStatus1({status1:''});
    setStatus2({status2:''});
    setStatus3({status3:''});
    setAreas({areas:''});
    setGe({ge:''});
    setAge({age:''});
    setValue({value:''});
    // setState({state:''});
  };

  const getUserData = () => {
    if(post.length === 0){
     axios
       .post('/api/staffsearch')
       .then(response => {
        console.log([response.data]);
        setPost(response.data);
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  }

  const Search = () =>{
   let data = getUserData();
    if(!license.value === null){
      const data = data.filter((data) => {
       return data.name === license.value;
      });
    }
    if(!skill1.value === null){
      const data = data.filter((data) => {
        return data.name === skill1.value;
       });
    }
    if(!skill2.value === null){
      const data = data.filter((data) => {
        return data.name === skill1.value;
       });
    }
    if(!skill3.value === null){
      const data = data.filter((data) => {
        return data.name === skill1.value;
       });
    }

    console.log(data);
  }

  // const state_data = state.filter((data) => {
  //   return data.id === state;
  // });

  return (
    <div>
    <Card class='paper'>
    <p class='font'>スタッフ検索</p>
    <p class='font'>職種</p>
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
        label="SE"
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
        label="PG"
      />

    <FormControlLabel
        control={
          <Checkbox
            checked={check.checkedC}
            onChange={handleChange}
            name="checkedC"
            color="primary"
          />
        }
        label="営業"
      />

　　<FormControlLabel
        control={
          <Checkbox
            checked={check.checkedD}
            onChange={handleChange}
            name="checkedD"
            color="primary"
          />
        }
        label="インフラSE"
    />　

    <FormControlLabel
        control={
          <Checkbox
            checked={check.checkedE}
            onChange={handleChange}
            name="checkedE"
            color="primary"
          />
        }
        label="サポート"
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
        label="総務"
    />　
    </FormGroup>

    {/* <Typography variant="h5" component="h2">
        キーワード検索
        </Typography> */}

        {/* <Keyword value={keyword} /> */}
        {/* 検索ボタン */}
      {/* <Button variant="contained">検索</Button> */}

    {/* 資格情報 */}
    <p class='font'>資格</p>
    <FormControl variant="filled" className={classes.formControl1}>
        <Select
          value={license}
          onChange={handleChange2}
        >
          {licenses.map((data)=>(
            <option key={data.id} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
    </FormControl>

      {/* スキル情報１ */}
      <p class='font'>スキルレベル</p>
     <FormControl variant="filled" className={classes.formControl1}>
        <Select
          value={skill1}
          onChange={Skill1Change}
          // name="sk1"
          label="スキルレベル１"
        >
          {skill.map((data)=>(
            <option key={data.id} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>

      {/* ステータス１ */}
      <FormControl variant="filled" className={classes.formControl2}>
        <Select
          value={status1}
          onChange={Status1Change}
        >
         {status.map((data)=>(
            <option key={data.id} value={data.name}>
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
          value={skill2}
          onChange={Skill2Change}
          inputProps={{
            // name: 'sk2',
            id: 'filled-age-native-simple',
          }}
        >
          {skill.map((data)=>(
            <option key={data.id} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>

      {/* ステータス2 */}
      <FormControl variant="filled" className={classes.formControl2}>
        <Select
          value={status2}
          onChange={Status2Change}
          inputProps={{
            name: 'st2',
            id: 'filled-age-native-simple',
          }}
        >
         {status.map((data)=>(
            <option key={data.id} value={data.name}>
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
          value={skill3}
          onChange={Skill3Change}
          inputProps={{
            // name: 'sk3',
            id: 'filled-age-native-simple',
          }}
        >
          {skill.map((data)=>(
            <option key={data.id} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>

      {/* ステータス3 */}
      <FormControl variant="filled" className={classes.formControl2}>
        <Select
          value={status3}
          onChange={Status3Change}
          inputProps={{
            name: 'st3',
            id: 'filled-age-native-simple',
          }}
        >
          {status.map((data)=>(
            <option key={data.id} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>

    <p class='older'>年齢</p>
    {/* <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" variant="outlined" 
        onChange={handleChange4}
        value={text.label}
      />
    </form> */}
     <FormControl variant="filled" className={classes.formControl1}>
        <Select
          value={age}
          onChange={ageChange}
          // name="older"
        >
          {older.map((data)=>(
            <option key={data.id} value={data.age}>
              {data.age}
            </option>
          ))}
        </Select>
      </FormControl>

    <p class='gender'>性別</p>
    <FormControl variant="filled" className={classes.formControl3}>
        <Select
          value={ge}
          onChange={genderChange}
          inputProps={{
            // name: 'ge',
            id: 'filled-age-native-simple',
          }}
        >
          {gender.map((data)=>(
            <option key={data.id} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
      </FormControl>

      <p class='area'>地域</p>
      <FormControl variant="filled" className={classes.formControl4}>
        <Select
          value={areas}
          onChange={aresChenge}
          inputProps={{
            // name: 'areas',
            id: 'filled-age-native-simple',
          }}
        >
          {area.map((data)=>(
            <option key={data.id} value={data.name}>
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