import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Grid } from '@material-ui/core/';
import InputLabel from '@material-ui/core/InputLabel';
import { occupations }  from './Occupation';
import { licenses } from './License';
import { areas } from './Area';
import { skills } from './Skill';
import './StaffSearch.css';
import  CheckBox  from './CheckBox';

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
}));

export default function StaffSearch() {

    // const [check, setCheck] = React.useState(false);

    // const handleChange = (event) => {
    //   // setCheck({ ...check, [event.target.name]: event.target.checked });
    //   setCheck(event.target.value);
    // };

    const [license, setLicense] = React.useState([]);

    const handleChange2 = (event) => {
      setLicense(event.target.value);
    };

    const [skill, setSkill] = React.useState({
      selectA:'',
      selectB:'',
      selectC:'',
    })
  
    const handleChange3 = (event) => {
      setSkill({...skill, [event.target.name]:event.target.value});
    };
    
    const classes = useStyles();
    const [state, setState] = React.useState({
      selectD: '',
      selectE: '',
      selectF: '',
      selectG: '',
    });

    const handleChange4 = (event) => {
      setState({ ...state, [event.target.name]: event.target.value });
    };

    const [text, setText] = React.useState({
      text: ''
    });

    const handleChange5 = (event) => {
      setText({ ...text, [event.target.name]: event.target.value });
    }

    const [value, setValue] = React.useState({
      radioA: '',
      radioB: '',
    });

    const handleChange6 = (event) => {
      setValue({ ...value, [event.target.name]: event.target.value });
    };

    const Click = () => {
      // setCheck(false);
      setLicense({license:''});
      setSkill({license:''});
      setState({state: ''});
      setText({text: ''});
      setValue({value:''});
      }

return (
    <Paper class="paper">
    <div>
    <Typography variant="h2">スタッフ検索</Typography>

    <Typography>職種</Typography>
    <div>
        <ul>
        {
          occupations.map((data) => 
            (<CheckBox {...data} />)
          )
        }
        </ul>
      </div>
      
    <Typography>資格</Typography>

<FormControl variant="outlined"　className={classes.formControl}>
        <Select
          value={license}
          onChange={handleChange2}
        >
          {licenses.map((data) => (
            <MenuItem key={data.name} value={data.name} >
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

    <Typography>スキルレベル</Typography>
        <Grid container spacing={2}>
        <Grid item xs={6}>

<FormControl variant="outlined"　className={classes.formControl}>
<InputLabel id="demo-simple-select-outlined-label">スキル</InputLabel>
        <Select
          value={skill.selectA}
          onChange={handleChange3}
          name="selectA"
        >
          {skills.map((data) => (
            <MenuItem key={data.name} value={data.name} >
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
        </Grid>
      <Grid item xs={6}>
　　　 <FormControl variant="outlined" className={classes.formControl}　>
        <InputLabel id="demo-simple-select-outlined-label">レベル</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state.selectD}
          onChange={handleChange4}
          name="selectD"
          label="スキルレベル2"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>
      <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="radioA" value={value.radioA} onChange={handleChange6}>
      <FormControlLabel value="and" control={<Radio color="primary"/>} label="and" />
      <FormControlLabel value="or" control={<Radio color="primary"/>} label="or" />
      </RadioGroup>
      </FormControl>
        <Grid container spacing={2}>
        <Grid item xs={6}>

<FormControl variant="outlined"　className={classes.formControl}>
<InputLabel id="demo-simple-select-outlined-label">スキル</InputLabel>
        <Select
          value={skill.selectB}
          onChange={handleChange3}
          name="selectB"
        >
          {skills.map((data) => (
            <MenuItem key={data.name} value={data.name} >
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={6}>
      　　　 <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel id="demo-simple-select-outlined-label">レベル</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state.selectE}
          onChange={handleChange4}
          name="selectE"
          label="スキルレベル4"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>
      <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="radioB" value={value.radioB} onChange={handleChange6}>
      <FormControlLabel value="and" control={<Radio color="primary"/>} label="and" />
      <FormControlLabel value="or" control={<Radio color="primary"/>} label="or" />
      </RadioGroup>
      </FormControl>
        <Grid container spacing={2}>
        <Grid item xs={6}>
<FormControl variant="outlined"　className={classes.formControl}>
<InputLabel id="demo-simple-select-outlined-label">スキル</InputLabel>
        <Select
          value={skill.selectC}
          onChange={handleChange3}
          name="selectC"
        >
          {skills.map((data) => (
            <MenuItem key={data.name} value={data.name} >
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={6}>
      　　　 <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel id="demo-simple-select-outlined-label">レベル</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state.selectF}
          onChange={handleChange4}
          name="selectF"
          label="スキルレベル6"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
          <MenuItem value={7}>7</MenuItem>
          <MenuItem value={8}>8</MenuItem>
          <MenuItem value={9}>9</MenuItem>
          <MenuItem value={10}>10</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>

      <Grid container spacing={5}>
      <Grid item xs={6}>
      <Typography>年齢</Typography>
      <TextField 
        id="outlined-basic"
        variant="outlined"　
        value={text.text} name="text"
        onChange={handleChange5} />
      </Grid>

      <Grid item xs={6}>
      <Typography>性別</Typography>
      　　　 <FormControl variant="outlined" className={classes.formControl}>
        <Select
          value={state.selectG}
          onChange={handleChange4}
          name="selectG"
          label="性別"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={"男"}>男</MenuItem>
          <MenuItem value={"女"}>女</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>

      <Grid container spacing={2}>
      <Grid item xs>
      <Typography>地域</Typography>
      <FormControl variant="outlined"　className={classes.formControl}>
        <Select
          value={license}
          onChange={handleChange2}
        >
          {areas.map((data) => (
            <MenuItem key={data.name} value={data.name} >
              {data.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs>
      <Button variant="contained" onClick={Click}>クリア</Button>
      </Grid>
      <Grid item xs>
      <Button variant="contained">検索</Button>
      </Grid>
      </Grid>

</div>
      </Paper>
      )}
