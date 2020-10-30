import React, { useState , useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
// import DialogContent from '@material-ui/core/DialogContent';
import { Typography, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 195,
    },
    tablespace: {
      marginTop: 5,
    },
    tablehead: {
      backgroundColor: "#AADDAA",
    },
    tabledata: {
      backgroundColor: "#FAFAFA",
    },
    addarea: {
      marginTop: 8,
      marginRight: 10,
      left: theme.spacing(2),
      // right: theme.spacing(2),
    },
    button1: {
      marginTop: 8,
      left: theme.spacing(4),
    },
  　button2: {
    marginTop: 8,
    // marginLeft: 5,
    left: theme.spacing(6),
    right: theme.spacing(2),
    backgroundColor:　"#536DFE",
 },
  }));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;
  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      allowNegative={false}
      isNumericString
      maxLength="10"
    />
  );
}
NumberFormatCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      overflow: 'clip',
    },
  }))(MuiDialogContent);

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [matterId,setMatterId] = useState("");
  const [staffId,setStaffId] = useState("");
  const [occupationId,setOccupationId] = useState("");
  const [position,setPosition] = useState("");
  const [interviewLocation,setInterviewLocation] = useState("");
  const [interviewDate,setInterviewDate] = useState("");
  const [interviewTimes,setInterviewTimes] = useState("");
  const [note,setNote] = useState("");
  const [entranceDate,setEntranceDate] = useState("");
  // const [updateAt,setUpdateAt] = useState("");
  const [updateBy,setUpdateBy] = useState("");
  
  const entry = new Date().toLocaleString();
  const updateAt = new Date().toLocaleString();
  
  const handleChange = e => {
      switch (e.target.name) {
          case 'matterId':
              setMatterId(e.target.value);
              break;
          case 'staffId':
              setStaffId(e.target.value);
              break;
          case 'occupationId':
              setOccupationId(e.target.value);
              break;
          case 'position':
              setPosition(e.target.value);
              break;
          case 'interviewLocation':
              setInterviewLocation(e.target.value);
              break;
          case 'interviewDate':
              setInterviewDate(e.target.value);
              break;
          case 'interviewTimes':
              setInterviewTimes(e.target.value);
              break;
          case 'note':
              setNote(e.target.value);
              break;
          case 'entranceDate':
              setEntranceDate(e.target.value);
              break;
          // case 'updateAt':
          //     setUpdateAt(e.target.value);
          //     break;
          case 'updateBy':
              setUpdateBy(e.target.value);
              break;
          default:
              console.log('text not found');
      }
  };
  
  const [user,setUser] = useState([]);

  useEffect(() => getData());

  const getData = () => {
      if(user.length === 0){
        axios
        .get('./api/staffadd004')
        .then(response => {
            setUser(response.data);
            console.log(response.data);
        })
        .catch(() => {
            console.log('connected error');
        })
    }
}

const [check, setCheck] = useState(false);

const add = () => {
  axios
    .get('./api/referenceadd001/' + matterId)
    .then(response => {
      if(response.data.length < 1) {
      setCheck(true)
      window.alert('その案件IDは登録されていません。');
        } else {
            setCheck(false)
            staffAdd();
        }})
    .catch(() => {
        console.log('connected error')
        window.alert('未入力項目があります。\n*は必須項目です。');
    })
}

const staffAdd = () => {
  axios
    .get('./api/referenceadd002/' + staffId)
    .then(response => {
      if(response.data.length < 1) {
        setCheck(true)
        window.alert('そのスタッフIDは登録されていません。');
          } else {
              setCheck(false)
              userAdd();
          }})
    .catch(() => {
      console.log('connected error')
      window.alert('未入力項目があります。\n*は必須項目です。');
    })
}

