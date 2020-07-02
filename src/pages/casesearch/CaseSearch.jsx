import React from 'react';
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

//import Component
import KeywordSearch from './KeywordSearch';
import SearchButton from './SearchButton';
import DeleteButton from './DeleteButton';
import DatePickers from './DatePickers';



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    // backgroundColor: 'lightgrey',
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

const names = [
  'ディレクター',
  'プログラマー',
  'サポート',
  'その他',
];

const licenses = [
  {
    id:'1',
    lang:'ITpass',
  },
  {
    id:'2',
    lang:'Oracle Gold',
  },
  {
    id:'3',
    lang:'Oracle Silver',
  },
  {
    id:'4',
    lang:'Oracle Bronz',
  },
  {
    id:'5',
    lang:'CCNA',
  },
];
const language = [
  {
    id:'1',
    lang:'Java',
  },
  {
    id:'2',
    lang:'JavaScript',
  },
  {
    id:'3',
    lang:'PHP',
  },
  {
    id:'4',
    lang:'MySQL',
  },
];

export default function CaseSearch() {
  const classes = useStyles();

  //KeywordSearch
  const [keyWord, setKeyWord] = React.useState();

  //job
  const [jobName, setJobName] = React.useState([]);

  const jobChange = (event) => {
    setJobName(event.target.value);
  };

  //license
  const [license,setLicense] = React.useState('');
  const licenseChange = (event) => {
    setLicense(event.target.value);
  };
  const licenseItems = licenses.map((data,index) =>
      <MenuItem key={index}
              value={data.id}>{data.lang}</MenuItem>
  );

  //skill
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
  const skillItems = language.map((data,index) =>
      <MenuItem key={index}
              value={data.id}>{data.lang}</MenuItem>
  );

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
  const [salesMan, setSalesMan] = React.useState();

  //clearButton
  const clearAll = () => {
    setKeyWord()
    setJobName([])
    setLicense('')
    setSkill1('')
    setSkill2('')
    setSkill3('')
    setSelectedStartDate()
    setSelectedEndDate()
    setSalesMan()
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

        <KeywordSearch value={keyWord} />
        <SearchButton />

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
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={jobName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        

        <Typography className={classes.left} variant="h5" component="h2">
          資格
        </Typography>

        
        <TextField className={classes.formControl}
          select
          label="license"
          value={license}
          onChange={licenseChange}
          variant="outlined"
        >
          <MenuItem className={classes.brank}></MenuItem>
          {licenseItems}
        </TextField>
        
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
        {/* <Typography variant="body2" component="p">～</Typography> */}
        <br className={classes.end} />

        <div className={classes.left}><br /></div>

        <DatePickers label="ここまで" value={selectedEndDate} onChange={handleEndDateChange} />
        
        <br className={classes.end} />

        <Typography className={classes.left} variant="h5" component="h2">
          担当営業名
        </Typography>

        <TextField value={salesMan} className={classes.formControl} id="outlined-basic" label="担当営業名" variant="outlined" />

        <br className={classes.end} />
        <div className={classes.left}><br /></div>
        <div className={classes.left}><br /></div>
        <div className={classes.left}><br /></div>

        <DeleteButton onClick={clearAll} />
        <SearchButton />

      </CardContent>
    </Paper>
  );
}
