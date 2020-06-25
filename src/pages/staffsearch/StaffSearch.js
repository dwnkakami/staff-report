import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Grid } from '@material-ui/core/';
import './StaffSearch.css';

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

    const [check, setCheck] = React.useState({
      checkedA: false,
      checkedB: false,
      checkedC: false,
      checkedD: false,
    });

    const handleChange = (event) => {
      setCheck({ ...check, [event.target.name]: event.target.checked });
    };
    
    const classes = useStyles();
    const [state, setState] = React.useState({
      selectA: '',
      selectB: '',
      selectC: '',
      selectD: '',
      selectE: '',
      selectF: '',
      selectG: '',
      selectH: '',
      selectI: '',
    });

    const handleChange2 = (event) => {
      setState({ ...state, [event.target.name]: event.target.value });
    };

    const [text, setText] = React.useState({
      text: ''
    });

    const handleChange3 = (event) => {
      setText({ ...text, [event.target.name]: event.target.value });
    }

    const [value, setValue] = React.useState({
      radioA: '',
      radioB: '',
    });

    const handleChange4 = (event) => {
      setValue({ ...value, [event.target.name]: event.target.value });
    };

    const Click = () => {
      setCheck({check:false});
      setState({state: ''});
      setText({text: ''});
      setValue({value:''})
    }

return (
    <Paper class="paper">
    <div>
    <Typography variant="h2">スタッフ検索</Typography>

    <Typography>職種</Typography>
    <FormGroup row　class="checkbox">
    <FormControlLabel
        control={
          <Checkbox
            checked={check.checkedA}
            onChange={handleChange}
            name="checkedA"
            color="primary"
          />
        }
        label="：ディレクター"
    />
    <FormControlLabel
        control={
          <Checkbox
            checked={check.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="：プログラマー"
    />
    <FormControlLabel
        control={
          <Checkbox
            checked={check.checkedC}
            onChange={handleChange}
            name="checkedC"
            color="primary"
          />
        }
        label="：サポート"
    />
    <FormControlLabel
        control={
          <Checkbox
            checked={check.checkedD}
            onChange={handleChange}
            name="checkedD"
            color="primary"
          />
        }
        label="：その他"
    />
    </FormGroup>
      
    <Typography>資格</Typography>
　　　   <FormControl variant="outlined" className={classes.formControl} >
          <Select
            value={state.selectA}
            onChange={handleChange2}
            name="selectA"
            label="資格"
          >
            <MenuItem value="">
            </MenuItem>
            <MenuItem value={"ITパスポート"}>ITパスポート</MenuItem>
            <MenuItem value={"基本情報技術者"}>基本情報技術者</MenuItem>
            <MenuItem value={"応用情報技術者"}>応用情報技術者</MenuItem>
          </Select>
        </FormControl>

    <Typography>スキルレベル</Typography>
        <Grid container spacing={2}>
        <Grid item xs={6}>
　　　   <FormControl variant="outlined" className={classes.formControl} >
        {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={state.selectB}
            onChange={handleChange2}
            name="selectB"
            label="スキルレベル1"
          >
            <MenuItem value="">
            {/* <em>None</em> */}
            </MenuItem>
            <MenuItem value={"Java"}>Java</MenuItem>
            <MenuItem value={"C??"}>C??</MenuItem>
            <MenuItem value={"C#"}>C#</MenuItem>
          </Select>
        </FormControl>
        </Grid>
      <Grid item xs={6}>
　　　 <FormControl variant="outlined" className={classes.formControl}　>
        {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state.selectC}
          onChange={handleChange2}
          name="selectC"
          label="スキルレベル2"
        >
          <MenuItem value="">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>
      <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="radioA" value={value.radioA} onChange={handleChange4}>
      <FormControlLabel value="and" control={<Radio />} label="and" />
      <FormControlLabel value="or" control={<Radio />} label="or" />
      </RadioGroup>
      </FormControl>
      {/* <RadioGroup row aria-label="position" name="position" class="radio">
        <FormControlLabel value="end" control={<Radio color="primary" />} label="and" />
        <FormControlLabel value="end" control={<Radio color="primary" />} label="of" />
        </RadioGroup> */}
        <Grid container spacing={2}>
        <Grid item xs={6}>
      　　　 <FormControl variant="outlined" className={classes.formControl} >
        {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state.selectD}
          onChange={handleChange2}
          name="selectD"
          label="スキルレベル3"
        >
          <MenuItem value="">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={"Java"}>Java</MenuItem>
          <MenuItem value={"C??"}>C??</MenuItem>
          <MenuItem value={"C#"}>C#</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={6}>
      　　　 <FormControl variant="outlined" className={classes.formControl} >
        {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state.selectE}
          onChange={handleChange2}
          name="selectE"
          label="スキルレベル4"
        >
          <MenuItem value="">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>
      <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="radioB" value={value.radioB} onChange={handleChange4}>
      <FormControlLabel value="and" control={<Radio />} label="and" />
      <FormControlLabel value="or" control={<Radio />} label="or" />
      </RadioGroup>
      </FormControl>
      {/* <RadioGroup row aria-label="position" name="position" class="radio">
        <FormControlLabel value="end" control={<Radio color="primary" />} label="and" />
        <FormControlLabel value="end" control={<Radio color="primary" />} label="of" />
        </RadioGroup> */}
        <Grid container spacing={2}>
        <Grid item xs={6}>
      　　　 <FormControl variant="outlined" className={classes.formControl} >
        {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state.selectF}
          onChange={handleChange2}
          name="selectF"
          label="スキルレベル5"
        >
          <MenuItem value="">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={"Java"}>Java</MenuItem>
          <MenuItem value={"C??"}>C??</MenuItem>
          <MenuItem value={"C#"}>C#</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={6}>
      　　　 <FormControl variant="outlined" className={classes.formControl} >
        {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state.selectG}
          onChange={handleChange2}
          name="selectG"
          label="スキルレベル6"
        >
          <MenuItem value="">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
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
        onChange={handleChange3} />
      </Grid>

      <Grid item xs={6}>
      <Typography>性別</Typography>
      　　　 <FormControl variant="outlined" className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state.selectH}
          onChange={handleChange2}
          name="selectH"
          label="性別"
        >
          <MenuItem value="">
            {/* <em>None</em> */}
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
      　　　 <FormControl variant="outlined" className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel> */}
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state.selectI}
          onChange={handleChange2}
          name="selectI"
          label="地域"
        >
          <MenuItem value="">
            {/* <em>None</em> */}
          </MenuItem>
          <MenuItem value={"北海道"}>北海道</MenuItem>
          <MenuItem value={"東北"}>東北</MenuItem>
          <MenuItem value={"関東"}>関東</MenuItem>
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
