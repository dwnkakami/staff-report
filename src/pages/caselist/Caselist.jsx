import React from 'react';
import './company2.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

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

export default function Caselist () {
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
        案件リスト
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          案件詳細
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <table>
              <tr>
                <th>案件名</th>
                <th>案件保有会社</th>
              </tr>
              <tr>
                <td>データ</td>
                <td>データ</td>
              </tr>
              <tr>
                <th>依頼単価</th>
                <th>勤務地</th>
              </tr>
              <tr>
                <td>データ</td>
                <td>データ</td>
              </tr>
              <tr>
                <th>募集人数</th>
                <th>案件開始日</th>
              </tr>
              <tr>
                <td>データ</td>
                <td>データ</td>
              </tr>
            </table>
            <table>
              <tr class='wide-th'>
                <th>業務内容</th>
              </tr>
              <tr>
                <td class='wide-td'>データ</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>スキルレベル</th>
                <th>備考欄</th>
              </tr>
              <tr>
                <td>データ</td>
                <td>データ</td>
              </tr>
            </table>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}