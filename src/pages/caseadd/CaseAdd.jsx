import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/paper';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DialogTitle from '@material-ui/core/DialogTitle';
// import MediaQuery from "react-responsive";


const useStyles = makeStyles((theme) => ({
    form: {
      textAlign: "center",
      margin: "auto",
    },
    button: {
      bottom: "-30px",
    },
    formControl: {
      minWidth: 220,
    },
    skill: {
      minWidth: 110,
    },
    textBox: {
      minWidth: 300,
    },
}));

export default function LayoutTextFields() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    month: '',
    name: 'hai',
  });

   const [name,setName] = useState("");
   const [com,setCom] = useState("");
   const [money,setMoney] = useState("");
   const [place,setPlace] = useState ("");
   const [persons,setPersons] = useState ("");
   const [skill1,setSkill1] = useState ("");
   const [skill2,setSkill2] = useState ("");
   const [skill3,setSkill3] = useState ("");
   const [startdate, setStartdate] = useState ("");
   const [enddate, setEnddate] = useState ("") ;
   const [job, setJob] = useState ("")
   const [skillcontents,setSkillcontents] = useState ("");
   const [contents, setContents] = useState ("");
   const [note,setNote] = useState ("");
   const [user,setUser] = useState ("");
   ;

   const handleChange = e => {
    switch (e.target.name) {
        case 'name':
            setName(e.target.value);
            break;
        case 'com':
            setCom(e.target.value);
            break;
        case 'money':
            setMoney(e.target.value);
            break;
         case 'place':
            setPlace(e.target.value);
            break;
         case 'persons' :
            setPersons(e.target.value);
             break;
         case 'startdate' :
           setStartdate(e.target.value);
             break;
             case 'enddate' :
              setEnddate(e.target.value);
                break;
         case 'job':
           setJob(e.target.value);
           break;
         case 'skill1':
            setSkill1(e.target.value);
            break;
        case 'skill2':
            setSkill2(e.target.value);
            break;
        case 'skill3':
            setSkill3(e.target.value);
            break;
            case 'skillcontents' :
              setSkillcontents(e.target.value);
              break;
         case 'contents' :
            setContents(e.target.value);
            break;
         case 'note' :
           setNote(e.target.value);
           break;
         case 'user' :
           setUser(e.target.value);
           break;
        default:
            console.log('text not found');
    }
  
  };

  const submit = () => {
    console.log(name)
    const newValue = {name:name,customer_id:com,unit_cost:money, workplace:place, number_of_persons:persons, occupation_id:job, staff_skill_id1:skill1, staff_skill_id2:skill2, staff_skill_id3:skill3, matter_start:startdate,matter_end:enddate, skill_level_column:skillcontents ,business_content:contents, note:note, user_id:user };


    axios
        .post('/api/caseadd', newValue)
        .then(response => {
            console.log(response.data);
            window.alert("追加されました")
        })
        .catch(() => {
            console.log('submit error');
            window.alert("追加できませんでした")
        })
};

const [state1,setState1] = useState([]);

useEffect(() => getCustomerData(),[]);

