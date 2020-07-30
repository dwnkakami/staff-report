import React, {useState} from 'react';
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
// import MediaQuery from "react-responsive";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  root2: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      positon: 'relative',
      left: '20%',
      top: '90px',
      width: '25%',
      backgroundColor: 'white',

    }},

  com: {
    position: 'relative',
    left:'21%',
    top: '106px',
    width:'25%',
   metaname: 'viewport',
  },

  button: {
    left: '68%',
    top: '230px',
    position: 'relative',
    width: 'auto',
  },

  

  skill1: {
    width: '10%',
    position: 'relative',
    top: '20px',
    left: '49%',
  },

  skill2: {
    position: 'relative',
    width: '10%',
    top: '20px',
    left: '49%',
  },

  skill3: {
    width: '10%',
    position: 'relative',
    top: '20px',
    left: '49%',
  },



  cont: {
    left: '1px', 
    width: '50%',

  },

  skillcont: {
    left: '1px',
    width: '60ch',
  
  },

  h1: {
    position: 'absolute',
    left: '20%',
    top: '4%',

  },

  date: {
    position: 'relative',
    left: '1%',
    top: '-20px',
  },

  date2: {
    position: 'relative',
    left: '30%',
    top: '2px',
  },

  user: {
    position:'relative',
    left:'21%',
    top:'110px',
    width:'25%',
    
  },

  job: {
     position: 'relative',
     top:'55px',
     left:'49%',
     width: '25%',
  },

  margin: {
    position: 'relative',
    left: '21%',
    top: '100px',
    width: '53%',
    height: 'available',
  },

  margin2: {
    position: 'relative',
    left: '21%',
    top: '140px',
    width: '53%',
    height: 'available',
  },

  memo: {
    position: 'relative',
    top: '180px',
    width: '53%',
    left: '21%',
    height: 'available',
  },


  paper1: {
    position: 'relative',
    width: 'auto',
    minWidth: '100%',
    margin: '-10px',
    height: 'auto',
    minHeight: '160vh',
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
   const [place,setPLace] = useState ("");
   const [persons,setPersons] = useState ("");
   const [skill1,setSkill1] = useState ("");
   const [skill2,setSkill2] = useState ("");
   const [skill3,setSkill3] = useState ("");
   const[startdate, setStartdate] = useState ("");
   const[enddate, setEnddate] = useState ("") ;
   const[job, setJob] = useState ("")
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
            setPLace(e.target.value);
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
        })
        .catch(() => {
            console.log('submit error');
        })
};


  const handleChange2 = (event) => {
    const skill = event.target.skill;
    setState({
      ...state,
      [skill]: event.target.value,
    });
  };

  return (

    <div className={classes.root}>

      <Paper elevation={3} className = {classes.paper1}>
    <form className={classes.root2} noValidate autoComplete="off" method="POST">
      <div>
      <div>
      <Typography className={classes.h1} variant="h2" gutterBottom>
        案件登録
      </Typography>
      </div>
      <div >
      <TextField input type="text" name="name" label="案件名" variant="outlined" value={name} onChange={handleChange} />
      <FormControl variant="outlined"　className={classes.com}  >
        <InputLabel htmlFor="outlined-age-native-simple" >案件保有会社名</InputLabel>
        <Select
          native
          value={state.skill1}
          onChange={handleChange}
          label="com"
          name="com"
          inputProps={{
            id: 'com',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>株式会社ABC</option>
          <option value={2}>DEF食品株式会社</option>
          <option value={3}>GH電気株式会社</option>
          <option value={4}>IJK商事</option>
          <option value={5}>LMN商店株式会社</option>
          <option value={6}>OP商店株式会社</option>
          <option value={7}>QR株式会社</option>
          <option value={8}>ST事務所</option>
          <option value={9}>株式会社UV</option>
          <option value={10}>WXグループ株式会社</option>
          <option value={11}>YZ電気株式会社acd</option>
          <option value={12}>DB株式会社</option>
          <option value={13}>YNZ株式会社</option>
          <option value={14}>CaC株式会社</option>
        </Select>
      </FormControl>
      </div>
      <div>
      <TextField
          name="money"
          label="依頼単金"
          value={money}
          onChange={handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">¥</InputAdornment>,
          }}
          variant="outlined"
        />
        <TextField
        name="place" label="勤務地"　value={place} onChange={handleChange} placeholder='勤務地の住所を入力' variant="outlined" 
        >
        </TextField>
      <div>
      <TextField
          name="persons"
          label="募集人数"
          type="number"
          value={persons}
          onChange={handleChange}
          InputProps={{
           endAdornment: <InputAdornment position="end">人</InputAdornment>,
          }}
          variant="outlined"
        />
        <div className={classes.skill}>
<FormControl variant="outlined"　className={classes.skill1}  >
        <InputLabel htmlFor="outlined-age-native-simple" >スキル①</InputLabel>
        <Select
          native
          value={state.skill1}
          onChange={handleChange}
          name='skill1'
          label="skill1"
          inputProps={{
            id: 'skill1',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>Java</option>
          <option value={2}>C言語</option>
          <option value={3}>C#</option>
          <option value={4}>C++</option>
          <option value={5}>MySQL</option>
          <option value={6}>Ruby</option>
          <option value={7}>Oracle</option>
          <option value={8}>Python</option>
          <option value={9}>JavaScript</option>
          <option value={10}>PHP</option>
        </Select>
      </FormControl>
       
        <FormControl variant="outlined" className={classes.skill2}>
        <InputLabel htmlFor="outlined-age-native-simple">スキル②</InputLabel>
        <Select
          native
          value={state.skill2}
          name='skill2'
          onChange={handleChange}
          label="skill2"
          
          inputProps={{
            id: 'skill2',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>Java</option>
          <option value={2}>C言語</option>
          <option value={3}>C#</option>
          <option value={4}>C++</option>
          <option value={5}>MySQL</option>
          <option value={6}>Ruby</option>
          <option value={7}>Oracle</option>
          <option value={8}>Python</option>
          <option value={9}>JavaScript</option>
          <option value={10}>PHP</option>
        </Select>
      </FormControl>
      
      <FormControl variant="outlined" className={classes.skill3} >
        <InputLabel htmlFor="outlined-age-native-simple">スキル③</InputLabel>
        <Select
          native
          value={state.skill3}
          onChange={handleChange}
          name="skill3"
          label="skill3"
          inputProps={{
            id: 'skill3',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>Java</option>
          <option value={2}>C言語</option>
          <option value={3}>C#</option>
          <option value={4}>C++</option>
          <option value={5}>MySQL</option>
          <option value={6}>Ruby</option>
          <option value={7}>Oracle</option>
          <option value={8}>Python</option>
          <option value={9}>JavaScript</option>
          <option value={10}>PHP</option>
        </Select>
      </FormControl>
      </div>
      </div>
      
      <div  className={classes.date}>
      <TextField
        name="startdate"
        id = "date"
        value={startdate}
        onChange={handleChange}
        label="案件開始日"
        type="date"
        defaultValue="2020-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />
       <TextField
        id ="date2"
        name="enddate"
        value={enddate}
        onChange={handleChange}
        label="案件終了日"
        type="date"
        defaultValue="2020-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />
      </div>
      <div className={classes.date2}>
     
      </div>
      <div>
      <FormControl variant="outlined" className={classes.user} >
        <InputLabel htmlFor="outlined-age-native-simple">管理者名</InputLabel>
        <Select
          native
          value={state.skill3}
          onChange={handleChange}
          label="user"
          name="user"
          inputProps={{
            id: 'user',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>田中</option>
          <option value={2}>佐藤</option>
          <option value={3}>高橋</option>
          <option value={4}>鈴木</option>
        </Select>
      </FormControl>
      </div>
      <div>
      <FormControl variant="outlined" className={classes.job} >
        <InputLabel htmlFor="outlined-age-native-simple">職種</InputLabel>
        <Select
          native
          value={state.skill3}
          onChange={handleChange}
          label="job"
          name="job"
          inputProps={{
            id: 'job',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>SE</option>
          <option value={2}>PG</option>
          <option value={3}>営業</option>
          <option value={4}>インフラSE</option>
          <option value={5}>サポート</option>
          <option value={6}>総務</option>
        </Select>
      </FormControl>
      </div>
      <div>
      <FormControl  className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">募集内容</InputLabel>
          <OutlinedInput
         name="contents"
         label="Multiline"
         value={contents}
         onChange={handleChange}
         multiline
         rows={4}
         variant="filled"/>
        </FormControl>
        
      </div>
      <FormControl  className={classes.margin2} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">スキル詳細</InputLabel>
          <OutlinedInput
         name="skillcontents"
         label="Multiline"
         value={skillcontents}
         onChange={handleChange}
         multiline
         rows={4}
         variant="filled"/>
        </FormControl>
      <div>

      </div>
      <FormControl  className={classes.memo} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">備考</InputLabel>
          <OutlinedInput
         name="note"
         label="Multiline"
         value={note}
         onChange={handleChange}
         multiline
         rows={4}
         variant="filled"/>
        </FormControl>
      <div>
        
        </div>
        <div >
        <Button onClick={submit} className={classes.button} variant="contained" size="large" >
        登録
      </Button>
      {/* {name}
      {com}
      {money}
      {place}
      {persons}]
      {skill1}
      {skill2}
      {skill3}
      {date}
      {contents}
      {skillcontents} */}
      </div>
      </div>
      </div>
      </form> 
   </Paper>
  
    </div>
  );
}