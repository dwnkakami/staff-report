import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
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

const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 195,
    },
}));

export default function StaffAdd () {

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

    const newValue = {id:staffId, name:name, gender:gender, position:position, joining_day:join, birthday:birthday, age:age, school_career:career, phone_number:phone, near_station:station, company_id:company, area_id:area, occupation_id:occupation, employment_system_id:employment, entry_at:entry}

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

const [state,setState] = useState([]);

useEffect(() => getData());

const getData = () => {
    if(state.length === 0){
    axios
        .get('./api/staffadd2')
        .then(response => {
            setState(response.data);
            console.log(response.data);
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
            <div className='title' style={{ display: 'flex' }}>
            <PersonAddIcon style={{ fontSize: '40px', }}/>
            <Typography　style={{ fontSize: '30px' }}>スタッフ追加</Typography>
            </div>
        </DialogTitle>
        <Grid container spacing={3} className="form">
        <Grid item xs={4}>
            <Typography>スタッフID</Typography>
            <TextField variant="outlined" type="number" name="staffId" value={staffId} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>スタッフ名</Typography>
            <TextField variant="outlined" name="name" value={name} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>性別</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>選択してください</InputLabel>
            <Select name="gender" value={gender} onChange={handleChange}>
            <MenuItem value=""></MenuItem>
            <MenuItem value={"男"}>男</MenuItem>
            <MenuItem value={"女"}>女</MenuItem>
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4}>
            <Typography>生年月日</Typography>
            <TextField type="date" variant="outlined" name="birthday" value={birthday} onChange={handleChange} className={classes.formControl}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>年齢</Typography>
            <TextField variant="outlined" type="number" name="age" value={age} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>連絡先(ハイフンを入れてください)</Typography>
            <TextField inputmode="url" variant="outlined" name="phone" value={phone} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>最寄駅</Typography>
            <TextField variant="outlined" name="station" value={station} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>最終学歴（学校名）</Typography>
            <TextField variant="outlined" name="career" value={career} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>入社日</Typography>
            <TextField　type="date" variant="outlined" name="join" value={join} onChange={handleChange} className={classes.formControl}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>所属会社</Typography>
            <FormControl variant="outlined"　className={classes.formControl}>
            <InputLabel>選択してください</InputLabel>
            <Select name="company" value={company} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {state.map((data) => (
            <MenuItem key={data.company_id} value={data.company_id} >
              {data.company}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4}>
            <Typography>地域</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>選択してください</InputLabel>
            <Select name="area" value={area} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {state.map((data) => (
            <MenuItem key={data.area_id} value={data.area_id} >
              {data.area}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4}>
            <Typography>役職</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>選択してください</InputLabel>
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
            <Typography>職種</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>選択してください</InputLabel>
            <Select name="occupation" value={occupation} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {state.map((data) => (
            <MenuItem key={data.occupation_id} value={data.occupation_id} >
              {data.occupation}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={4}>
            <Typography>雇用形態</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>選択してください</InputLabel>
            <Select name="employment" value={employment} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {state.map((data) => (
            <MenuItem key={data.employment_id} value={data.employment_id} >
              {data.employment}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        <Grid item xs={2}>
            <Button variant="contained" onClick={add} className="button">追加</Button>
        </Grid>
        <Grid item xs={2}>
            <Button variant="contained" onClick={clear} className="button">クリア</Button>
        </Grid>
        </Grid>
        </Paper>
    )
}