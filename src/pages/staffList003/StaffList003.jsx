import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios';
import { useEffect } from 'react';
import StaffList003_Button from './StaffList003_Button';
import StaffList001 from '../stafflist001/StaffList001';
import StaffListButton from './ListButton';
import ListButton from './ListButton';

// const styles = (theme) => ({
//   root: {
//     margin: 5,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[50],
//     background: theme.palette.grey[800],
//   },
// });

const useStyles = makeStyles((theme) => ({
  Button1: {
    color: '#000000',
  },
  Button2: {
    margin: '20px',
  },
  dialog: {
    height: theme.spacing(60),
  },
  title: {
    color: '#000000',
  },
  name: {
    color: '#000000',
  }
}));

// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, onClick, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other} >
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
  const classes = useStyles();
  const [user, setUser] = useState([]);
  // const [open, setOpen] = React.useState(false);

  useEffect(() => getData());

  const getData = () => {
    if(user.length === 0){
        axios
            .get('/api/stafflist003/3')
            .then(response => {
                setUser(response.data);
            })
            .catch(() => {
                console.log('connected error');
            })
}}

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };


  return (
    <div>
       {/* <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.Button2} >
         aaa
      </Button>  */}
      {/* <ListButton /> */}
      <Dialog   
      // onClose={handleClose} 
      // aria-labelledby="max-width-dialog-title"
      //  open={open} maxWidth="lg" fullWidth={true}
      >
        {/* <DialogTitle 
        id="max-width-dialog-title" 
        onClose={handleClose}
        > */}
          <Typography variant="h3" className={classes.title}>スタッフ詳細</Typography>
        {/* </DialogTitle>  */}
        <DialogContent dividers className={classes.dialog}>
        {user.map((data) => (
          <Typography variant="h5" className={classes.name} key={data.staff_id}>{data.staff_name}</Typography>
          ))}
        <div>
          <StaffList003_Button />
        </div>
      <div>
      </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus className={classes.Button1}>
          <AddIcon />追加
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



