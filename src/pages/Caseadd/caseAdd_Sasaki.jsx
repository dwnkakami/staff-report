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

const currencies = [
  {
    value: 'TYD',
    label: '東京都千代田区',
  },
  {
    value: 'TYK',
    label: '東京都中央区',
  },
  {
    value: 'MNT',
    label: '東京都港区',
  },
  {
    value: 'SNJ',
    label: '東京都新宿区',
  },
  {
    value: 'SBY',
    label: '東京都渋谷区',
  },
  {
    value: 'TIT',
    label: '東京都台東区',
  },
  {
    value: 'SMD',
    label: '東京都墨田区',
  },
  {
    value: 'KTU',
    label: '東京都江東区',
  },
  {
    value: 'SNG',
    label: '東京都品川区',
  },
  {
    value: 'MGR',
    label: '東京都目黒区',   
  },
  {
    value: 'OOT',
    label: '東京都大田区',
  },
  {
    value: 'STG',
    label: '東京都世田谷区',
  },
  {
    value: 'BKU',
    label: '東京都文京区',
  },
  {
    value: 'NKN',
    label: '東京都中野区',
  },
  {
    value: 'SGN',
    label: '東京都杉並区',
  },
  {
    value: 'TYS',
    label: '東京都豊島区',
  },
  {
    value: 'KTK',
    label: '東京都北区',
  },
  {
    value: 'ARK',
    label: '東京都荒川区',
  },
  {
    value: 'ITS',
    label: '東京都板橋区',
  },
  {
    value: 'NRM',
    label: '東京都練馬区',
  },
  {
    value: 'ADT',
    label: '東京都安立区',
  },
  {
    value: 'KTS',
    label: '東京都葛飾区',
  },
  {
    value: 'EDG',
    label: '東京都江戸川区',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      positon: 'absolute',
      left: '250px',
      top: '80px',
      width: '40ch',
      backgroundColor: 'white',

    }},

  button: {
    left: '820px',
    top: '520px',
    position: 'absolute',
  },

  date: {
    left: '650px',
    top: '295px',
    position: 'absolute',
    backgroundColor: 'white',
  },

  cont: {
    left: '299px',
    width: '70ch',
  },

  h1: {
    position: 'absolute',
    left: '180px',
    top: '30px',

  },

  paper1: {
    position: 'relative',
    margin: '-10px',
    height: 'auto',
    minHeight: '80vh',
    border: '1px solid black',
},

  


  //  f1: {
  //    margin: theme.spacing(2),
  //    position: 'absolute',
  //    left: '250px',
  //  },
    // cont: {
    //   margin: theme.spacing(1),
    //    width: '50ch',
    // },

    
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState('EUR');
 

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const [state, setState] = React.useState({
    month: '',
    name: 'hai',
  });

  const handleChange2 = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    
    <Paper elevation={3} className = {classes.paper1}>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <Typography className={classes.h1} variant="h2" gutterBottom>
        案件登録
      </Typography>
      </div>
      <div >
      <TextField  id="outlined-basic" label="案件名" variant="outlined" />
      <TextField  id="outlined-basic" label="案件保有会社" variant="outlined" />
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
        className = {classes.place}
          id="outlined-select-currency-native"
          select
          label="勤務地"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="リストから勤務地を選択"
          variant="outlined"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
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
        <div className={classes.date}>
<FormControl variant="outlined" >
        <InputLabel htmlFor="outlined-age-native-simple">年</InputLabel>
        <Select
          native
          value={state.age}
          placeholder="mm"
          onChange={handleChange2}
          label="Age"
          inputProps={{
            name: 'year',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>2000</option>
          <option value={20}>2001</option>
          <option value={30}>2002</option>
          <option value={40}>2003</option>
          <option value={50}>2004</option>
          <option value={60}>2005</option>
          <option value={70}>2006</option>
          <option value={80}>2007</option>
          <option value={90}>2008</option>
          <option value={100}>2009</option>
          <option value={110}>2010</option>
          <option value={120}>2011</option>
          <option value={130}>2012</option>
          <option value={140}>2013</option>
          <option value={150}>2014</option>
          <option value={160}>2015</option>
          <option value={170}>2016</option>
          <option value={180}>2017</option>
          <option value={190}>2018</option>
          <option value={200}>2019</option>
          <option value={210}>2020</option>
        </Select>
      </FormControl>
       
        <FormControl variant="outlined" >
        <InputLabel htmlFor="outlined-age-native-simple">月</InputLabel>
        <Select
          native
          value={state.age}
          placeholder="mm"
         
          onChange={handleChange2}
          label="Age"
          
          inputProps={{
            name: 'month',
            id: 'outlined-age-native-simple',
            helperText:"案件開始日を入力",
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>01</option>
          <option value={20}>02</option>
          <option value={30}>03</option>
          <option value={40}>04</option>
          <option value={50}>05</option>
          <option value={60}>06</option>
          <option value={70}>07</option>
          <option value={80}>08</option>
          <option value={90}>09</option>
          <option value={100}>10</option>
          <option value={110}>11</option>
          <option value={120}>12</option>
        </Select>
      </FormControl>
      <FormControl variant="outlined" >
        <InputLabel htmlFor="outlined-age-native-simple">日</InputLabel>
        <Select
          native
          value={state.age}
          placeholder="dd"
          onChange={handleChange2}
          label="age"
          inputProps={{
            name: 'date',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>01</option>
          <option value={20}>02</option>
          <option value={30}>03</option>
          <option value={40}>04</option>
          <option value={50}>05</option>
          <option value={60}>06</option>
          <option value={70}>07</option>
          <option value={80}>08</option>
          <option value={90}>09</option>
          <option value={100}>10</option>
          <option value={110}>11</option>
          <option value={120}>12</option>
          <option value={130}>13</option>
          <option value={140}>14</option>
          <option value={150}>15</option>
          <option value={160}>16</option>
          <option value={170}>17</option>
          <option value={180}>18</option>
          <option value={190}>19</option>
          <option value={200}>20</option>
          <option value={210}>21</option>
          <option value={220}>22</option>
          <option value={230}>23</option>
          <option value={240}>24</option>
          <option value={250}>25</option>
          <option value={260}>26</option>
          <option value={270}>27</option>
          <option value={280}>28</option>
          <option value={290}>29</option>
          <option value={300}>30</option>
          <option value={310}>31</option>
        </Select>
      </FormControl>
      </div>
      </div>
      <div>
      <TextField
          className={classes.cont}
          id="outlined-full-width"
          label="募集内容"
          style={{ margin: 9 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </div>
      <div><TextField
          id="outlined-full-width"
          label="スキルレベル等"
          style={{ margin: 8 }}
          placeholder="案件に必要である資格、スキルを入力"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        /></div>
        <div >
        <Button className={classes.button} variant="contained" size="large" >
        登録
      </Button>
      </div>
      </div>
   </form> 
   </Paper>
   )};
  
     
