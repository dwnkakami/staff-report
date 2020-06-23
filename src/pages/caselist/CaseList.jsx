import React from 'react';
import './CaseList.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
// import axios from 'axios';
// import  from '../server/modules';

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

const CaseList = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const [posts, setPosts] = useState([]);

  // useEffect(() => getCaseData() );

  // const getCaseData = () => {
  //   if (posts.length === 0) {
  //     axios
  //       .get('/api/caselist/')
  //       .then(response => {
  //         setPosts(response.data);
  //       //   console.log([response.data]);
  //       })
  //       .catch(() => {
  //         console.log('失敗しました');
  //       })
  //   }
  // }


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        案件リスト
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth='lg'>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          案件詳細
        </DialogTitle>
        <DialogContent dividers >
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
              </table>
              <table>
              <tr>
                <th>募集人数</th>
                <th>案件開始日</th>
                <th>案件終了日</th>
              </tr>
              <tr>
                <td>データ</td>
                <td>データ</td>
                <td>データ</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>業務内容</th>
              </tr>
              <tr>
                <td class='wide-td1'>データ</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>スキルレベル</th>
                <th>備考欄</th>
              </tr>
              <tr>
                <td class='wide-td2'>データ</td>
                <td>データ</td>
              </tr>
            </table>
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CaseList