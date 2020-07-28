import React, {useState, useEffect} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
//import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import '../Css/Search.css';
import Button from '@material-ui/core/Button';
import { Card,MenuItem } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import ListData from './ListData';

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
    position:'relative',
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const StaffSearch = () => {
  const classes = useStyles();

  //チェック切り替え
  const [ocp,setOcp] = useState([]);
  const handleChange = (event) => {
    setOcp(event.target.value);
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

  //リセット機能
  const Reset = () => {
    //setKeyWord();
    setOcp([]);
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
  const[data,setData] = useState([]);
  useEffect(() => {
    const newValue=
    {license:license,skill1:skill1,skill2:skill2,skill3:skill3,gender:ge,area:areas,occupation:ocp}
    if(data.length===0){
     axios
       .post('/api/staffsearch',newValue)
       .then(response => {
        setData(response.data);
        console.log([response.data]);
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  },[]);
  
  const [getSkill,setGetSkill] = useState([]);
  useEffect(()=>getSkillData(),[]);
  const getSkillData = ()=>{
    if(getSkill.length===0){
    axios
       .post('/api/staffsearch001')
       .then(response => {
        setGetSkill(response.data);
        console.log([response.data]);
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  }

  const [getLicense,setGetLicense] = useState([]);
  useEffect(()=>getLicenseData(),[]);
  const getLicenseData = ()=>{
    if(getLicense.length===0){
    axios
       .post('/api/staffsearch002')
       .then(response => {
        setGetLicense(response.data);
        console.log([response.data]);
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  }

  const [getArea,setGetArea] = useState([]);
  useEffect(()=>getAreaData(),[]);
  const getAreaData = () =>{
    if(getArea.length===0){
      axios
       .post('/api/staffsearch003')
       .then(response => {
        setGetArea(response.data);
        console.log([response.data]);
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  }

  const [getStatus,setGetStatus] = useState([]);
  useEffect(()=>getStatusData(),[]);
  const getStatusData=()=>{
    if(getStatus.length===0){
      axios
       .post('/api/staffsearch004')
       .then(response => {
        setGetStatus(response.data);
        console.log([response.data]);
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  }

  const [getGender,setGetGender] = useState([]);
  useEffect(()=>getGenderData(),[]);
  const getGenderData = () =>{
    if(getGender.length===0){
      axios
       .post('/api/staffsearch005')
       .then(response => {
        setGetGender(response.data);
        console.log([response.data]);
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  }

  const [getAge,setGetAge] = useState([]);
  useEffect(()=>getAgeData(),[]);
  const getAgeData = () =>{
    if(getAge.length===0){
      axios
       .post('/api/staffsearch006')
       .then(response => {
        setGetAge(response.data);
        console.log([response.data]);
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  }

  const [getOcp,setGetOcp] = useState([]);
  useEffect(()=>getOcpData(),[]);
  const getOcpData = () =>{
    if(getOcp.length===0){
      axios
       .post('/api/staffsearch007')
       .then(response => {
        setGetOcp(response.data);
        console.log([response.data]);
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  }

  const Search = () =>{
  const search = data.filter((data)=>{
    return (((data.license === license) ||
              (((data.skill === skill1) ||
            (data.skill === skill2) ||
            (data.skill === skill3)) ||
            ((data.level === status1) ||
            (data.level === status2) ||
            (data.level === status3)) ||
            ((data.gender === ge) ||
            (data.age === age) ||
            (data.area === areas)))||
            ((data.occupation === ocp[0])||
            (data.occupation === ocp[1])||
            (data.occupation === ocp[2])||
            (data.occupation === ocp[3])||
            (data.occupation === ocp[4])||
            (data.occupation === ocp[5]))));
  });
    console.log(search);
    ListData.setStaffData(search);
    window.location.href = "/#/staff-report/stafflist-result/001";
  }

  return (
    <div class='body'>
    <Card class='paper'>
    <p class='font'>スタッフ検索</p>
    <p class='font'>職種</p>
    {/* 職種選択 */}
    <FormControl className={classes.formControl1}>
            <Select
              multiple
              value={ocp}
              onChange={handleChange}
              input={<Input />}
              renderValue={(selected)=>selected.join(', ')}
              MenuProps={MenuProps}
            >
              {getOcp.map((name) => (
                <MenuItem key={name.name} value={name.name}>
                  <Checkbox checked={ocp.indexOf(name.name) > -1} />
                  <ListItemText primary={name.name} />
                </MenuItem>
              ))}
            </Select>
    </FormControl>

      {/* <FormControl variant="filled" className={classes.formControl1}>
        <Select
          value={ocp}
          onChange={handleChange}
          //name = "license"
        >
          {getOcp.map((data)=>(
            <option key={data.id} value={data.name}>
              {data.name}
            </option>
          ))}
        </Select>
    </FormControl> */}

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
          //name = "license"
        >
          {getLicense.map((data)=>(
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
          //name="skill1"
          label="スキルレベル１"
        >
          {getSkill.map((data)=>(
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
         {getStatus.map((data)=>(
            <option key={data.level} value={data.level}>
              {data.level}
            </option>
          ))}
        </Select>
      </FormControl>

    {/* スキル情報２ */}
    <FormControl variant="filled" className={classes.formControl5}>
        <Select
          value={skill2}
          onChange={Skill2Change}
          //name="skill2"
          inputProps={{
            // name: 'sk2',
            id: 'filled-age-native-simple',
          }}
        >
          {getSkill.map((data)=>(
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
          //  name: 'st2',
            id: 'filled-age-native-simple',
          }}
        >
         {getStatus.map((data)=>(
            <option key={data.level} value={data.level}>
              {data.level}
            </option>
          ))}
        </Select>
      </FormControl>

    {/* スキル情報３ */}
    <FormControl variant="filled" className={classes.formControl6}>
        <Select
          value={skill3}
          onChange={Skill3Change}
         // name="skill3"
          inputProps={{
            // name: 'sk3',
            id: 'filled-age-native-simple',
          }}
        >
          {getSkill.map((data)=>(
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
          //  name: 'st3',
            id: 'filled-age-native-simple',
          }}
        >
          {getStatus.map((data)=>(
            <option key={data.level} value={data.level}>
              {data.level}
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
          {getAge.map((data)=>(
            <option key={data.age} value={data.age}>
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
         // name="ge"
          inputProps={{
            // name: 'ge',
            id: 'filled-age-native-simple',
          }}
        >
          {getGender.map((data)=>(
            <option key={data.gender} value={data.gender}>
              {data.gender}
            </option>
          ))}
        </Select>
      </FormControl>

      <p class='area'>地域</p>
      <FormControl variant="filled" className={classes.formControl4}>
        <Select
          value={areas}
          onChange={aresChenge}
          //name="areas"
          inputProps={{
            // name: 'areas',
            id: 'filled-age-native-simple',
          }}
        >
          {getArea.map((data)=>(
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