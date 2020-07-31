import React from 'react';
import './ReferenceDetail.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Paper from '@material-ui/core/Paper';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { useState, useEffect } from 'react';
import axios from 'axios';
import'../referenceList/ReferenceList';

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

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: '0px 0px 0px 0px',
  },
}));

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

export default function ReferenceDetail(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [user, setUser] = useState([]);

  useEffect(() => { getReferenceData(); console.log("connected") },[]);
  
  const getReferenceData = () => {
    if (user.length === 0) {
      axios
        .get('/api/referencedetail/1')
        .then(response => {
          setUser(response.data);
        })
        .catch(() => {
          console.log('connected error');
        })
    }
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <MoreHorizIcon />
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth='lg'>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          引合詳細
          </DialogTitle>
        <DialogContent dividers >
        <Paper className={classes.paper} elevation={3}>
          <Typography gutterBottom>
              <table>
                <tr>
                  <th>案件名</th>
                  <th>スタッフ名</th>
                </tr>
                <tr>
                  <td>{props.name}</td>
                  <td>{props.staff_name}</td>
                </tr>
                </table>
              <table>
                <tr>
                  <th>職種名</th>
                  <th>ポジション詳細</th>
                  <th>入場日</th>
                </tr>
                <tr>
                  <td>{props.occupation_name}</td>
                  <td>{props.position}</td>
                  <tb>{props.entrance_date}～</tb>
                </tr>
              </table>
              <table>
                <tr>
                  <th>面談場所</th>
                  <th>面談日</th>
                  <th>面談回数</th>
                </tr>
                <tr>
                  <td>{props.interview_location}</td>
                  <td>{props.interview_date}</td>
                  <td>{props.interview_times}回</td>
                </tr>
              </table>
              <table>
                <tr>
                  <th>登録日時</th>
                  <th>更新日時</th>
                  <th>最終更新者</th>
                </tr>
                <tr>
                  <td>{props.entry_at}</td>
                  <tb>{props.update_at}</tb>
                  <tb></tb>
                </tr>
              </table>
              <table>
                <tr>
                  <th>備考欄</th>
                </tr>
                <tr>
                  <td class='wide-td1'>{props.skill_level_column}</td>
                </tr>
              </table>
          </Typography>
          </Paper>
        </DialogContent>
      </Dialog>
    </div>
  );
}