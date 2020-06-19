import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
// import SimpleSelect from './Select';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
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

    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const [state, setState] = React.useState({
      checkedA: false,
      checkedB: false,
      checkedC: false,
      checkedD: false,
    });

    const handleChange2 = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    
return (
    <Paper class="paper">
    <Typography variant="h2">スタッフ検索</Typography>
    <Typography>職種</Typography>
    <FormGroup row　class="checkbox">
    <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
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
            checked={state.checkedB}
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
            checked={state.checkedC}
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
            checked={state.checkedD}
            onChange={handleChange}
            name="checkedD"
            color="primary"
          />
        }
        label="：その他"
      />
      </FormGroup>
      {/* <SimpleSelect /> */}
      <div>
  <Typography>資格</Typography>
　　　 <FormControl variant="outlined" className={classes.formControl} class="license">
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
  <Typography>スキルレベル</Typography>
      <Grid container spacing={2}>
      <Grid item xs={6}>
　　　 <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={6}>
　　　 <FormControl variant="outlined" className={classes.formControl}　>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>
      <RadioGroup row aria-label="position" name="position" class="radio">
        <FormControlLabel value="end" control={<Radio color="primary" />} label="and" />
        <FormControlLabel value="end" control={<Radio color="primary" />} label="of" />
        </RadioGroup>
        <Grid container spacing={2}>
        <Grid item xs={6}>
      　　　 <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={6}>
      　　　 <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>
      <RadioGroup row aria-label="position" name="position" class="radio">
        <FormControlLabel value="end" control={<Radio color="primary" />} label="and" />
        <FormControlLabel value="end" control={<Radio color="primary" />} label="of" />
        </RadioGroup>
        <Grid container spacing={2}>
        <Grid item xs={6}>
      　　　 <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={6}>
      　　　 <FormControl variant="outlined" className={classes.formControl} >
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>
      <Grid container spacing={5}>
      <Grid item xs={6}>
      <Typography>年齢</Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Grid>
      <Grid item xs={6}>
      <Typography>性別</Typography>
      　　　 <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      </Grid>
      <Grid container spacing={2}>
      <Grid item xs>
      <Typography>地域</Typography>
      　　　 <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange2}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs>
      <Button variant="contained">クリア</Button>
      </Grid>
      <Grid item xs>
      <Button variant="contained">検索</Button>
      </Grid>
      </Grid>

</div>
      </Paper>
      )}
