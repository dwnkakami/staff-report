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

// import './ReferenceUpdate.css';


const useStyles = makeStyles((theme) => ({
    formControl: {
      minWidth: 195,
    },
    contentsarea: {
      Width: "100%",
      height: "100%",
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
    updatearea: {
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

  const [referenceId,setReferenceId] = useState("");
  // const [matterId,setMatterId] = useState("");
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
  
  const updateAt = new Date().toLocaleString();
  
  const handleChange = e => {
      switch (e.target.name) {
          case 'referenceId':
              setReferenceId(e.target.value);
              break;
          // case 'matterId':
          //     setMatterId(e.target.value);
          //     break;
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

  const fix = () => {
  
    const updateValue = {id:referenceId, staff_id:staffId, occupation_id:occupationId, position:position, interview_location:interviewLocation, interview_date:interviewDate, interview_times:interviewTimes, note:note, entrance_date:entranceDate, update_at:updateAt, update_by:updateBy}
    
      axios
          .post('/api/referenceupdate', updateValue)
          .then(response => {
              console.log(response.data);
              window.alert("更新されました")
          })
          .catch(() => {
              console.log('submit error');
              window.alert("更新できませんでした")
          });
  }
  
  const clear = () => {
      setReferenceId("")
      // setMatterId("")
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
        引合更新
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth='md'
      >
        <DialogTitle id="alert-dialog-title" onClose={handleClose}>
            引合更新
        </DialogTitle>
        <DialogContent dividers >
        <Grid container spacing={2}>
      <div className={classes1.contentsarea}>
        <table>
        <tr>
        <th rowSpan="5" className={classes1.tablehead}>案件情報</th>
        <td className={classes1.tabledata}>
         <Grid item xs={4}>
            {/* <Typography>引合ID</Typography> */}
            <TextField label="引合ID" variant="outlined" type="number" name="referenceId" value={referenceId} onChange={handleChange} size="small" style={{background: "#FFFFFF"}}/>
         </Grid>
        </td>
        </tr>
        <tr>
        <td className={classes1.tabledata}>
         <Grid item xs={4}>
            {/* <Typography>スタッフID</Typography> */}
            <TextField label="スタッフID" variant="outlined" type="number" name="staffId" value={staffId} onChange={handleChange} size="small" style={{background: "#FFFFFF"}}/>
         </Grid>
        </td>
        </tr>
        <tr>
        <td className={classes1.tabledata}>
         <Grid item xs={4}>
            {/* <Typography>職種</Typography> */}
            <FormControl  variant="outlined" className={classes1.formControl}  size="small" style={{background: "#FFFFFF"}}>
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
            <TextField label="ポジション" variant="outlined" name="position" value={position} onChange={handleChange} size="small" style={{background: "#FFFFFF"}}/>
         </Grid>
        </td>
        </tr>
        <tr>
        <td className={classes1.tabledata}>
         <Grid item xs={4}>
            {/* <Typography>入場日</Typography> */}
            <TextField label="入場日"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        type="date" name="entranceDate" value={entranceDate} onChange={handleChange} className={classes1.formControl} size="small" style={{background: "#FFFFFF"}}/>
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
            <TextField label="面談場所" variant="outlined" name="interviewLocation" value={interviewLocation} onChange={handleChange} size="small" style={{background: "#FFFFFF"}}/>
         </Grid>
        </td>
        </tr>
        <tr>
        <td className={classes1.tabledata}>
         <Grid item xs={4}>
            {/* <Typography>面談回数</Typography> */}
            <TextField label="面談回数" variant="outlined" name="interviewTimes" value={interviewTimes} onChange={handleChange} size="small" style={{background: "#FFFFFF"}}/>
         </Grid>
        </td>
        </tr>
        <tr>
        <td className={classes1.tabledata}>
         <Grid item xs={4}>
            {/* <Typography>面談日</Typography> */}
            <TextField label="面談日"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        type="date" name="interviewDate" value={interviewDate} onChange={handleChange} className={classes1.formControl} size="small" style={{background: "#FFFFFF"}}/>
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
            <TextField label="備考欄" variant="outlined" name="note" value={note} onChange={handleChange} style={{background: "#FFFFFF"}}/>
         </Grid>
        </td>
        </tr>
        </table>
        <Grid item xs={8}>
            {/* <Typography>更新者ID</Typography> */}
            <TextField label="更新者ID" variant="outlined" type="number" name="updateBy" value={updateBy} className={classes1.updatearea} onChange={handleChange} size="small"/>
        {/* </Grid>
            <Grid item xs={4}> */}
                <Button variant="contained" className={classes1.button1} onClick={clear}>クリア</Button>
                <Button variant="contained" className={classes1.button2} onClick={fix}>更新</Button>
            </Grid>
      </div>
        </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}