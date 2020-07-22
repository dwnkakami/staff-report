import React, { useState , useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Typography, DialogTitle, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 195,
  },
}));

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
  const [note,setNote] = useState("");
  const [entranceDate,setEntranceDate] = useState("");
  
  const entry = new Date().toLocaleString();
  
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
          case 'note':
              setNote(e.target.value);
              break;
          case 'entranceDate':
              setEntranceDate(e.target.value);
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
  
      const newValue = {matter_id:matterId, staff_id:staffId, occupation_id:occupationId, position:position, interview_location:interviewLocation, interview_date:interviewDate, note:note, entrance_date:entranceDate, entry_at:entry}
  
      axios
          .post('/api/referenceadd', newValue)
          .then(response => {
              console.log(response.data);
              window.alert("追加されました")
          })
          .catch(() => {
              console.log('submit error');
              window.alert("追加できませんでした")
          });
  }
  
  const clear = () => {
      setMatterId("")
      setStaffId("")
      setOccupationId("")
      setPosition("")
      setInterviewLocation("")
      setInterviewDate("")
      setNote("")
      setEntranceDate("")
  }
  
  const classes = useStyles();
  

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
        <DialogTitle id="alert-dialog-title">
            <Typography　style={{ fontSize: '20px' }}>引合登録</Typography>
        </DialogTitle>
        <DialogContent dividers >
        <Grid container spacing={2}>
        <Grid item xs={4}>
            <Typography>案件ID</Typography>
            <TextField variant="outlined" type="number" name="matterId" value={matterId} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>スタッフID</Typography>
            <TextField variant="outlined" type="number" name="staffId" value={staffId} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>職種</Typography>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>選択してください</InputLabel>
            <Select name="occupationId" value={occupationId} onChange={handleChange} label="選択してください">
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
            <Typography>ポジション</Typography>
            <TextField variant="outlined" name="position" value={position} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>面談場所</Typography>
            <TextField variant="outlined" name="interviewLocation" value={interviewLocation} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>面談日</Typography>
            <TextField type="date" variant="outlined" name="interviewDate" value={interviewDate} onChange={handleChange} className={classes.formControl}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>備考欄</Typography>
            <TextField variant="outlined" name="note" value={note} onChange={handleChange}/>
        </Grid>
        <Grid item xs={4}>
            <Typography>入場日</Typography>
            <TextField　type="date" variant="outlined" name="entranceDate" value={entranceDate} onChange={handleChange} className={classes.formControl}/>
        </Grid>
        <Grid item xs={2}>
            <Button variant="contained" onClick={add}>追加</Button>
        </Grid>
        <Grid item xs={2}>
            <Button variant="contained" onClick={clear}>クリア</Button>
        </Grid>
        </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}