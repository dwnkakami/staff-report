import React, {useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
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
    left: 435,
    top:30,
  },

  formControl4: {
    margin: theme.spacing(1),
    minWidth: 120,
    left: 0,
    top:20,
  },

  formControl5: {
    margin: theme.spacing(1),
    minWidth: 120,
    left: -272,
    top:80,
  },

  formControl6: {
    margin: theme.spacing(1),
    minWidth: 120,
    left: -545,
    top:160,
  },
  formControl7: {
    margin: theme.spacing(1),
    minWidth: 120,
    top:150,
  },
  formControl8: {
    margin: theme.spacing(1),
    minWidth: 120,
    left: 28,
    top:80,
  },

  formControl9: {
    margin: theme.spacing(1),
    minWidth: 120,
    left: -244,
    top:160,
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

  const[data,setData] = useState([]);

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
  };

  const getUserData = () => {

     axios
       .get('/api/staffsearch')
       .then(response => {
        setData(response.data);
        })
        .catch(() => {
          console.log('connected error');
        })
  }

  const Search = () =>{
    getUserData();
    let searchData = [];
    if(license !== null){

      console.log(license);
     searchData = data.filter((data) => {
      console.log(data.license);
       return data.license === license;
      });
      setData(searchData);
    }
    // if(skill1 !== null){
    //   data = data.filter((data) => {
    //     return data.name === skill1;
    //    });
    // }
    // if(skill2 !== null){
    //   data = data.filter((data) => {
    //     return data.name === skill2;
    //    });
    // }
    // if(skill3 !== null){
    //   data = data.filter((data) => {
    //     return data.name === skill3;
    //    });
    // }
    // if(status1 !== null){
    //   data = data.filter((data) => {
    //     return data.name === status1.value;
    //    });
    // }
    // if(status2 !== null){
    //   data = data.filter((data) => {
    //     return data.name === status2;
    //    });
    // }
    // if(status3 !== null){
    //   data = data.filter((data) => {
    //     return data.name === status3;
    //    });
    // }
    // if(ge !== null){
    //   data = data.filter((data) => {
    //     return data.name === ge;
    //    });
    // }
    // if(age !== null){
    //   data = data.filter((data) => {
    //     return data.name === age;
    //    });
    // }
    // if(areas !== null){
    //   data = data.filter((data) => {
    //     return data.name === areas;
    //    });
    // }

    console.log(data);
  }

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

    {/* スキル情報２ */}
    <FormControl variant="filled" className={classes.formControl5}>
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
      <FormControl variant="filled" className={classes.formControl8}>
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

    {/* スキル情報３ */}
    <FormControl variant="filled" className={classes.formControl6}>
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
      <FormControl variant="filled" className={classes.formControl9}>
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
     <FormControl variant="filled" className={classes.formControl7}>
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