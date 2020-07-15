import React,{ useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Paper, 
         MenuItem, 
         TextField
         } from '@material-ui/core';
import axios from 'axios';

//import Component
import SearchButton from './SearchButton';
import DeleteButton from './DeleteButton';
import DatePickers from './DatePickers';



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  left: {
    width:160,
    float:'left',
    height:50,
    paddingTop:30,
  },
  date: {
    width:30,
    float:'left',
  },
other: {
    width:70,
    float:'left',
  },
end: {
    width:'100%',
    clear:'both',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
  brank: {
    height:35,
  },
  inputForm: {
    float:'left',
    marginTop:15,
  },
  button: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  keyButton: {
    '& > *': {
      margin: theme.spacing(1),
    },
    paddingTop:15,
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


export default function CaseSearch() {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);

  useEffect(() => getCaseData());

  const getCaseData = () => {
      if(posts.length === 0) {
          axios
            .get('/api/casesearch/1')
            .then(response => {
              console.log([response.data]);
              setPosts(response.data);
            })
            .catch(() => {
              console.log('connected error');
            })
          }
  }

  const [sm,setSm] = useState([]);
  useEffect(() => getSalesMandata());

  const getSalesMandata = () => {
    if(sm.length === 0) {
      axios
        .get('/api/casesearch003/1')
        .then(response => {
          console.log([response.data]);
          setSm(response.data);
        })
        .catch(() => {
          console.log('connected error');
        })
      }
  }
  

  //KeywordSearch
  const [keyWord, setKeyWord] = React.useState('');

  //keywordSubmit
  const keywordSubmit = () => {
    // const newKey = {keyWord:keyWord};

    // axios
    //     .post('/api/casesearch001',newKey)
    //     .then(response => {
    //       console.log(response.data);
    //     })
    //     .catch(() => {
    //       console.log('submit error');
    //     })

    const target = posts.filter((data)=>{
      return (data.name.includes(keyWord));
    });
    if(target === 0){
      window.alert("検索結果がありません。\n条件を変更してください。")
    }else{
      console.log(target);
    }
  };


  //job

  const [job, setJob] = useState([]);

  useEffect(() => getJobData());

  const getJobData = () => {
      if(job.length === 0) {
          axios
            .get('/api/casesearch001/1')
            .then(response => {
              console.log([response.data]);
              setJob(response.data);
            })
            .catch(() => {
              console.log('connected error');
            })
          }
  }
  const [jobName, setJobName] = React.useState([]);

  const jobChange = (event) => {
    setJobName(event.target.value);
  };

  //skill

  const [getSkill, setGetSkill] = useState([]);

  useEffect(() => getSkillData());

  const getSkillData = () => {
      if(getSkill.length === 0) {
          axios
            .get('/api/casesearch002/1')
            .then(response => {
              console.log([response.data]);
              setGetSkill(response.data);
            })
            .catch(() => {
              console.log('connected error');
            })
          }
  }

  const [skill1,setSkill1] = React.useState('');
  const skill1Change = (event) => {
    setSkill1(event.target.value);
  };
  const [skill2,setSkill2] = React.useState('');
  const skill2Change = (event) => {
    setSkill2(event.target.value);
  };
  const [skill3,setSkill3] = React.useState('');
  const skill3Change = (event) => {
    setSkill3(event.target.value);
  };

  const skillItems = getSkill.map((data) => (
      <MenuItem key={data.id}
              value={data.id}>{data.name}</MenuItem>
  ));

  //startdate
  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());

  const handleStartDateChange = (date) => {
    setSelectedStartDate(date);
  };
  //enddate
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());

  const handleEndDateChange = (date) => {
    setSelectedEndDate(date);
  };

  //settting salesman
  const [salesMan, setSalesMan] = React.useState('');
  const salesChange = (event) => {
    setSalesMan(event.target.value);
  };

  const salesItems = sm.map((data) => (
    <MenuItem key={data.id}
            value={data.id}>{data.name}</MenuItem>
));

  //clearButton
  const clearAll = () => {
    setKeyWord('')
    setJobName([])
    // setLicense('')
    setSkill1('')
    setSkill2('')
    setSkill3('')
    setSelectedStartDate()
    setSelectedEndDate()
    setSalesMan('')
    window.alert("Clear Done")
  };


  //SearchButton
  const formSubmit = () => {

    // const newValue = {job:jobName,skill1:skill1,skill2:skill2,skill3:skill3,startdate:selectedStartDate,enddate:selectedEndDate,salesMan:salesMan};

    // axios
    //     .post('/api/casesearch002',newValue)
    //     .then(response => {
    //       console.log(response.data);
    //     })
    //     .catch(() => {
    //       console.log('submit error');
    //     })

    const target1 = posts.filter((data)=>{
      return (data.ocp_name === jobName);
    });
    console.log(target1);
    const target2 = posts.filter((data)=>{
      return (data.skill1_id === skill1 &&
        data.user_id === salesMan);
    });
    console.log(target2);
    const target3 = posts.filter((data)=>{
      return ((((data.skill1_id === skill1) ||
              (data.skill1_id === skill2) ||
              (data.skill1_id === skill3)) ||
              ((data.skill2_id === skill1) ||
              (data.skill2_id === skill2) ||
              (data.skill2_id === skill3)) ||
              ((data.skill3_id === skill1) ||
              (data.skill3_id === skill2) ||
              (data.skill3_id === skill3))) &&
              data.user_id === salesMan
            );
    });
    console.log(target3);

    console.log(jobName);
    console.log(selectedEndDate);

  };

  return (
    <Paper className={classes.root} variant="outlined">
      <CardContent>
      <Typography variant="h3" component="h2">
        案件検索
        </Typography>

        <br className={classes.end}/>

      <Typography className={classes.left} id="child" variant="h5" component="h2">
        キーワード検索
        </Typography>


          <TextField value={keyWord} onChange={e => setKeyWord(e.target.value)} className={classes.inputForm} id="outlined-basic" label="キーワード" variant="outlined" type="text" name="key" />

          <SearchButton onClick={keywordSubmit} className={classes.keyButton} type="submit" />

        <br className={classes.end} />
        
        <Typography className={classes.left} variant="h5" component="h2">
          職種
        </Typography>


        <div>
          <FormControl className={classes.formControl}>
            <InputLabel>希望職種</InputLabel>
            <Select
              multiple
              value={jobName}
              onChange={jobChange}
              input={<Input />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {job.map((name) => (
                <MenuItem key={name.id} value={name.name}>
                  <Checkbox checked={jobName.indexOf(name.name) > -1} />
                  <ListItemText primary={name.name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

                
        <br className={classes.end} />
        

        <Typography className={classes.left} variant="h5" component="h2">
          スキルレベル
        </Typography>

         <TextField className={classes.formControl}
          select
          label="skill①"
          value={skill1}
          onChange={skill1Change}
          variant="outlined"
        >
          <MenuItem className={classes.brank}></MenuItem>
          {skillItems}
        </TextField>

         <TextField className={classes.formControl}
          select
          label="skill②"
          value={skill2}
          onChange={skill2Change}
          variant="outlined"
        >
          <MenuItem className={classes.brank}></MenuItem>
          {skillItems}
        </TextField>

         <TextField className={classes.formControl}
          select
          label="skill③"
          value={skill3}
          onChange={skill3Change}
          variant="outlined"
        >
          <MenuItem className={classes.brank}></MenuItem>
          {skillItems}
        </TextField>

        <br className={classes.end} />
        

        <Typography className={classes.left} variant="h5" component="h2">
          期間
        </Typography>
        
        <DatePickers label="ここから" value={selectedStartDate} onChange={handleStartDateChange} />

        <br className={classes.end} />
        <div className={classes.left}><br /></div>
        <div className={classes.other}><br /></div>
        <br className={classes.end} />

        <div className={classes.left}><br /></div>

        <DatePickers label="ここまで" value={selectedEndDate} onChange={handleEndDateChange} />
        
        <br className={classes.end} />

        <Typography className={classes.left} variant="h5" component="h2">
          担当営業名
        </Typography>

        {/* <TextField value={salesMan} onChange={e => setSalesMan(e.target.value)} className={classes.inputForm} id="outlined-basic" label="担当営業名" variant="outlined" /> */}

        <TextField className={classes.formControl}
          select
          label="担当営業名"
          value={salesMan}
          onChange={salesChange}
          variant="outlined"
        >
          <MenuItem className={classes.brank}></MenuItem>
          {salesItems}
        </TextField>

        <br className={classes.end} />
        <div className={classes.left}><br /></div>
        <div className={classes.left}><br /></div>
        <div className={classes.left}><br /></div>

        <DeleteButton onClick={clearAll} />
        <SearchButton onClick={formSubmit} className={classes.button} />

      </CardContent>
    </Paper>
  );
}
