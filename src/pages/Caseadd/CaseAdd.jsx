import React from 'react';
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
      positon: 'absolute',
      left: '20%',
      top: '90px',
      width: '25%',
      backgroundColor: 'white',

    }},

  button: {
    left: '68%',
    top: '83%',
    position: 'absolute',
    width: 'auto',
  },

  skill1: {
    width: '10%',
    position: 'absolute',
    top: '31%',
    left: '49%',
  },

  skill2: {
    position: 'absolute',
    width: '10%',
    top: '31%',
    left: '59%',
  },

  skill3: {
    width: '10%',
    position: 'absolute',
    top: '31%',
    left: '69%',
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
    left: '21%',
    top: '10%',
  },

  margin: {
    position: 'absolute',
    left: '21%',
    top: '50%',
    width: '53%',
    height: 'available',
  },

  margin2: {
    position: 'absolute',
    left: '21%',
    top: '66%',
    width: '53%',
    height: 'available',
  },


  paper1: {
    position: 'relative',
    width: 'auto',
    minWidth: '50%',
    margin: '-10px',
    height: 'auto',
    minHeight: '120vh',
},

}));

export default function LayoutTextFields() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    month: '',
    name: 'hai',
  });

;

  const handleChange2 = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <div>
        <TextField
          id="standard-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="None"
          id="margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
        />
        <TextField
          label="Dense"
          id="margin-dense"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="dense"
        />
        <TextField
          label="Normal"
          id="margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
        />
      </div>
      <div>
        <TextField
          id="filled-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          label="None"
          id="filled-margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          variant="filled"
        />
        <TextField
          label="Dense"
          id="filled-margin-dense"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="dense"
          variant="filled"
        />
        <TextField
          label="Normal"
          id="filled-margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <TextField
          label="None"
          id="outlined-margin-none"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          variant="outlined"
        />
        <TextField
          label="Dense"
          id="outlined-margin-dense"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="dense"
          variant="outlined"
        />
        <TextField
          label="Normal"
          id="outlined-margin-normal"
          defaultValue="Default Value"
          className={classes.textField}
          helperText="Some important text"
          margin="normal"
          variant="outlined"
        />
      </div>
      <Paper elevation={3} className = {classes.paper1}>
    <form action="jdbc:sqlserver://[localhost[:4000]"className={classes.root2} noValidate autoComplete="off">
      <div>
      <div>
      <Typography className={classes.h1} variant="h2" gutterBottom>
        案件登録
      </Typography>
      </div>
      <div >
      <TextField  id="name" label="案件名" variant="outlined" />
      <TextField  id="" label="案件保有会社" variant="outlined" />
      </div>
      <div>
      <TextField
          id="outlined-number"
          label="依頼単金"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">¥</InputAdornment>,
          }}
          variant="outlined"
        />
        <TextField
        id="outlined-basic" label="勤務地"　placeholder='勤務地の住所を入力' variant="outlined" 
        >
        </TextField>
      <div>
      <TextField
          id="outlined-number"
          label="募集人数"
          type="number"
          InputProps={{
           endAdornment: <InputAdornment position="end">人</InputAdornment>,
          }}
          variant="outlined"
        />
        <div>
<FormControl variant="outlined"　className={classes.skill1}  >
        <InputLabel htmlFor="outlined-age-native-simple">スキル①</InputLabel>
        <Select
          native
          value={state.skill1}
          onChange={handleChange2}
          label="skill1"
          inputProps={{
            name: 'skill1',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Java</option>
          <option value={20}>C言語</option>
          <option value={30}>C#</option>
          <option value={40}>C++</option>
          <option value={50}>MySQL</option>
          <option value={60}>Ruby</option>
          <option value={70}>Oracle</option>
          <option value={80}>Python</option>
          <option value={90}>JavaScript</option>
          <option value={100}>PHP</option>
        </Select>
      </FormControl>
       
        <FormControl variant="outlined" className={classes.skill2}>
        <InputLabel htmlFor="outlined-age-native-simple">スキル②</InputLabel>
        <Select
          native
          value={state.skill2}
         
          onChange={handleChange2}
          label="skill2"
          
          inputProps={{
            name: 'skill2',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Java</option>
          <option value={20}>C言語</option>
          <option value={30}>C#</option>
          <option value={40}>C++</option>
          <option value={50}>MySQL</option>
          <option value={60}>Ruby</option>
          <option value={70}>Oracle</option>
          <option value={80}>Python</option>
          <option value={90}>JavaScript</option>
          <option value={100}>PHP</option>
        </Select>
      </FormControl>
      
      <FormControl variant="outlined" className={classes.skill3} >
        <InputLabel htmlFor="outlined-age-native-simple">スキル③</InputLabel>
        <Select
          native
          value={state.skill3}
          onChange={handleChange2}
          label="skill3"
          inputProps={{
            name: 'skill3',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Java</option>
          <option value={20}>C言語</option>
          <option value={30}>C#</option>
          <option value={40}>C++</option>
          <option value={50}>MySQL</option>
          <option value={60}>Ruby</option>
          <option value={70}>Oracle</option>
          <option value={80}>Python</option>
          <option value={90}>JavaScript</option>
          <option value={100}>PHP</option>
        </Select>
      </FormControl>
      </div>
      </div>
      
      <div  className={classes.date}>
      <TextField
        id="date"
        label="案件開始日"
        type="date"
        defaultValue="2020-01-01"
        InputLabelProps={{
          shrink: true,
        }}
      />
      </div>
      <div>
      <FormControl  className={classes.margin} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">募集内容</InputLabel>
          <OutlinedInput
         id="filled-multiline-static"
         label="Multiline"
         multiline
         rows={4}
         variant="filled"/>
        </FormControl>
        
      </div>
      <FormControl  className={classes.margin2} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">スキル詳細</InputLabel>
          <OutlinedInput
         id="filled-multiline-static"
         label="Multiline"
         multiline
         rows={4}
         variant="filled"/>
        </FormControl>
      <div>
        
        </div>
        <div >
        <Button className={classes.button} variant="contained" size="large" >
        登録
      </Button>
      </div>
      </div>
      </div>
      </form> 
   </Paper>
  
    </div>
  );
}