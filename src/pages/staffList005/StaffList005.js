import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
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
      margin: theme.spacing(1),
    },
  },
  margin: {
    // margin: theme.spacing(1),
    bottom: theme.spacing(14),
    left: theme.spacing(6),
    background:'#000000',
    float: 'right',
  },
  icon: {
    color: '#ffffff',
  },
  Button: {
    background:'rgb(120,144,156)',
    float: 'left',
  },
  Button2: {
    background:'rgb(120,144,156)',
    float: 'right',
    color: '#ffffff',
    height: '30px',
    left: theme.spacing(6),
  },
  Button3: {
    background:'rgb(120,144,156)',
    float: 'right',
    color: '#ffffff',
    height: '30px',
    // bottom: theme.spacing(3),
    // right: theme.spacing(1),
  },
  ButtonGroup: {
    right: '200px',
  },
  Paper: {
    padding: theme.spacing(7),
    margin: '16px',
    width: '95%',
    borderRadius: '12px 12px 12px 12px',
},
demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  content1: {
    float: 'left',
    width:'50%',
    color: '#000000',
    top: theme.spacing(7),
  },
  content2: {
    float: 'left',
    width:'50%',
    color: '#000000',
  
  },
  List: {
    background:'#6699ff'
  }
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.Paper}>
      <Typography variant="h2">スタッフ詳細</Typography>
      <Typography variant="h4">テスト太郎</Typography>
      <IconButton aria-label="delete" className={classes.margin}>
      <CloseIcon className={classes.icon} />
      </IconButton>
      <Button variant="contained"　className={classes.Button2}>スキルシート出力</Button>
      <Button variant="contained"　className={classes.Button3}>引合登録</Button>
      <div>
      <ButtonGroup className={classes.ButtonGroup}　size="small" variant="contained" aria-label="contained primary button group">
        <Button className={classes.Button}>スキル</Button>
        <Button className={classes.Button}>経歴</Button>
        <Button className={classes.Button}>キャリアパス</Button>
        <Button className={classes.Button}>スタッフ情報</Button>
      </ButtonGroup>
      </div>
      <div className={classes.content1}>
            <List >
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="スタッフ番号"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="0001"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary='氏名'/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="テスト　太郎"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="役職"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="一般職"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="生年月日"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText　primary="1996/4/1"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="性別"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="男"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="連絡先"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="090-1234-5678"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="現配属案件"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="〇〇〇〇株式会社ABC開発案件"/>
                </ListItem>
                <Divider />
            </List>
        </div>
        <div className={classes.content2}>
            <List >
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText　primary="雇用形態"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="正社員"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="所属会社"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="データウェアネットワーク株式会社"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="入社日"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="2018/4/1"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="年齢"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText　primary="22"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="最終学歴"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="〇〇大学"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="最寄り駅"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="新小岩駅"/>
                </ListItem>
                <Divider />
                <ListItem className={classes.List}>
                  <ListItemText primary="現案件終了予定日"/>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="2019/3/31"/>
                </ListItem>
                <Divider />
            </List>
        </div>
      </Paper>
    </div>
  );
  }