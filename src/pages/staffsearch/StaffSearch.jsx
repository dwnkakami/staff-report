import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { Typography, DialogTitle, Grid } from '@material-ui/core';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import { Paper, MenuItem, TextField } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import './StaffSearch.css';
import ListData from './ListData';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '98%',
    height: 'auto',
    // height: theme.spacing(75),
  },

  div: {
    background: 'linear-gradient(90deg, #a2d5f2 0%, #a2d5f2 30%, #bccddb 30%, #bccddb 100%)',
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(10),
    marginLeft: theme.spacing(10),
    paddingBottom: '22px',
  },

  grid: {
    margin: '0 auto',
    marginLeft: '15px',
    marginTop: theme.spacing(4),
  },


  title: {
    backgroundColor: '#a2d5f2',
    fontSize: '21px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(1.5),
    height: '80px',
  },
  title_2: {
    backgroundColor: '#a2d5f2',
    fontSize: '21px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },

  form_1: {
    backgroundColor: '#bccddb',
    marginBottom: theme.spacing(1.5),
    height: '80px',
  },
  formControl1: {
    minWidth: 250,
    margin: theme.spacing(0.5),
    left: theme.spacing(4),
    // left: '29%',
  },
  formControl2: {
    minWidth: 250,
    margin: theme.spacing(0.5),
    left: theme.spacing(4),
  },
  skill_form: {
    backgroundColor: '#bccddb',
    // marginBottom: theme.spacing(2),

  },
  skill_form2: {
    backgroundColor: '#bccddb',
    marginBottom: theme.spacing(1.5),
    height: '80px',
  },
  skill: {
    minWidth: 130,
    margin: theme.spacing(0.5),
    left: '23.5%',
    verticalAlign: 'middle',
  },
  skill_level: {
    minWidth: 130,
    margin: theme.spacing(0.5),
    left: '23.3%',
  },
  age: {
    width: 130,
    margin: theme.spacing(0.5),
    left: theme.spacing(4),
  },
  gender: {
    minWidth: 130,
    margin: theme.spacing(0.5),
    left: theme.spacing(4),
  },
  areas: {
    minWidth: 130,
    margin: theme.spacing(0.5),
    left: theme.spacing(4),
  },

  end: {
    width: '100%',
    clear: 'both',
  },
  brank: {
    height: 35,
  },

  blockButton: {
    width: '50%',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  button: {
    left: theme.spacing(8),
    float: 'left',
    marginBottom: 20,
    // top: theme.spacing(-46),
  },
  button_2: {
    left: theme.spacing(10),
    float: 'left',
    marginBottom: 20,
    // top: theme.spacing(-46),
    backgroundColor: '#536dfe'
  },

  selectEmpty: {
    marginTop: theme.spacing(2),

  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0),
      width: '100%',
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

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      allowNegative={false}
      decimalSeparator={false}
      isNumericString
      maxLength="3"
    />
  );
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const StaffSearch = () => {
  const classes = useStyles();

  // const [andMode, setAndMode] = useState(false);
  // const ModeChange = (event) => {
  //   setAndMode(event.target.checked);
  // };

  //チェック切り替え
  const [ocp, setOcp] = useState([]);
  const handleChange = (event) => {
    setOcp(event.target.value);
  };

  const [license, setLicense] = useState('');
  const handleChange2 = (event) => {
    setLicense(event.target.value);
  };

  const [skill1, setSkill1] = useState('');
  const Skill1Change = (event) => {
    setSkill1(event.target.value);
  }

  const [skill2, setSkill2] = useState('');
  const Skill2Change = (event) => {
    setSkill2(event.target.value);
  }

  const [skill3, setSkill3] = useState('');
  const Skill3Change = (event) => {
    setSkill3(event.target.value);
  }

  const [status1, setStatus1] = useState('');
  const Status1Change = (event) => {
    setStatus1(event.target.value);
  }

  const [status2, setStatus2] = useState('');
  const Status2Change = (event) => {
    setStatus2(event.target.value);
  }

  const [status3, setStatus3] = useState('');
  const Status3Change = (event) => {
    setStatus3(event.target.value);
  }

  const [areas, setAreas] = useState('');
  const aresChenge = (event) => {
    setAreas(event.target.value);
  }

  const [ge, setGe] = useState('');
  const genderChange = (event) => {
    setGe(event.target.value);
  }

  const [age, setAge] = useState('');
  const ageChange = (event) => {
    setAge(event.target.value);
  }

  const [age2, setAge2] = useState('');
  const ageChange2 = (event) => {
    setAge2(event.target.value);
  }

  //リセット機能
  const Reset = () => {
    //setKeyWord();
    //setAndMode(false)
    setOcp([])
    setLicense('')
    setSkill1('')
    setSkill2('')
    setSkill3('')
    setStatus1('')
    setStatus2('')
    setStatus3('')
    setAreas('')
    setGe('')
    setAge('')
    setAge2('')
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    const newValue =
      {license: license, skill: skill1, skill: skill2, skill: skill3, 
        level:status1, level:status2, level:status3, gender: ge, area: areas, occupation: ocp}
    if (data.length === 0) {
      axios
        .post('/api/staffsearch', newValue)
        .then(response => {
          setData(response.data);
          console.log([response.data]);
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  }, []);

  const [getSkill, setGetSkill] = useState([]);
  useEffect(() => getSkillData(), []);
  const getSkillData = () => {
    if (getSkill.length === 0) {
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

  const [getLicense, setGetLicense] = useState([]);
  useEffect(() => getLicenseData(), []);
  const getLicenseData = () => {
    if (getLicense.length === 0) {
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

  const [getArea, setGetArea] = useState([]);
  useEffect(() => getAreaData(), []);
  const getAreaData = () => {
    if (getArea.length === 0) {
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

  const [getStatus, setGetStatus] = useState([]);
  useEffect(() => getStatusData(), []);
  const getStatusData = () => {
    if (getStatus.length === 0) {
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

  const [getGender, setGetGender] = useState([]);
  useEffect(() => getGenderData(), []);
  const getGenderData = () => {
    if (getGender.length === 0) {
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

  const [getAge, setGetAge] = useState([]);
  useEffect(() => getAgeData(), []);
  const getAgeData = () => {
    if (getAge.length === 0) {
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

  const [getOcp, setGetOcp] = useState([]);
  useEffect(() => getOcpData(), []);
  const getOcpData = () => {
    if (getOcp.length === 0) {
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

  const Search = () => {
    const search = data.filter((data) => {
      if((skill1 !== '' && status1 !== '') || (skill2 !== '' && status2 !== '') || (skill3 !== '' && status3 !== ''))
      return (data.occupation === ocp[0] ||
              data.occupation === ocp[1] ||
              data.occupation === ocp[2] ||
              data.occupation === ocp[3] ||
              data.occupation === ocp[4] ||
              data.occupation === ocp[5]) ||
             (data.license === license) ||
             (data.skill === skill1 && data.level === status1) ||
             (data.skill === skill2 && data.level === status2) ||
             (data.skill === skill3 && data.level === status3) ||
             (data.gender === ge) ||
             (data.age >= age && data.age <= age2) ||
             (data.area === areas);

      if((skill1 !== '' && status1 == '') || (skill2 !== '' && status2 == '') || (skill3 !== '' && status3 == ''))
      return (data.occupation === ocp[0] ||
              data.occupation === ocp[1] ||
              data.occupation === ocp[2] ||
              data.occupation === ocp[3] ||
              data.occupation === ocp[4] ||
              data.occupation === ocp[5]) ||
             (data.license === license) ||
             (data.skill === skill1) ||
             (data.skill === skill2) ||
             (data.skill === skill3) ||
             (data.gender === ge) ||
             (data.age >= age && data.age <= age2) ||
             (data.area === areas);
             
      if((skill1 == '' && status1 == '') || (skill2 == '' && status2 == '') || (skill3 == '' && status3 == ''))
      return (data.occupation === ocp[0] ||
              data.occupation === ocp[1] ||
              data.occupation === ocp[2] ||
              data.occupation === ocp[3] ||
              data.occupation === ocp[4] ||
              data.occupation === ocp[5]) ||
             (data.license === license) ||
             (data.gender === ge) ||
             (data.age >= age && data.age <= age2) ||
             (data.area === areas);
      });

    if((age !== '' && age2 == '') || (age == '' && age2 !== '')) {
      window.alert("年齢は上限と下限どちらも指定してください。");
    } else if(age > age2) {
      window.alert("年齢を正しく指定してください。")
    } else if((((skill1 !== '') && (skill2 !== '') && (skill3 !== '') && (status1 === '') && (status2 === '') && (status3 === ''))||
              ((skill1 !== '') && (skill2 !== '') && (skill3 === '') && (status1 === '') && (status2 === '') && (status3 === ''))||
              ((skill1 !== '') && (skill2 === '') && (skill3 !== '') && (status1 === '') && (status2 === '') && (status3 === ''))||
              ((skill1 === '') && (skill2 !== '') && (skill3 !== '') && (status1 === '') && (status2 === '') && (status3 === ''))) 
              && ((skill1 === skill2) || (skill1 === skill3) ||(skill2 === skill3))) {
      window.alert("同じスキルが選択されています。\nスキルを変更してください。");
    } else if(search.length === 0) {
      window.alert("検索結果がありません。\n条件を変更してください。");
    } else {  
      const cleanList = search.filter((data_x, index, self)=> { 
      return (self.findIndex((data_y) =>{
        return (data_x.id === data_y.id)
      }) === index);
    });
    
    console.log(cleanList);
    ListData.setStaffData(cleanList);
    window.location.href = "/#/staff-report/stafflist-result/001";}
  }

  return (
    <div className={classes.root}>
      <Paper elevation={3} variant="" >
        <Grid container spacing={3} className={classes.grid}>

        {/* 職種選択 */}
          <Grid item xs={4} className={classes.title}>
            職種
          </Grid>
          <Grid item xs={6} className={classes.form_1}>
            <FormControl className={classes.formControl1}>
              <InputLabel>職種</InputLabel>
              <Select
                multiple
                value={ocp}
                onChange={handleChange}
                input={<Input />}
                renderValue={(selected) => selected.join(', ')}
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
          </Grid>


        {/* 資格情報 */}
          <Grid item xs={4} className={classes.title}>
            資格
          </Grid>
          <Grid item xs={6} className={classes.form_1}>
          <TextField className={classes.formControl2}
            select
            label="資格"
            value={license}
            onChange={handleChange2}
            variant="outlined"
          >
            <MenuItem value=""></MenuItem>
            {getLicense.map((data) => (
              <MenuItem key={data.id} value={data.name}>
                {data.name}
              </MenuItem>
            ))}
          </TextField>
          </Grid>


        {/* スキル情報１ */}

          <Grid item xs={4} className={classes.title_2}>
            スキルレベル
          </Grid>
          <Grid item xs={3} className={classes.skill_form}>
          <TextField className={classes.skill}
            select
            label="skill①"
            value={skill1}
            onChange={Skill1Change}
            variant="outlined"
          >
            <MenuItem value=""></MenuItem>
            {getSkill.map((data) => (
              <MenuItem key={data.id} value={data.name}>
                {data.name}
              </MenuItem>
            ))}
          </TextField>
          </Grid>

          {/* ステータス１ */}
          <Grid item xs={3} className={classes.skill_form}>
          <TextField className={classes.skill_level}
            select
            label="level①"
            value={status1}
            onChange={Status1Change}
            variant="outlined"
          >
            <MenuItem value=""></MenuItem>
            {getStatus.map((data) => (
              <MenuItem key={data.level} value={data.level}>
                {data.level}
              </MenuItem>
            ))}
          </TextField>
          </Grid>

          {/* スキル情報２ */}
          <Grid item xs={4} className={classes.title_2}></Grid>
          <Grid item xs={3} className={classes.skill_form}>
            <TextField className={classes.skill}
              select
              label="skill②"
              value={skill2}
              onChange={Skill2Change}
              variant="outlined"
            >
              <MenuItem value=""></MenuItem>
              {getSkill.map((data) => (
                <MenuItem key={data.id} value={data.name}>
                  {data.name}
                </MenuItem>
              ))}
            </TextField>
            </Grid>
            {/* ステータス2 */}
            <Grid item xs={3} className={classes.skill_form}>
            <TextField className={classes.skill_level}
              select
              label="level②"
              value={status2}
              onChange={Status2Change}
              variant="outlined"
            >
              <MenuItem value=""></MenuItem>
              {getStatus.map((data) => (
                <MenuItem key={data.level} value={data.level}>
                  {data.level}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* スキル情報３ */}
          <Grid item xs={4} className={classes.title}></Grid>
          <Grid item xs={3} className={classes.skill_form2}>
          <TextField className={classes.skill}
            select
            label="skill③"
            value={skill3}
            onChange={Skill3Change}
            variant="outlined"
          >
            <MenuItem value=""></MenuItem>
            {getSkill.map((data) => (
              <MenuItem key={data.id} value={data.name}>
                {data.name}
              </MenuItem>
            ))}
          </TextField>
          </Grid>
          {/* ステータス3 */}
          <Grid item xs={3} className={classes.skill_form2}>
          <TextField className={classes.skill_level}
            select
            label="level③"
            value={status3}
            onChange={Status3Change}
            variant="outlined"
          >
            <MenuItem value=""></MenuItem>
            {getStatus.map((data) => (
              <MenuItem key={data.level} value={data.level}>
                {data.level}
              </MenuItem>
            ))}
          </TextField>
          </Grid>

          <Grid item xs={4} className={classes.title}>
            年齢
          </Grid>
          <Grid item xs={6} className={classes.form_1}>
          <TextField className={classes.age}
            placeholder="歳以上"
            label="歳以上"
            value={age}
            onChange={ageChange}
            variant="outlined"
            InputProps={{inputComponent: NumberFormatCustom}}
          />
          <TextField className={classes.age}
            placeholder="歳以下"
            label="歳以下"
            value={age2}
            onChange={ageChange2}
            variant="outlined"
            InputProps={{inputComponent: NumberFormatCustom}}
          />
          </Grid>
        
          <Grid item xs={4} className={classes.title}>
            性別
          </Grid>
          <Grid item xs={6} className={classes.form_1}>
          <TextField className={classes.gender}
            select
            label="性別"
            value={ge}
            onChange={genderChange}
            variant="outlined"
          >
            <MenuItem value=""></MenuItem>
            {getGender.map((data) => (
              <MenuItem key={data.gender} value={data.gender}>
                {data.gender}
              </MenuItem>
            ))}
          </TextField>
          </Grid>

          <Grid item xs={4} className={classes.title}>
            地域
          </Grid>
        <Grid item xs={6} className={classes.form_1}>
          <TextField className={classes.areas}
            select
            label="地域"
            value={areas}
            onChange={aresChenge}
            variant="outlined"
          >
            <MenuItem value=""></MenuItem>
            {getArea.map((data) => (
              <MenuItem key={data.id} value={data.name}>
                {data.name}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <br className={classes.end} />
        <div className={classes.blockButton}>
          {/* リセットボタン */}
          <Button variant="contained" onClick={Reset} className={classes.button}>クリア</Button>
          {/* 検索ボタン */}
          <Button variant="contained" onClick={Search} className={classes.button_2}>検索</Button>
        </div>
        </Grid>
      </Paper>
      

    </div>
  );
}
export default StaffSearch;