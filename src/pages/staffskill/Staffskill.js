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
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AddIcon from '@material-ui/icons/Add';
import Skill from './Staffskill2';
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
  Button: {
    background:'rgb(120,144,156)',
    borderRadius: '0px 0px 0px 0px',
  },
  Button2: {
    background:'rgb(120,144,156)',
    color: '#FFFFFF',
    borderRadius: '0px 0px 0px 0px',
    top:12,
    float: 'right',
  },
  Button3: {
    background:'rgb(120,144,156)',
    color: '#FFFFFF',
    borderRadius: '0px 0px 0px 0px',
    top: 12,
    float: 'right',
  },
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
  const [add, setAdd] = ([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = () => {
    setAdd('/StaffList003_figure');
  };
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className={classes.Button5}>
        スタッフ経歴
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="max-width-dialog-title" open={open} maxWidth="lg">
        <DialogTitle id="max-width-dialog-title" onClose={handleClose}>
        <Typography variant="h3" className={classes.title}>スタッフ詳細</Typography>        </DialogTitle>
        <DialogContent dividers>
        <Typography variant="h6">テスト太郎</Typography>
        <div>
        <ButtonGroup className={classes.ButtonGroup}　size="small" variant="contained" aria-label="contained primary button group">
        <Button className={classes.Button}>スキル</Button>
        <Button className={classes.Button}>経歴</Button>
        <Button className={classes.Button}>キャリアパス</Button>
        <Button className={classes.Button}>スタッフ情報</Button>
      </ButtonGroup>
      <Button variant="contained" size="small"　className={classes.Button2}>スキルシート出力</Button>
      <Button variant="contained" size="small" className={classes.Button3}>引合登録</Button>
      </div>
      <div>
      <Skill />
      </div>
      <div>
      </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleChange} className={classes.Button4}>
          <AddIcon />追加
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
