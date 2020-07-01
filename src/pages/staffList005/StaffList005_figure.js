import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import { useState , useEffect } from 'react';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(0),
    },
  },
  Paper: {
    width: '100%',
    borderRadius: '0px 0px 0px 0px',
},
  content1: {
    float: 'left',
    width:'50%',
    color: '#000000',
  },
  content2: {
    float: 'left',
    width:'50%',
    color: '#000000',
  },
  List_color: {
    background:'#6699ff',
    height:35,
  },
  List: {
    background:'#ffffff',
    height:35,
  }
}));
const StaffList005_figure = () => {
  const classes = useStyles();
  const [user, setUser] = useState([]);
  useEffect(() => getData());
  const getData = () => {
    if(user.length === 0) {
      axios
        .get('/api/stafflist005/3')
        .then(response => {
          setUser(response.data);
        })
         .catch(() => {
          console.log('connected error');
        })
    }
  }
  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.Paper}>
        <div className={classes.content1}>
          {user.map((data) => (
            <List>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary="スタッフ番号"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText className={classes.content2_1} variant="outlimed" key={data.スタッフ番号}>{data.スタッフ番号}</ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary='氏名'/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                <ListItemText className={classes.content2_1} variant="outlimed" key={data.スタッフ番号}>{data.スタッフ名}</ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary="役職"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="一般職"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary="生年月日"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText　primary="1996/4/1"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary="性別"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="男"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary="連絡先"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="090-1234-5678"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary="現配属案件"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="〇〇〇〇株式会社ABC開発案件"/>
                </ListItem>
                <Divider />
            </List>
          ))}
        </div>
        <div className={classes.content2}>
            <List >
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText　primary="雇用形態"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="正社員"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary="所属会社"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="データウェアネットワーク株式会社"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary="入社日"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="2018/4/1"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary="年齢"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText　primary="22"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary="最終学歴"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="〇〇大学"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary="最寄り駅"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="新小岩駅"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary="現案件終了予定日"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="2019/3/31"/>
                </ListItem>
                <Divider />
            </List>
        </div>
      </Paper>
    </div>
  );
  }
  export default StaffList005_figure;


// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Dialog from '@material-ui/core/Dialog';
// import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import MuiDialogContent from '@material-ui/core/DialogContent';
// import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import { makeStyles } from '@material-ui/core/styles';
// import { useState , useEffect } from 'react';
// import axios from 'axios';


// const styles = (theme) => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(2),
//   },
//   closeButton: {
//     position: 'absolute',
//     right: theme.spacing(1),
//     top: theme.spacing(1),
//     color: theme.palette.grey[500],
//   },
// });
//   const useStyles = makeStyles((theme) => ({
//     root: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       '& > *': {
//         margin: theme.spacing(0),
//       },
//     },
//       Paper: {
//     width: '100%',
//     borderRadius: '0px 0px 0px 0px',
// },
//   content1: {
//     float: 'left',
//     width:'50%',
//     color: '#000000',
//   },
//   content2: {
//     float: 'left',
//     width:'50%',
//     color: '#000000',
//   },
//   List_color: {
//     background:'#6699ff',
//     height:35,
//   },
//   List: {
//     background:'#ffffff',
//     height:35,
//   }
// }));

// const StaffList005_figure = () => {
//   const classes = useStyles();


// const DialogTitle = withStyles(styles)((props) => {
//   const { children, classes, onClose, ...other } = props;
//   return (
//     <MuiDialogTitle disableTypography className={classes.root} {...other}>
//       <Typography variant="h6">{children}</Typography>
//       {onClose ? (
//         <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </MuiDialogTitle>
//   );
// });

// const DialogContent = withStyles((theme) => ({
//   root: {
//     padding: theme.spacing(2),
//   },
// }))(MuiDialogContent);


//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const [user, setUser] = useState([]);

//   useEffect(() => getCasedetailData());

//   const getCasedetailData = () => {
//     if(user.length === 0) {
//       axios
//         .get('/api/stafflist005/1')
//         .then(response => {
//           setUser(response.data);
//         })
//          .catch(() => {
//           console.log('connected error');
//         })
//     }
//   }

//   return (
//     <div>
//       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//         スタッフ情報
//       </Button>
//       <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
//         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
//           スタッフ情報
//         </DialogTitle>
//         <DialogContent dividers>

//        <div className={classes.root}>
//        <Paper variant="outlined" className={classes.Paper}>
//        <div className={classes.content1}>
//          {user.map((data) => (
//              <List>
//                  <Divider />
//                  <ListItem className={classes.List_color}>
//                    <ListItemText primary="スタッフ番号"/>
//                  </ListItem>
//                  <Divider />
//                     <ListItem className={classes.List}>
//                     <ListItemText className={classes.content1_1} variant="outlimed" key={data.スタッフ番号}>{data.スタッフ番号}</ListItemText>
//                     </ListItem>
//                  <ListItem className={classes.List_color}>
//                    <ListItemText primary='氏名'/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List}>
//                    <ListItemText key={data.スタッフ番号}>{data.スタッフ名}</ListItemText>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List_color}>
//                    <ListItemText primary="役職"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List}>
//                    <ListItemText primary="一般職"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List_color}>
//                    <ListItemText primary="生年月日"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List}>
//                    <ListItemText　primary="1996/4/1"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List_color}>
//                    <ListItemText primary="性別"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List}>
//                    <ListItemText primary="男"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List_color}>
//                    <ListItemText primary="連絡先"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List}>
//                    <ListItemText primary="090-1234-5678"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List_color}>
//                    <ListItemText primary="現配属案件"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List}>
//                    <ListItemText primary="〇〇〇〇株式会社ABC開発案件"/>
//                  </ListItem>
//                  <Divider />
//              </List>
//              ))}
//          </div>
//          <div className={classes.content2}>

//              <List >
//                  <Divider />
//                  <ListItem className={classes.List_color}>
//                    <ListItemText　primary="雇用形態"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List}>
//                    <ListItemText primary="正社員"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List_color}>
//                    <ListItemText primary="所属会社"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List}>
//                    <ListItemText primary="データウェアネットワーク株式会社"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List_color}>
//                    <ListItemText primary="入社日"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List}>
//                    <ListItemText primary="2018/4/1"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List_color}>
//                    <ListItemText primary="年齢"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List}>
//                    <ListItemText　primary="22"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List_color}>
//                    <ListItemText primary="最終学歴"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List}>
//                    <ListItemText primary="〇〇大学"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List_color}>
//                    <ListItemText primary="最寄り駅"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List}>
//                    <ListItemText primary="新小岩駅"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List_color}>
//                    <ListItemText primary="現案件終了予定日"/>
//                  </ListItem>
//                  <Divider />
//                  <ListItem className={classes.List}>
//                    <ListItemText primary="2019/3/31"/>
//                  </ListItem>
//                  <Divider />
//              </List>
//          </div>
//        </Paper>
//      </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }
//    export default StaffList005_figure;

