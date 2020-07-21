import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DialogButton from './DialogButton';
// import classes from '*.module.css';
// import StaffList005_figure from './StaffList005_figure';

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
    height: theme.spacing(95),
  },
}))(MuiDialogContent);

const StaffList005 = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        スタッフ詳細
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth="lg" fullWidth={true}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          スタッフ情報
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h5">{props.name}</Typography>
          <div>
            <DialogButton id={props.id} name={props.name} position={props.position} matter_end={props.matter_end} />
          </div>
          {/* <div>
            <StaffList005_figure />
          </div> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
  export default StaffList005;