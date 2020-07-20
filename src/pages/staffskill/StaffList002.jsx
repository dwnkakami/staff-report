import React from 'react';
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
// import StaffList002 from './StaffList002';
import Staffskillbotton from './Staffskillbotton';

const styles = (theme) => ({
  root: {
    margin: 5,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[50],
    background: theme.palette.grey[800],
  },
});
const useStyles = makeStyles((theme) => ({

  Button4: {
    color: '#000000',
  },
  ButtonGroup: {
    margin: '10px 200px 10px 0px',
    borderRadius: '0px 0px 0px 0px',
  },
  Button5: {
    margin: '20px',
  },
  Paper: {
    padding: theme.spacing(7),
    margin: '16px',
    width: '95%',
    borderRadius: '12px 12px 12px 12px',
  },
  Content: {
    height: theme.spacing(60),
  },
}));
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other} >
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
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.Button5}>
        スタッフ経歴
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="max-width-dialog-title" open={open} maxWidth="lg" fullWidth={true}>
        <DialogTitle id="max-width-dialog-title" onClose={handleClose}>
        <Typography variant="h3" className={classes.title}>スタッフ詳細</Typography>       
         </DialogTitle>
        <DialogContent dividers className={classes.Content}>
        <Typography variant="h6">テスト太郎</Typography>
        <div>
        <Staffskillbotton />
        </div>
      <div>
      </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus  className={classes.Button4}>
          <AddIcon />追加
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
