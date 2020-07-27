import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { getThemeProps } from '@material-ui/styles';

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
  width: '1200px',
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
    background:'#DCDCDC',
    height:35,
    fontweight: 'bold',
  },
  List: {
    background:'#ffffff',
    height:35,
  }
}));

const StaffList005_figure = (props) => {
  const classes = useStyles();

  const [user, setUser] = useState([]);

  useEffect(() => getCasedetailData(),[]);

  const getCasedetailData = () => {
    if(user.length === 0) {
      axios
        .get(`/api/stafflist005/${props.id}`)
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
                    <ListItemText className={classes.content1_1} variant="outlimed">{props.id}</ListItemText>
                    </ListItem>
                 <ListItem className={classes.List_color}>
                   <ListItemText primary='氏名'/>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List}>
                   <ListItemText>{props.name}</ListItemText>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List_color}>
                   <ListItemText primary="役職"/>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List}>
                 <ListItemText>{props.position}</ListItemText>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List_color}>
                   <ListItemText primary="生年月日"/>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List}>
                 <ListItemText key={data.スタッフ番号}>{data.誕生日}</ListItemText>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List_color}>
                   <ListItemText primary="性別"/>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List}>
                 <ListItemText key={data.スタッフ番号}>{data.性別}</ListItemText>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List_color}>
                   <ListItemText primary="連絡先"/>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List}>
                 <ListItemText key={data.スタッフ番号}>{data.連絡先}</ListItemText>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List_color}>
                   <ListItemText primary="現配属案件"/>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List}>
                   <ListItemText primary=""/>
                 </ListItem>
                 <Divider />
             </List>
             ))}
         </div>
         <div className={classes.content2}>
            {user.map((data) => (
             <List >
                 <Divider />
                 <ListItem className={classes.List_color}>
                   <ListItemText　primary="雇用形態"/>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List}>
                 <ListItemText key={data.スタッフ番号}>{data.雇用形態}</ListItemText>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List_color}>
                   <ListItemText primary="所属会社"/>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List}>
                 <ListItemText key={data.スタッフ番号}>{data.所属会社}</ListItemText>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List_color}>
                   <ListItemText primary="入社日"/>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List}>
                 <ListItemText key={data.スタッフ番号}>{data.入社日}</ListItemText>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List_color}>
                   <ListItemText primary="年齢"/>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List}>
                 <ListItemText key={data.スタッフ番号}>{data.年齢}</ListItemText>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List_color}>
                   <ListItemText primary="最終学歴"/>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List}>
                 <ListItemText key={data.スタッフ番号}>{data.最終学歴}</ListItemText>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List_color}>
                   <ListItemText primary="最寄駅"/>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List}>
                 <ListItemText key={data.スタッフ番号}>{data.最寄駅}</ListItemText>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List_color}>
                   <ListItemText primary="現案件終了予定日"/>
                 </ListItem>
                 <Divider />
                 <ListItem className={classes.List}>
                   <ListItemText>{props.matter_end}</ListItemText>
                 </ListItem>
                 <Divider />
             </List>
            ))}
         </div>
       </Paper>
     </div>
    </div>
  );
}
   export default StaffList005_figure;