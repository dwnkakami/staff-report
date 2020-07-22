import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { FormatClear } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
     },
    '& > *': {
      margin: theme.spacing(1),
     },
     container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  },
}));

const ReferenceAdd = () => {
 const classes = useStyles();

 const [referenceId, setReferenceId] = useState("");
 const [matterId, setMatterId] = useState("");
 const [staffId, setStaffId] = useState("");
 const [occupationId, setOccupationId] = useState("");
 const [potision, setPotision] = useState("");
 const [interviewLocation, setInterviewLocation] = useState("");
 const [interviewDate, setInterviewDate] = useState("");
 const [note, setNote] = useState("");
 const [entranceDate, setEntranceDate] = useState("");
 const [entryAt, setEntryAt] = useState("");

 const handleChange = e => {
   //eventが起こったnameごとに値を処理する
     switch(e.target.name){
         case 'referenceId':
             setReferenceId(e.target.value);
             break;
         case 'matterId':
             setMatterId(e.target.value);
             break;
         case 'staffId':
             setStaffId(e.target.value);
             break;
         case 'occupationId':
             setOccupationId(e.target.value);
             break;
         case 'potision':
             setPotision(e.target.value);
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
         case 'entryAt':
             setEntryAt(e.target.value);
             break;
         default:
             console.log('text not found');
     }
 };

 const getReferenceAddData = () => {
    const newValue = {id:referenceId,matter_id:matterId,staff_id:staffId,occupation_id:occupationId,potision:potision,interview_location:interviewLocation,interview_date:interviewDate,note:note,entrance_date:entranceDate,entry_at:entryAt};
      axios
        .post('/api/referenceadd', newValue)
        .then(response => {
          console.log(response.data);
        })
        .catch(() => {
          console.log('ReferenceAdd error');
        })
 };

 return(
  <form className={classes.root} noValidate autoComplete="off">
   <div>
   <TextField
          type="text"
          name="referenceId"
          value={referenceId}
          onChange={handleChange}
          label=""
          id="outlined-size-small"
          defaultValue="引合番号"
          variant="outlined"
          size="small"
        />    
   <TextField
          type="text"
          name="matterId"
          value={matterId}
          onChange={handleChange}
          label=""
          id="outlined-size-small"
          defaultValue="案件番号"
          variant="outlined"
          size="small"
        />    
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    {/* <input type="number" name="referenceId" value={referenceId} onChange={handleChange} /> */}
    {/* <input type="number" name="matterId" value={matterId} onChange={handleChange} /> */}
    <input type="number" name="staffId" value={staffId} onChange={handleChange} />
    <input type="number" name="occupationId" value={occupationId} onChange={handleChange} />
    <input type="text" name="potision" value={potision} onChange={handleChange} />
    <input type="text" name="interviewLocation" value={interviewLocation} onChange={handleChange} />
    <input type="text" name="interviewDate" value={interviewDate} onChange={handleChange} />
    <input type="text" name="note" value={note} onChange={handleChange} />
    <input type="text" name="entranceDate" value={entranceDate} onChange={handleChange} />
    <input type="text" name="entryAt" value={entryAt} onChange={handleChange} />
   </div>
   <div　className={classes.root}>
   <Button variant="contained" onClick = {getReferenceAddData}>登録</Button>
   <Button variant="contained" onClick = {FormatClear}>クリア</Button>
   </div>
  </form>
 );
};

export default ReferenceAdd;
