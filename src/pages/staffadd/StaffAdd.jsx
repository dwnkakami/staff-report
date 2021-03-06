import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AddIcon from '@material-ui/icons/Add';
import { Typography, DialogTitle, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './StaffAdd.css'
import { UserProfile } from "../../context/UserContext";
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import MaskedInput from 'react-text-mask';

const useStyles = makeStyles((theme) => ({
    content: {
        width: '80%',
        position: 'relative'　
    },
    content1: {
      width: '80%',
      position: 'relative',　
      paddingTop: '10px',
    },
    grid: {
      margin: '0 auto',
      marginLeft: '15px',
    },
    title: {
      backgroundColor: '#a2d5f2',
      borderBottom: '2px solid',
      borderRight: '2px solid',
      fontSize: '21px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      borderBottom: '2px solid',
    },
    formControl: {
      minWidth: 195,
    },
    button1: {
        left: theme.spacing(2),
        backgroundColor: '#536dfe'
    },
    button: {
        textAlign: 'right',
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
}));

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
      maxLength="11"
    />
  );
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

function NumberFormatCustom2(props) {
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

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default function StaffAdd () {

const [staffId,setStaffId] = useState("");
const [name,setName] = useState("");
const [kana,setKana] = useState("");
const [gender,setGender] = useState("");
const [position,setPosition] = useState("");
const [join,setJoin] = useState("");
const [birthday,setBirthday] = useState("");
const [age,setAge] = useState("");
const [career,setCareer] = useState("");
const [phone,setPhone] = useState("");
const [station,setStation] = useState("");
const [company,setCompany] = useState("");
const [area,setArea] = useState("");
const [occupation,setOccupation] = useState("");
const [employment,setEmployment] = useState("");
const entry = new Date().toLocaleString();
const update_at = new Date().toLocaleString();
const update_by = UserProfile.getName()

const handleChange = e => {
    switch (e.target.name) {
        case 'staffId':
            setStaffId(e.target.value);
            break;
        case 'name':
            setName(e.target.value);
            break;
        case 'kana':
            setKana(e.target.value);
            break;
        case 'gender':
            setGender(e.target.value);
            break;
        case 'position':
            setPosition(e.target.value);
            break;
        case 'age':
            setAge(e.target.value);
            break;
        case 'career':
            setCareer(e.target.value);
            break;
        case 'phone':
            setPhone(e.target.value);
            break;
        case 'station':
            setStation(e.target.value);
            break;
        case 'company':
            setCompany(e.target.value);
            break;
        case 'area':
            setArea(e.target.value);
            break;
        case 'occupation':
            setOccupation(e.target.value);
            break;
        case 'employment':
            setEmployment(e.target.value);
            break;
        default:
            console.log('text not found');
    }
};

const handleChange2 = e => {
    if (e.target.value) {
        setBirthday(e.target.value);
      } else {
        const nowYear = birthday.slice(0, 4);
        const nowMonth = birthday.substr(5, 2);
        const nowDate = birthday.slice(-2);
    
        if (nowDate !== "01") {
          setBirthday(`${nowYear}-${nowMonth}-01`);
        }
        else{
          switch (nowMonth) {
            case "02":
              if ((nowYear * 1) % 4 === 0) {
                setBirthday(`${nowYear}-${nowMonth}-29`);
              } else {
                setBirthday(`${nowYear}-${nowMonth}-28`);
              }
              break;
            case "04":
            case "06":
            case "09":
            case "11":
              setBirthday(`${nowYear}-${nowMonth}-30`);
              break;
            default:
              break;
          }
        }
      }
}

const handleChange3 = e => {
    if (e.target.value) {
        setJoin(e.target.value);
      } else {
        const nowYear = join.slice(0, 4);
        const nowMonth = join.substr(5, 2);
        const nowDate = join.slice(-2);
    
        if (nowDate !== "01") {
          setJoin(`${nowYear}-${nowMonth}-01`);
        }
        else{
          switch (nowMonth) {
            case "02":
              if ((nowYear * 1) % 4 === 0) {
                setJoin(`${nowYear}-${nowMonth}-29`);
              } else {
                setJoin(`${nowYear}-${nowMonth}-28`);
              }
              break;
            case "04":
            case "06":
            case "09":
            case "11":
              setJoin(`${nowYear}-${nowMonth}-30`);
              break;
            default:
              break;
          }
        }
      }
}

const [check, setCheck] = useState(false);

const add = () => {
          axios
            .get('./api/staffadd006/' + staffId)
            .then(response => {
              if(response.data.length >=1) {
              setCheck(true)
              window.alert('そのスタッフIDは既に登録されています。');
                } else {
                    setCheck(false)
                    execStaffAdd();
                }})
            .catch(() => {
                console.log('connected error')
                window.alert('未入力項目があります。\n*は必須項目です。');
            })
        }

const execStaffAdd = () => {
    const newValue = {id:staffId, name:name, kana:kana, gender:gender, position_id:position, joining_day:join, birthday:birthday, age:age, school_career:career, phone_number:phone, near_station:station, company_id:company, area_id:area, occupation_id:occupation, employment_system_id:employment, entry_at:entry, update_at:update_at,
        　update_by:update_by
    } 
    const date = new Date().toJSON().split('T')[0]

    if((staffId.length === 0) || (name.length === 0) || (kana.length === 0) || 
        (gender.length === 0) || (position.length === 0) || (join.length === 0) || 
        (birthday.length === 0) || (age.length === 0) || (career.length === 0) || 
        (phone.length === 0) || (station.length === 0) || (company.length === 0) || 
        (area.length === 0) || (occupation.length === 0) || (employment.length === 0) || 
        (entry.length === 0) || (update_at.length === 0)) {
            window.alert('未入力項目があります。\n*は必須項目です。');
        } else if (birthday > date || '1900/01/01' > birthday) {
            window.alert('生年月日を正しく入力して下さい。')
        } else if (join < '1900/01/01') {
            window.alert('入社日を正しく入力してください。')
        } else if (phone.match(/\s+/))  {
            window.alert('電話番号を正しく入力して下さい。');
        } else {
        axios
            .post('/api/staffadd', newValue)
            .then(response => {
                console.log(response.data);
                window.alert("追加されました")
            })
            .catch(() => {
                console.log('submit error');
                window.alert("追加できませんでした")
            });
    }
}

const [state1,setState1] = useState([]);

useEffect(() => getAreaData(),[]);

const getAreaData = () => {
    if(state1.length === 0){
    axios
        .get('./api/staffadd001')
        .then(response => {
            setState1(response.data);
            console.log([response.data]);
        })
        .catch(() => {
            console.log('connected error');
        })
    }
}

const [state2,setState2] = useState([]);

useEffect(() => getCompanyData(),[]);

const getCompanyData = () => {
    if(state2.length === 0){
    axios
        .get('./api/staffadd002')
        .then(response => {
            setState2(response.data);
            console.log([response.data]);
        })
        .catch(() => {
            console.log('connected error');
        })
    }
}

const [state3,setState3] = useState([]);

useEffect(() => getEmploymentData(),[]);

const getEmploymentData = () => {
    if(state3.length === 0){
    axios
        .get('./api/staffadd003')
        .then(response => {
            setState3(response.data);
            console.log([response.data]);
        })
        .catch(() => {
            console.log('connected error');
        })
    }
}

const [state4,setState4] = useState([]);

useEffect(() => getOccupationData(),[]);

const getOccupationData = () => {
    if(state4.length === 0){
    axios
        .get('./api/staffadd004')
        .then(response => {
            setState4(response.data);
            console.log([response.data]);
        })
        .catch(() => {
            console.log('connected error');
        })
    }
}

const [state5,setState5] = useState([]);

useEffect(() => getPositionData(),[]);

const getPositionData = () => {
    if(state5.length === 0){
    axios
        .get('./api/staffadd005')
        .then(response => {
            setState5(response.data);
            console.log([response.data]);
        })
        .catch(() => {
            console.log('connected error');
        })
    }
}

const clear = () => {
    setStaffId("")
    setName("")
    setKana("")
    setGender("")
    setPosition("")
    setJoin("")
    setBirthday("")
    setAge("")
    setCareer("")
    setPhone("")
    setStation("")
    setCompany("")
    setArea("")
    setOccupation("")
    setEmployment("")
}

const classes = useStyles();

    return(
        <Paper elevation={3}>
        {/* <DialogTitle id="customized-dialog-title">
            <div  style={{ display: 'flex' }}>
            <AddIcon style={{ fontSize: '25px'}}/>
            <PeopleAltIcon style={{ fontSize: '40px', }}/>
            <Typography　style={{ fontSize: '30px' }}>スタッフ追加</Typography>
            </div>
        </DialogTitle> */}
        <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={4} className={classes.title}>
          スタッフID
        </Grid>
        <Grid item xs={7} className={classes.form}>
            <TextField required variant="outlined" name="staffId"　label="スタッフID"  value={staffId} onChange={handleChange} className={classes.content1} InputProps={{inputComponent: NumberFormatCustom}}/>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          スタッフ氏名
        </Grid>
        <Grid item xs={7} className={classes.form}>
            <TextField required variant="outlined" name="name" value={name} label="スタッフ氏名" onChange={handleChange} inputProps={{maxlength:50}}　className={classes.content1}/>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          スタッフ氏名（ふりがな）
        </Grid> 
        <Grid item xs={7} className={classes.form}>
            <TextField required variant="outlined" name="kana" value={kana} label="スタッフ氏名（ふりがな）" onChange={handleChange} inputProps={{maxlength:50}} className={classes.content1}/>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          性別
        </Grid>
        <Grid item xs={7} className={classes.form}>
           
            <FormControl variant="outlined" className={classes.content}>
            <InputLabel>性別*</InputLabel>
            <Select required name="gender" value={gender} onChange={handleChange}>
            <MenuItem value=""></MenuItem>
            <MenuItem value={"男"}>男</MenuItem>
            <MenuItem value={"女"}>女</MenuItem>
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          生年月日
        </Grid>
        <Grid item xs={7} className={classes.form}>
            <TextField required type="date" inputProps={{max:new Date().toJSON().split('T')[0]}} name="birthday"　label="生年月日" defaultValue="2020-01-01" value={birthday} onChange={handleChange2} className={classes.content}  InputLabelProps={{
          shrink: true,
        }}/>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          年齢
        </Grid>
        <Grid item xs={7} className={classes.form}>            
            <TextField required variant="outlined" name="age" label="年齢" value={age} onChange={handleChange} className={classes.content} InputProps={{inputComponent: NumberFormatCustom2}}/>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          電話番号(ハイフンなし)
        </Grid>
        <Grid item xs={7} className={classes.form}>
            <TextField required inputmode="url" variant="outlined" name="phone"　label="電話番号(ハイフンなし)" value={phone} onChange={handleChange} className={classes.content} InputProps={{ inputComponent: TextMaskCustom}}/>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          最寄駅
        </Grid>
        <Grid item xs={7} className={classes.form}>
            <TextField required variant="outlined" name="station" label="最寄駅" value={station} onChange={handleChange} inputProps={{maxlength:50}} className={classes.content}/>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          最終学歴（学校名）
        </Grid>
        <Grid item xs={7} className={classes.form}>
            <TextField required variant="outlined" name="career" label="最終学歴（学校名）" value={career} onChange={handleChange} inputProps={{maxlength:50}} className={classes.content}/>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          入社日
        </Grid>
        <Grid item xs={7} className={classes.form}>
            <TextField required　type="date" inputProps={{max:"2029-12-31"}} name="join" label="入社日"　defaultValue="2020-01-01"  value={join} onChange={handleChange3} className={classes.content}　InputLabelProps={{
          shrink: true,
        }}/>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          所属会社
        </Grid>
        <Grid item xs={7} className={classes.form}>           
            <FormControl variant="outlined"　className={classes.content}>
            <InputLabel>所属会社*</InputLabel>
            <Select required name="company" value={company} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {state2.map((data) => (
            <MenuItem key={data.company_id} value={data.company_id} >
              {data.company}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          地域
        </Grid>
        <Grid item xs={7} className={classes.form}>
            <FormControl variant="outlined" className={classes.content}>
            <InputLabel>地域*</InputLabel>
            <Select required name="area" value={area} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {state1.map((data) => (
            <MenuItem key={data.area_id} value={data.area_id} >
              {data.area}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          役職
        </Grid>
        <Grid item xs={7} className={classes.form}>
        <FormControl variant="outlined" className={classes.content}>
            <InputLabel>役職*</InputLabel>
            <Select required name="position" value={position} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {state5.map((data) => (
            <MenuItem key={data.position_id} value={data.position_id} >
              {data.position}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          職種
        </Grid>
        <Grid item xs={7} className={classes.form}>
            <FormControl variant="outlined" className={classes.content}>
            <InputLabel>職種*</InputLabel>
            <Select required name="occupation" value={occupation} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {state4.map((data) => (
            <MenuItem key={data.occupation_id} value={data.occupation_id} >
              {data.occupation}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4} className={classes.title}>
          雇用形態
        </Grid>
        <Grid item xs={7} className={classes.form}>
            <FormControl variant="outlined" className={classes.content}>
            <InputLabel>雇用形態*</InputLabel>
            <Select required name="employment" value={employment} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {state3.map((data) => (
            <MenuItem key={data.employment_id} value={data.employment_id} >
              {data.employment}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={11} className={classes.button}>
            <Button variant="contained" onClick={clear}>クリア</Button>
            <Button variant="contained" onClick={add} className={classes.button1}>追加</Button>
        </Grid>
        </Grid>
        </Paper>
    )
}