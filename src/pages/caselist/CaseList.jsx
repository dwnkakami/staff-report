import React, { useState,useEffect } from 'react';
import './CaseList.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

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
  const [posts, setPosts] = useState([]);

  useEffect(() => getCaseData());

  const getCaseData = () => {
    if (posts.length === 0) {
      axios
        .get('/api/caselist/')
        .then(response => {
          setPosts([response.data]);
        //   console.log([response.data]);
        })
        .catch(() => {
          console.log('失敗しました');
        })
    }
  }

  const getData = posts.filter((data) => {
    return data.id === 1 ;
  });

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
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth='lg'>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          案件詳細
        </DialogTitle>
        <DialogContent dividers >
        {getData.map((data) => (
          <Typography gutterBottom key={data.id}>
            <table>
              <tr>
                <th>案件名</th>
                <th>案件保有会社</th>
              </tr>
              <tr>
                <td>{data.name}</td>
                <td>データ</td>
              </tr>
              <tr>
                <th>依頼単価</th>
                <th>勤務地</th>
              </tr>
              <tr>
                <td>{data.unit_cost}</td>
                <td>{data.workplace}</td>
              </tr>
              </table>
              <table>
              <tr>
                <th>募集人数</th>
                <th>案件開始日</th>
                <th>案件終了日</th>
              </tr>
              <tr>
                <td>{data.number_of_persons}</td>
                <td>{data.start}</td>
                <td>{data.end}</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>業務内容</th>
              </tr>
              <tr>
                <td class='wide-td1'>{data.business_content}</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>スキルレベル</th>
                <th>備考欄</th>
              </tr>
              <tr>
                <td class='wide-td2'>{data.skill_level_column}</td>
                <td>{data.note}</td>
              </tr>
            </table>
          </Typography>
        ))}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CaseList