const userAdd = () => {
  axios
    .get('./api/referenceadd003/' + updateBy)
    .then(response => {
      if(response.data.length < 1) {
        setCheck(true)
        window.alert('その更新者IDは登録されていません。');
          } else {
              setCheck(false)
              referenceAdd();
          }})
    .catch(() => {
      console.log('connected error')
      window.alert('未入力項目があります。\n*は必須項目です。');
    })
}

  const referenceAdd = () => {
  
    const newValue = {matter_id:matterId, staff_id:staffId, occupation_id:occupationId, position:position, interview_location:interviewLocation, interview_date:interviewDate, interview_times:interviewTimes, note:note, entrance_date:entranceDate, entry_at:entry, update_at:updateAt, update_by:updateBy}
    
    const date = new Date().toJSON().split('T')[0]

    if((matterId.length === 0) || (staffId.length === 0) || (occupationId.length === 0) || (position.length === 0) || (interviewLocation.length === 0) || (interviewDate.length === 0) || (interviewTimes.length === 0) || (entranceDate.length === 0) || (updateBy.length === 0))
    {
      window.alert('未入力項目があります。\n*は必須項目です。');
    } else if (interviewDate < date) {
        window.alert('面談日を正しく入力して下さい。')
    } else if (entranceDate < date) {
        window.alert('入場日を正しく入力して下さい。')
    } else {

      axios
          .post('/api/referenceadd', newValue)
          .then(response => {
              console.log(response.data);
              window.alert("追加されました")
          })
          .catch(() => {
              console.log('submit error');
              window.alert("追加できませんでした")
            })
          }
    };
  
  const clear = () => {
      setMatterId("")
      setStaffId("")
      setOccupationId("")
      setPosition("")
      setInterviewLocation("")
      setInterviewDate("")
      setInterviewTimes("")
      setNote("")
      setEntranceDate("")
      setUpdateBy("")
  }
  
  const classes1 = useStyles();

  const interviewmindate = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //January is 0!
  let yyyy = today.getFullYear();
   if(dd<10){
          dd='0'+dd
      } 
      if(mm<10){
          mm='0'+mm
      } 
  
  today = yyyy+'-'+mm+'-'+dd;
  document.getElementById("interviewdate").setAttribute("min", today);
  }

  const entrancemindate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
     if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 
    
    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("entrancedate").setAttribute("min", today);
    }

  return (
    <div>
      <Button variant="outlined" color="" onClick={handleClickOpen}>
        引合登録
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth='md'
      >
        <DialogTitle id="alert-dialog-title" onClose={handleClose}>
            引合登録
        </DialogTitle>
        <DialogContent dividers >
        <Grid container spacing={2}>
       <table>
       <tr>
       <th rowSpan="5" className={classes1.tablehead}>案件情報</th>
       <td className={classes1.tabledata}>
        <Grid item xs={4}>
            {/* <Typography>案件ID</Typography> */}
            <TextField required label="案件ID" variant="outlined" name="matterId" value={matterId} onChange={handleChange} InputProps={{inputComponent: NumberFormatCustom}} size="small" style={{background: "#FFFFFF"}}/>
        </Grid>
        </td>
        </tr>
        <tr>
        <td className={classes1.tabledata}>
        <Grid item xs={4}>
            {/* <Typography>スタッフID</Typography> */}
            <TextField required label="スタッフID" variant="outlined" name="staffId" value={staffId} onChange={handleChange} InputProps={{inputComponent: NumberFormatCustom}} size="small" style={{background: "#FFFFFF"}}/>
        </Grid>
        </td>
        </tr>
        <tr>
        <td className={classes1.tabledata}>
        <Grid item xs={4}>
            {/* <Typography>職種</Typography> */}
            <FormControl required variant="outlined" className={classes1.formControl} size="small" style={{background: "#FFFFFF"}}>
            <InputLabel>職種</InputLabel>
            <Select  name="occupationId" value={occupationId} onChange={handleChange} label="選択してください">
            <MenuItem value=""></MenuItem>
            {user.map((data) => (
            <MenuItem key={data.occupation_id} value={data.occupation_id} >
              {data.occupation}
            </MenuItem>
            ))}
            </Select>
            </FormControl>
        </Grid>
        </td>
        </tr>
        <tr>
        <td className={classes1.tabledata}>
        <Grid item xs={4}>
            {/* <Typography>ポジション</Typography> */}
            <TextField required label="ポジション" variant="outlined" name="position" inputProps={{maxlength: 50}} value={position} onChange={handleChange} size="small" style={{background: "#FFFFFF"}}/>
        </Grid>
        </td>
        </tr>
        <tr>
        <td className={classes1.tabledata}>
        <Grid item xs={4}>
            {/* <Typography>入場日</Typography> */}
            <TextField  required
                        label="入場日"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        type="date" inputProps={{max: "9999-12-31"}} id="entrancedate" name="entranceDate" value={entranceDate} onChange={handleChange} onClick={entrancemindate} className={classes1.formControl} size="small" style={{background: "#FFFFFF"}}/>
        </Grid>
        </td>
        </tr>
       </table>
       <table className={classes1.tablespace}>
       <tr>
       <th rowSpan="3" className={classes1.tablehead}>面談情報</th>
       <td className={classes1.tabledata}>
        <Grid item xs={4}>
            {/* <Typography>面談場所</Typography> */}
            <TextField required label="面談場所" variant="outlined" name="interviewLocation" inputProps={{maxlength: 100}} value={interviewLocation} onChange={handleChange} size="small" style={{background: "#FFFFFF"}}/>
        </Grid>
        </td>
        </tr>
        <tr>
        <td className={classes1.tabledata}>
        <Grid item xs={4}>
            {/* <Typography>面談回数</Typography> */}
            <TextField required label="面談回数" variant="outlined" name="interviewTimes" maxLength="2" value={interviewTimes} onChange={handleChange} InputProps={{inputComponent: NumberFormatCustom}} size="small" style={{background: "#FFFFFF"}}/>
        </Grid>
        </td>
        </tr>
        <tr>
        <td className={classes1.tabledata}>
        <Grid item xs={4}>
            {/* <Typography>面談日</Typography> */}
            <TextField  required
                        label="面談日"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        type="date" inputProps={{max: "9999-12-31"}} id="interviewdate" name="interviewDate" value={interviewDate} onChange={handleChange} onClick={interviewmindate} className={classes1.formControl} size="small" style={{background: "#FFFFFF"}}/>
        </Grid>
        </td>
        </tr>
       </table>
       <table className={classes1.tablespace}>
       <tr>
       <th className={classes1.tablehead}>備考</th>
       <td className={classes1.tabledata}>
        <Grid item xs={4}>
            {/* <Typography>備考欄</Typography> */}
            <TextField label="備考欄" variant="outlined" name="note" inputProps={{maxlength: 200}} value={note} onChange={handleChange} style={{background: "#FFFFFF"}}/>
        </Grid>
        </td>
        </tr>
       </table>
        <Grid item xs={8}>
            {/* <Typography>更新者ID</Typography> */}
            <TextField required label="更新者ID" variant="outlined" name="updateBy" value={updateBy} className={classes1.addarea} onChange={handleChange} InputProps={{inputComponent: NumberFormatCustom}} size="small"/>
        {/* </Grid>
            <Grid item xs={4}> */}
                <Button variant="contained" className={classes1.button1} onClick={clear}>クリア</Button>
                <Button variant="contained" className={classes1.button2} onClick={add}>登録</Button>
            </Grid>
        </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}