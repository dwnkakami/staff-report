import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    float:'left',
    padding:5,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    height:40,
  },
}));

export default function SelectBox(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
 
      <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">{props.name}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Age"
          className={classes.select}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>{props.choice}</MenuItem>
          {/* <MenuItem value={2}>{props.choice2}</MenuItem>
          <MenuItem value={3}>{props.choice3}</MenuItem>
          <MenuItem value={4}>{props.choice4}</MenuItem>
          <MenuItem value={5}>{props.choice5}</MenuItem>
          <MenuItem value={6}>{props.choice6}</MenuItem>
          <MenuItem value={7}>{props.choice7}</MenuItem>
          <MenuItem value={8}>{props.choice8}</MenuItem>
          <MenuItem value={9}>{props.choice9}</MenuItem>
          <MenuItem value={91}>{props.choice10}</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
}
