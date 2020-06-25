import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

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
    padding: theme.spacing(0),
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

const StaffList005_figure = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.Paper}>
      <div className={classes.content1}>
            <List>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary="スタッフ番号"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText>{props.contents}</ListItemText>
                </ListItem>
                <Divider />
                <ListItem className={classes.List_color}>
                  <ListItemText primary='氏名'/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="テスト　太郎"/>
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
