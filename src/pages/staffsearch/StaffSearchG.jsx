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

  //セレクト項目
  // const [state, setState] = useState({
    // sk1: '',
    // sk2: '',
    // sk3: '',
    // st1: '',
    // st2: '',
    // st3: '',
    // ge: '',
    // areas:'',
    // older:'',
  //});

  //セレクト切り替え
  // const handleChange3 = (event) => {
  //   setState({ ...state,[event.target.name]: event.target.value});
  // };

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

  // const getUserData = () => {
  //    axios
  //      .get('/api/staffsearch/1')
  //      .then(response => {
  //       console.log([response.data]);
  //       })
  //       .catch(() => {
  //         console.log('connected error');
  //       })
  // }

  const current_data = licenses.filter((data) => {
    if(license==='ITパスポート'){
      return data.id === 1;
    }
    else if(license==='基本情報技術者'){
      return data.id === 2;
    }
    else if(license==='応用情報技術者'){
      return data.id === 3;
    }
    else if(license==='システムアーキテクト'){
      return data.id === 4;
    }
    else if(license==='ネットワークスペシャリスト'){
      return data.id === 5;
    }
    else if(license==='情報処理安全保障支援士'){
      return data.id === 6;
    }
    else if(license==='データスペシャリスト'){
      return data.id === 7;
    }
    else if(license==='エンべデットスペシャリスト'){
      return data.id === 8;
    }
    else if(license==='AWS認定試験'){
      return data.id === 9;
    }
    else if(license==='オラクルマスター'){
      return data.id === 10;
    }
  });

  const current_data2 = skill.filter((data) => {
    if(skill1 === 'Java'){
    return data.id === 1;
    }
    else if(skill1 === 'C言語'){
      return data.id === 2;
    }
    else if(skill1 === 'C#'){
      return data.id === 3;
    }
    else if(skill1 === 'C++'){
      return data.id === 4;
    }
    else if(skill1 === 'MySQL'){
      return data.id === 5;
    }
    else if(skill1 === 'Ruby'){
      return data.id === 6;
    }
    else if(skill1 === 'Oracle'){
      return data.id === 7;
    }
    else if(skill1 === 'Python'){
      return data.id === 8;
    }
    else if(skill1 === 'JavaScript'){
      return data.id === 9;
    }
    else if(skill1 === 'PHP'){
      return data.id === 10;
    }
  });

  const current_data3 = status.filter((data) => {
    if(status1 === '1'){
      return data.id === 1;
    }
    else if(status1 === '2'){
      return data.id === 2;
    }
    else if(status1 === '3'){
      return data.id === 3;
    }
    else if(status1 === '4'){
      return data.id === 4;
    }
    else if(status1 === '5'){
      return data.id === 5;
    }
    else if(status1 === '6'){
      return data.id === 6;
    }
    else if(status1 === '7'){
      return data.id === 7;
    }
    else if(status1 === '8'){
      return data.id === 8;
    }
    else if(status1 === '9'){
      return data.id === 9;
    }
    else if(status1 === '10'){
      return data.id === 10;
    }
    }); 

  const current_data4 =skill.filter((data)=>{
    if(skill2 === 'Java'){
      return data.id === 1;
      }
      else if(skill2 === 'C言語'){
        return data.id === 2;
      }
      else if(skill2 === 'C#'){
        return data.id === 3;
      }
      else if(skill2 === 'C++'){
        return data.id === 4;
      }
      else if(skill2 === 'MySQL'){
        return data.id === 5;
      }
      else if(skill2 === 'Ruby'){
        return data.id === 6;
      }
      else if(skill2 === 'Oracle'){
        return data.id === 7;
      }
      else if(skill2 === 'Python'){
        return data.id === 8;
      }
      else if(skill2 === 'JavaScript'){
        return data.id === 9;
      }
      else if(skill2 === 'PHP'){
        return data.id === 10;
      }
  });

  const current_data5 = status.filter((data)=>{
    if(status2 === '1'){
      return data.id === 1;
    }
    else if(status2 === '2'){
      return data.id === 2;
    }
    else if(status2 === '3'){
      return data.id === 3;
    }
    else if(status2 === '4'){
      return data.id === 4;
    }
    else if(status2 === '5'){
      return data.id === 5;
    }
    else if(status2 === '6'){
      return data.id === 6;
    }
    else if(status2 === '7'){
      return data.id === 7;
    }
    else if(status2 === '8'){
      return data.id === 8;
    }
    else if(status2 === '9'){
      return data.id === 9;
    }
    else if(status2 === '10'){
      return data.id === 10;
    }
  });

  const current_data6 = skill.filter((data)=>{
    if(skill3 === 'Java'){
      return data.id === 1;
      }
      else if(skill3 === 'C言語'){
        return data.id === 2;
      }
      else if(skill3 === 'C#'){
        return data.id === 3;
      }
      else if(skill3 === 'C++'){
        return data.id === 4;
      }
      else if(skill3 === 'MySQL'){
        return data.id === 5;
      }
      else if(skill3 === 'Ruby'){
        return data.id === 6;
      }
      else if(skill3 === 'Oracle'){
        return data.id === 7;
      }
      else if(skill3 === 'Python'){
        return data.id === 8;
      }
      else if(skill3 === 'JavaScript'){
        return data.id === 9;
      }
      else if(skill3 === 'PHP'){
        return data.id === 10;
      }
  });

  const current_data7 = status.filter((data)=>{
    if(status3 === '1'){
      return data.id === 1;
    }
    else if(status3 === '2'){
      return data.id === 2;
    }
    else if(status3 === '3'){
      return data.id === 3;
    }
    else if(status3 === '4'){
      return data.id === 4;
    }
    else if(status3 === '5'){
      return data.id === 5;
    }
    else if(status3 === '6'){
      return data.id === 6;
    }
    else if(status3 === '7'){
      return data.id === 7;
    }
    else if(status3 === '8'){
      return data.id === 8;
    }
    else if(status3 === '9'){
      return data.id === 9;
    }
    else if(status3 === '10'){
      return data.id === 10;
    }
  });

  const current_data8 = older.filter((data) => {
    if(age === '10~20'){
      return data.id === 1;
    }
    else if(age === '21~30'){
      return data.id === 2;
    }
    else if(age === '31~40'){
      return data.id === 3;
    }
    else if(age === '41~50'){
      return data.id === 4;
    }
    else if(age === '51~60'){
      return data.id === 5;
    }
  }); 

  const current_data9 = gender.filter((data) => {
    if(ge === '男'){
      return data.id === 1;
    }
    else if(ge === '女'){
      return data.id === 2;
    }
  });   

  const current_data10 = area.filter((data) => {
  if(areas === '北海道'){
    return data.id === 1;
  }
  else if(areas === '東北'){
    return data.id === 2;
  }
  else if(areas === '関東'){
    return data.id === 3;
  }
  else if(areas === '中部'){
    return data.id === 4;
  }
  else if(areas === '近畿'){
    return data.id === 5;
  }
  else if(areas === '中国'){
    return data.id === 6;
  }
  else if(areas === '九州'){
    return data.id === 7;
  }
  }); 

  const Search = () =>{
    console.log(current_data);
    console.log(current_data2);
    console.log(current_data3);
    console.log(current_data4);
    console.log(current_data5);
    console.log(current_data6);
    console.log(current_data7);
    console.log(current_data8);
    console.log(current_data9);
    console.log(current_data10);
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