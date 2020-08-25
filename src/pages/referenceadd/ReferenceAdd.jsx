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

const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 195,
    },
    button1: {
      marginTop: 20,
    },
  　button2: {
      marginTop: 20,
      left: theme.spacing(2),
      right: theme.spacing(2),
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

  const add = () => {
  
    const newValue = {matter_id:matterId, staff_id:staffId, occupation_id:occupationId, position:position, interview_location:interviewLocation, interview_date:interviewDate, interview_times:interviewTimes, note:note, entrance_date:entranceDate, entry_at:entry, update_at:updateAt, update_by:updateBy}
    
    if((matterId.length === 0) || (staffId.length === 0) || (occupationId.length === 0) || (position.length === 0) || (interviewLocation.length === 0) || (interviewDate.length === 0) || (interviewTimes.length === 0) || (entranceDate.length === 0) || (updateBy.length === 0))
    {
      window.alert('未入力項目があります。\n*は必須項目です。');
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
        <Grid item xs={4}>
            {/* <Typography>案件ID</Typography> */}
            <TextField required label="案件ID" variant="outlined" type="number" inputProps={{min:1 , max:999999999}} name="matterId" value={matterId} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            {/* <Typography>スタッフID</Typography> */}
            <TextField required label="スタッフID" variant="outlined" type="number" inputProps={{min:1 , max:999999999}} name="staffId" value={staffId} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            {/* <Typography>職種</Typography> */}
            <FormControl required variant="outlined" className={classes1.formControl}>
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
        <Grid item xs={4}>
            {/* <Typography>ポジション</Typography> */}
            <TextField required label="ポジション" variant="outlined" name="position" value={position} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            {/* <Typography>面談場所</Typography> */}
            <TextField required label="面談場所" variant="outlined" name="interviewLocation" value={interviewLocation} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            {/* <Typography>面談回数</Typography> */}
            <TextField required label="面談回数" variant="outlined" name="interviewTimes" value={interviewTimes} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            {/* <Typography>面談日</Typography> */}
            <TextField  required
                        label="面談日"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        type="date" inputProps={{min: "2020-04-01" , max: "2099-12-31"}} name="interviewDate" value={interviewDate} onChange={handleChange} className={classes1.formControl}/>
        </Grid>
        <Grid item xs={4}>
            {/* <Typography>備考欄</Typography> */}
            <TextField label="備考欄" variant="outlined" name="note" value={note} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            {/* <Typography>入場日</Typography> */}
            <TextField  required
                        label="入場日"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        type="date" inputProps={{min: "2020-04-01" , max: "2099-12-31"}} name="entranceDate" value={entranceDate} onChange={handleChange} className={classes1.formControl}/>
        </Grid>
        <Grid item xs={4}>
            {/* <Typography>更新者ID</Typography> */}
            <TextField required label="更新者ID" variant="outlined" type="number" name="updateBy" value={updateBy} onChange={handleChange}/>
        </Grid>
            <Grid item xs={4}>
                <Button variant="contained" className={classes1.button1} onClick={clear}>クリア</Button>
                <Button variant="contained" className={classes1.button2} onClick={add}>登録</Button>
            </Grid>
        </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}