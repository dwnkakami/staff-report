import React, { useState　} from 'react';
import Paper from '@material-ui/core/Paper';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Typography, DialogTitle } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import DatePickers from './DatePickers';

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

const submit = () => {

    const newValue = {id:staffId, name:name, gender:gender, position:position, joining_day:join, birthday:birthday, age:age, school_career:career, phone_number:phone, near_station:station, company_id:company, area_id:area, occupation_id:occupation, employment_system_id:employment}

    axios
        .post('/api/staffadd', newValue)
        .then(response => {
            console.log(response.data);
        })
        .catch(() => {
            console.log('submit error');
        });
}

    return(
        <Paper elevation={3}>
        <DialogTitle id="customized-dialog-title">
            <div className='title' style={{ display: 'flex' }}>
            <PersonAddIcon style={{ fontSize: '40px', }}/>
            <Typography　style={{ fontSize: '30px' }}>スタッフ追加</Typography>
            </div>
        </DialogTitle>
            <Typography>スタッフID</Typography>
            <TextField variant="outlined" name="staffId" value={staffId} onChange={handleChange}/>
            <Typography>スタッフ名</Typography>
            <TextField variant="outlined" name="name" value={name} onChange={handleChange}/>
            <Typography>性別</Typography>
            <TextField variant="outlined" name="gender" value={gender} onChange={handleChange}/>
            <Typography>役職</Typography>
            <TextField variant="outlined" name="position" value={position} onChange={handleChange}/>
            <Typography>入社日</Typography>
            <DatePickers variant="outlined" name="join" value={join} onChange={handleChange}/>
            <Typography>生年月日</Typography>
            <TextField variant="outlined" name="birthday" value={birthday} onChange={handleChange}/>
            <Typography>年齢</Typography>
            <TextField variant="outlined" name="age" value={age} onChange={handleChange}/>
            <Typography>最終学歴</Typography>
            <TextField variant="outlined" name="career" value={career} onChange={handleChange}/>
            <Typography>連絡先</Typography>
            <TextField variant="outlined" name="phone" value={phone} onChange={handleChange}/>
            <Typography>最寄駅</Typography>
            <TextField variant="outlined" name="station" value={station} onChange={handleChange}/>
            <Typography>所属会社</Typography>
            <TextField variant="outlined" name="company" value={company} onChange={handleChange}/>
            <Typography>地域</Typography>
            <TextField variant="outlined" name="area" value={area} onChange={handleChange}/>
            <Typography>職種</Typography>
            <TextField variant="outlined" name="occupation" value={occupation} onChange={handleChange}/>
            <Typography>雇用形態</Typography>
            <TextField variant="outlined" name="employment" value={employment} onChange={handleChange}/>
            <Button　variant="contained" onClick={submit}>追加</Button>
        </Paper>
    )
}