const getCustomerData = () => {
    if(state1.length === 0){
    axios
        .get('./api/caseadd001')
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

useEffect(() => getSkillData(),[]);

const getSkillData = () => {
    if(state2.length === 0){
    axios
        .get('./api/caseadd002')
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

useEffect(() => getUserData(),[]);

const getUserData = () => {
    if(state3.length === 0){
    axios
        .get('./api/caseadd003')
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
        .get('./api/caseadd004')
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
  setName("")
  setCom("")
  setMoney("")
  setPlace("")
  setPersons("")
  setSkill1("")
  setSkill2("")
  setSkill3("")
  setStartdate("")
  setEnddate("")
  setJob("")
  setSkillcontents("")
  setContents("")
  setNote("")
  setUser("")
}

  return (
      <Paper elevation={3}>
        <DialogTitle>
          <div style={{ display: 'flex' }}>
            <AddIcon style={{ fontSize: '25px'}}/>
            <AssignmentIcon style={{ fontSize: '40px' }}/>
            <Typography style={{ fontSize: '30px' }}>
              案件登録
            </Typography>
          </div>
        </DialogTitle>
      <Grid container spacing={3} className={classes.form}>
        <Grid item xs={4}>
          <TextField
            name="name"
            label="案件名"
            variant="outlined"
            value={name}
            onChange={handleChange}
            inputProps={{
              maxlength: 50
            }} 
            />
        </Grid>
      <Grid item xs={4}>  
          <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>案件保有会社名</InputLabel>
          <Select
            value={com}
            onChange={handleChange}
            label="com"
            name="com"
          >
          <MenuItem value=""></MenuItem>
          {state1.map((data) => (
          <MenuItem key={data.customer_id} value={data.customer_id} >
            {data.customer_name}
          </MenuItem>
          ))}
          </Select>
          </FormControl>
      </Grid>
      <Grid item xs={4}>
        <TextField
          name="money"
          label="依頼単価"
          value={money}
          onChange={handleChange}
          inputProps={{
            // startAdornment: <InputAdornment position="start">¥</InputAdornment>,
            maxlength: 20
          }}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
         name="place"
         label="勤務地"
         value={place}
         onChange={handleChange}
         placeholder='勤務地の住所を入力'
         variant="outlined"
         inputProps={{
           maxlength: 10
         }} 
        >
        </TextField>
      </Grid>
      <Grid item xs={4}>
        <TextField
          name="persons"
          label="募集人数"
          type="number"
          value={persons}
          onChange={handleChange}
          inputProps={{
           endAdornment: <InputAdornment position="end">人</InputAdornment>,
          }}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl variant="outlined" className={classes.skill}>
        <InputLabel htmlFor="outlined-age-native-simple" >スキル①</InputLabel>
        <Select
          value={skill1}
          onChange={handleChange}
          name='skill1'
          label="skill1"
        >
          <MenuItem value="" />
        {state2.map((data) => (
        <MenuItem key={data.skill_id} value={data.skill_id} >
          {data.skill_name}
        </MenuItem>
        ))}
        </Select>
      </FormControl>
      
        <FormControl variant="outlined" className={classes.skill}>
        <InputLabel htmlFor="outlined-age-native-simple">スキル②</InputLabel>
        <Select
          value={skill2}
          name='skill2'
          onChange={handleChange}
          label="skill2"
        >
          <MenuItem value="" />
          {state2.map((data) => (
          <MenuItem key={data.skill_id} value={data.skill_id} >
            {data.skill_name}
          </MenuItem>
          ))}
        </Select>
      </FormControl>
      
        <FormControl variant="outlined" className={classes.skill}>
        <InputLabel htmlFor="outlined-age-native-simple">スキル③</InputLabel>
        <Select
          value={skill3}
          onChange={handleChange}
          name="skill3"
          label="skill3"
        >
          <MenuItem value="" />
          {state2.map((data) => (
          <MenuItem key={data.skill_id} value={data.skill_id} >
            {data.skill_name}
          </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.form}>
      <Grid item xs={4}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">職種</InputLabel>
        <Select
          value={job}
          onChange={handleChange}
          label="job"
          name="job"
        >
          <MenuItem value="" />
          {state4.map((data) => (
          <MenuItem key={data.occupation_id} value={data.occupation_id} >
            {data.occupation_name}
          </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">管理者名</InputLabel>
        <Select
          value={user}
          onChange={handleChange}
          label="user"
          name="user"
        >
          <MenuItem value="" />
          {state3.map((data) => (
          <MenuItem key={data.user_id} value={data.user_id} >
            {data.user_name}
          </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Grid>
      </Grid>
    <Grid container spacing={3} className={classes.form}>
    <Grid item xs={4}>
        <TextField
        name="startdate"
        id = "date"
        type="date"
        value={startdate}
        onChange={handleChange}
        label="案件開始日"
        type="date"
        defaultValue="2020-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />
      </Grid>
      <Grid item xs={4}>
       <TextField
        id ="date2"
        name="enddate"
        type="date"
        value={enddate}
        onChange={handleChange}
        label="案件終了日"
        type="date"
        defaultValue="2020-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />
      </Grid>
      <Grid itex xs={4}>
        <FormControl  variant="outlined" className={classes.textBox}>
          <InputLabel htmlFor="outlined-adornment-amount">募集内容</InputLabel>
          <OutlinedInput
         name="contents"
         label="Multiline"
         value={contents}
         onChange={handleChange}
         multiline
         rows={4}
         variant="filled"
         inputProps={{
          maxlength: 200
        }} 
         />
        </FormControl>
      </Grid>  
      <Grid item xs={4}>
        <FormControl  variant="outlined" className={classes.textBox}>
          <InputLabel htmlFor="outlined-adornment-amount">スキル詳細</InputLabel>
          <OutlinedInput
         name="skillcontents"
         label="Multiline"
         value={skillcontents}
         onChange={handleChange}
         multiline
         rows={4}
         variant="filled"
         inputProps={{
          maxlength: 50
        }} 
         />
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl variant="outlined" className={classes.textBox}>
          <InputLabel htmlFor="outlined-adornment-amount">備考</InputLabel>
          <OutlinedInput
         name="note"
         label="Multiline"
         value={note}
         onChange={handleChange}
         multiline
         rows={4}
         inputProps={{
          maxlength: 200
        }} 
         />
        </FormControl>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={submit} className={classes.button} variant="contained">
        登録
      </Button>
      </Grid>
      <Grid item xs={2}>
        <Button onClick={clear} className={classes.button} variant="contained">
         クリア 
        </Button>
      </Grid>
      </Grid>
   </Paper>
  );
}