import React from 'react';
import './CaseDetail.css';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import { useState , useEffect } from 'react';
// import axios from 'axios';
import ReferenceAdd from '../referenceadd/ReferenceAdd';

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
  left: {
    width:100,
    float:'left',
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
      <Typography className={classes.left} variant="h6">{children} </Typography>
      <ReferenceAdd className={classes.left}></ReferenceAdd>
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
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const [user, setUser] = useState([]);

  // useEffect(() => { getCasedetailData(); console.log("connected") },[]);

  // const getCasedetailData = () => {
  //   if(user.length === 0) {
  //     axios
  //       .get(`/api/casedetail/${props.caseid}`)
  //       .then(response => {
  //         setUser(response.data);
  //       })
  //        .catch(() => {
  //         console.log('connected error');
  //       })
  //   }
  // }

  return (
    <div>
      <Button variant="outlined" color="" onClick={handleClickOpen}>
        案件詳細
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} maxWidth='lg'>
          <DialogTitle id="customized-dialog-title" onClose={handleClose} >
            案件詳細
          </DialogTitle>
        <DialogContent dividers >
        <Paper className={classes.paper} elevation={3}>
        {/* {user.map((data) => ( */}
          <Typography gutterBottom>
            <table>
              <tr style={{ background:　"#E0FFFF" }}>
                <th>案件名</th>
                <th>案件保有会社</th>
                <th>担当営業名</th>
              </tr>
              <tr>
                <td>{props.name}</td>
                <td>{props.customer_name}</td>
                <td>{props.user_name}</td>
              </tr>
              </table>
              <table>
              <tr style={{ background:　"#E0FFFF" }}>
                <th>依頼単価</th>
                <th>勤務地</th>
                <th>職種</th>
              </tr>
              <tr>
                <td>{props.unit_cost}</td>
                <td>{props.workplace}</td>
                <td>{props.occupation}</td>
              </tr>
              <tr style={{ background:　"#E0FFFF" }}>
                <th>募集人数</th>
                <th>案件開始日</th>
                <th>案件終了日</th>
              </tr>
              <tr>
                <td>{props.number_of_persons}人</td>
                <td>{props.matter_start}</td>
                <td>{props.matter_end}</td>
              </tr>
            </table>
            <table>
              <tr style={{ background:　"#E0FFFF" }}>
                <th>業務内容</th>
              </tr>
              <tr>
                <td class='wide-td1'>{props.business_content}</td>
              </tr>
            </table>
            <table>
              <tr style={{ background:　"#E0FFFF" }}>
                <th>スキル1</th>
                <th>スキル2</th>
                <th>スキル3</th>
              </tr>
              <tr>
                <td>{props.skill1}</td>
                <td>{props.skill2}</td>
                <td>{props.skill3}</td>
              </tr>
            </table>
            <table>
              <tr style={{ background:　"#E0FFFF" }}>
                <th>必須スキル</th>
                <th>備考欄</th>
              </tr>
              <tr>
                <td class='wide-td2'>{props.skill_level_column}</td>
                <td>{props.note}</td>
              </tr>
            </table>
          </Typography>
        {/* ))} */}
        </Paper>
        </DialogContent>
      </Dialog>
    </div>
  );
}