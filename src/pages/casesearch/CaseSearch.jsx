import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
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
// import SelectBox from './SelectBox';
import SearchButton from './SearchButton';
import DeleteButton from './DeleteButton';
// import CheckBox2 from './CheckBox2';
import DatePickers from './DatePickers';

//css
import './CaseSearch.css';



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    // backgroundColor: 'lightgrey',
  },
  child:{
    Bottom:0,
    position:'absolute',
    marginBottom:0,
    margin:'auto',
    // padding:0,
    backgroundColor:'green',
    verticalAlign:'bottom',
  },
  left: {
    width:160,
    float:'left',
    height:50,
    position:'relative',
    backgroundColor:'yellow',
    verticalAlign:'bottom',
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

  //job
  const [jobName, setJobName] = React.useState([]);

  const jobChange = (event) => {
    setJobName(event.target.value);
  };

  //license
  const [license,setLicense] = React.useState();
  const licenseChange = (event) => {
    setLicense(event.target.value);
  };
  const licenseItems = licenses.map((data,index) =>
      <MenuItem key={index}
              value={data.id}>{data.lang}</MenuItem>
  );

  //skill
  const [skill,setSkill] = React.useState('');
  const skillChange = (event) => {
    setSkill(event.target.value);
  };
  const skillItems = language.map((data,index) =>
      <MenuItem key={index}
              value={data.id}>{data.lang}</MenuItem>
  );

  return (
    <Paper className={classes.root} variant="outlined">
      <CardContent>
      <Typography variant="h3" component="h2">
        案件検索
        </Typography>

        <br className={classes.end}/>

      <div className={classes.left} id="left">
      <Typography className={classes.child} id="child" variant="h5" component="h2">
        キーワード検索
        </Typography>
      </div>  

        <KeywordSearch />
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

        {/* <CheckBox /> */}
        {/* <CheckBox2 /> */}


        <Typography className={classes.left} variant="h5" component="h2">
          資格
        </Typography>

        {/* <SelectBox name="資格" choice="ITパスポート" choice2="Oracle Master Gold" choice3="Oracle Master Silber" /> */}
        
        <TextField className={classes.formControl}
          select
          label="license"
          value={license}
          onChange={licenseChange}
          variant="outlined"
        >
          {licenseItems}
        </TextField>
        
        <br className={classes.end} />
        

        <Typography className={classes.left} variant="h5" component="h2">
          スキルレベル
        </Typography>

        {/* <div>
          <FormControl className={classes.formControl}>
            <InputLabel>Skill</InputLabel>
            <Select
              multiple
              value={skill}
              onChange={skillChange}
              input={<Input />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {language.map((data,index) => (
                <MenuItem key={index} value={data.id}>
                  <Checkbox checked={skill.indexOf(data) > -1} />
                  <ListItemText primary={data.lang} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div> */}


         <TextField className={classes.formControl}
          select
          label="skill"
          value={skill}
          onChange={skillChange}
          variant="outlined"
        >
          {skillItems}
        </TextField>

        <br className={classes.end} />
        

        <Typography className={classes.left} variant="h5" component="h2">
          期間
        </Typography>
        
        <DatePickers label="ここから" />

        <br className={classes.end} />
        <div className={classes.left}><br /></div>
        <div className={classes.other}><br /></div>
        <Typography variant="body2" component="p">～</Typography>
        <br className={classes.end} />

        <div className={classes.left}><br /></div>

        <DatePickers label="ここまで"　/>
        
        <br className={classes.end} />

        <Typography className={classes.left} variant="h5" component="h2">
          担当営業名
        </Typography>

        <TextField className={classes.formControl} id="outlined-basic" label="担当営業名" variant="outlined" />

        <br className={classes.end} />
        <div className={classes.left}><br /></div>
        <div className={classes.left}><br /></div>
        <div className={classes.left}><br /></div>

        <DeleteButton />
        <SearchButton />

      </CardContent>
    </Paper>
  );
}
