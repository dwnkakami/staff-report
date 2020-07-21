import React from 'react';
import './CaseDetail.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { useState , useEffect } from 'react';
import axios from 'axios';

import '../CaseList';

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

export default function CaseDetail (props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [user, setUser] = useState([]);

  useEffect(() => getCasedetailData());

  const getCasedetailData = () => {
    if(user.length === 0) {
      axios
        .get('/api/caselist/1')
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
      <Button variant="outlined" color="" onClick={handleClickOpen}>
        案件詳細
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth='lg'>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            案件詳細
          </DialogTitle>
        <DialogContent dividers>
          {user.map((data) => (
          <Typography gutterBottom key={props.caseid}>
            <table>
              <tr>
                <th>案件名</th>
                <th>案件保有会社</th>
              </tr>
              <tr>
              <td>{data.name}</td>
                <td>{data.customer_name}</td>
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
                <td>{data.matter_start}</td>
                <td>{data.matter_end}</td>
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
                <th>スキル1</th>
                <th>スキル2</th>
                <th>スキル3</th>
              </tr>
              <tr>
                <td>{data.skill1}</td>
                <td>{data.skill2}</td>
                <td>{data.skill3}</td>
              </tr>
            </table>
            <table>
              <tr>
                <th>必須スキル</th>
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