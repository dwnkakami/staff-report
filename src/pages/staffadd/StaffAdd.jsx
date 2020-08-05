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

const useStyles = makeStyles((theme) => ({
    content: {
        width: '250px',
    },
    content_2: {
        width: '250px',
        marginBottom: '25px'
    },
    formControl: {
      minWidth: 195,
    },
}));

export default function StaffAdd (props) {

const [staffId,setStaffId] = useState("");
const [name,setName] = useState("");
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
        case 'gender':
            setGender(e.target.value);
            break;
        case 'position':
            setPosition(e.target.value);
            break;
        case 'join':
            setJoin(e.target.value);
            break;
        case 'birthday':
            setBirthday(e.target.value);
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

const add = () => {

    const newValue = {id:staffId, name:name, gender:gender, position:position, joining_day:join, birthday:birthday, age:age, school_career:career, phone_number:phone, near_station:station, company_id:company, area_id:area, occupation_id:occupation, employment_system_id:employment, entry_at:entry, update_at:update_at,
        　update_by:update_by
    }

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

const clear = () => {
    setStaffId("")
    setName("")
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
        <DialogTitle id="customized-dialog-title">
            <div  style={{ display: 'flex' }}>
            <AddIcon style={{ fontSize: '25px'}}/>
            <PeopleAltIcon style={{ fontSize: '40px', }}/>
            <Typography　style={{ fontSize: '30px' }}>スタッフ追加</Typography>
            </div>
        </DialogTitle>
        <Grid container spacing={3} className="form">
        <Grid item xs={4}>
            
            <TextField variant="outlined" type="number" name="staffId"　label="スタッフID"  value={staffId} onChange={handleChange} className={classes.content}/>
        </Grid>
        <Grid item xs={4}>
            
            <TextField variant="outlined" name="name" value={name} label="スタッフ氏名" onChange={handleChange} className={classes.content}/>
        </Grid>
        <Grid item xs={4}>
           
            <FormControl variant="outlined" className={classes.content}>
            <InputLabel>性別</InputLabel>
            <Select name="gender" value={gender} onChange={handleChange}>
            <MenuItem value=""></MenuItem>
            <MenuItem value={"男"}>男</MenuItem>
            <MenuItem value={"女"}>女</MenuItem>
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4}>
            
            <TextField type="date"  name="birthday"　label="生年月日" defaultValue="2020-01-01" value={birthday} onChange={handleChange} className={classes.content}  InputLabelProps={{
          shrink: true,
        }}/>
        </Grid>
        <Grid item xs={4}>
            
            <TextField variant="outlined" type="number" name="age" label="年齢" value={age} onChange={handleChange} InputProps={{ inputProps: { min: 18, max: 80 } }} className={classes.content}/>
        </Grid>
        <Grid item xs={4}>
            <Typography></Typography>
            <TextField inputmode="url" variant="outlined" name="phone"　label="連絡先(ハイフン有り)" value={phone} onChange={handleChange} className={classes.content}/>
        </Grid>
        <Grid item xs={4}>
            <TextField variant="outlined" name="station" label="最寄駅" value={station} onChange={handleChange} className={classes.content}/>
        </Grid>
        <Grid item xs={4}>
            <TextField variant="outlined" name="career" label="最終学歴（学校名）" value={career} onChange={handleChange} className={classes.content}/>
        </Grid>
        <Grid item xs={4}>
            <TextField　type="date"  name="join" label="入社日"　defaultValue="2020-01-01"  value={join} onChange={handleChange} className={classes.content}　InputLabelProps={{
          shrink: true,
        }}/>
        </Grid>
        <Grid item xs={4}>
           
            <FormControl variant="outlined"　className={classes.content}>
            <InputLabel>所属会社</InputLabel>
            <Select name="company" value={company} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {state2.map((data) => (
            <MenuItem key={data.company_id} value={data.company_id} >
              {data.company}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.content}>
            <InputLabel>地域</InputLabel>
            <Select name="area" value={area} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {state1.map((data) => (
            <MenuItem key={data.area_id} value={data.area_id} >
              {data.area}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.content}>
            <InputLabel>役職</InputLabel>
            <Select name="position" value={position} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            <MenuItem value={"プロデューサー"}>プロデューサー</MenuItem>
            <MenuItem value={"プログラマー"}>プログラマー</MenuItem>
            <MenuItem value={"リードプログラマー"}>リードプログラマー</MenuItem>
            <MenuItem value={"営業"}>営業</MenuItem>
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.content}>
            <InputLabel>職種</InputLabel>
            <Select name="occupation" value={occupation} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {state4.map((data) => (
            <MenuItem key={data.occupation_id} value={data.occupation_id} >
              {data.occupation}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4}>
            <FormControl variant="outlined" className={classes.content_2}>
            <InputLabel>雇用形態</InputLabel>
            <Select name="employment" value={employment} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {state3.map((data) => (
            <MenuItem key={data.employment_id} value={data.employment_id} >
              {data.employment}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={2}>
            <Button variant="contained" onClick={add} className="button1">追加</Button>
        </Grid>
        <Grid item xs={2}>
            <Button variant="contained" onClick={clear} className="button2">クリア</Button>
        </Grid>
        </Grid>
        </Paper>
    )
}