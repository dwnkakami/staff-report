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
    margin: theme.spacing(1),
    bottom: theme.spacing(12),
    left: theme.spacing(74),
    background:'#000000',
  },
  icon: {
    color: '#ffffff',
  },

  Button: {
    background:'rgb(120,144,156)',
    // right: '50px',
  },
  ButtonGroup: {
    right: '200px',
  },
  Paper: {
    padding: theme.spacing(5),
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
    // top:theme.spacing(2),

  },
  content2: {
    float: 'left',
    width:'50%',
  },

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
      <ButtonGroup className={classes.ButtonGroup}　size="small" variant="contained" aria-label="contained primary button group">
        <Button className={classes.Button}>スキル</Button>
        <Button className={classes.Button}>経歴</Button>
        <Button className={classes.Button}>キャリアパス</Button>
        <Button className={classes.Button}>スタッフ情報</Button>
      </ButtonGroup>
      <div className={classes.content1}>
            <List >
                <ListItem>
                  <ListItemText　primary="スタッフ番号"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="0001"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary='氏名'/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="テスト　太郎"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="役職"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="一般職"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="生年月日"/>
                </ListItem>
                <ListItem>
                  <ListItemText　primary="1996/4/1"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="性別"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="男"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="連絡先"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="090-1234-5678"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="現配属案件"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="〇〇〇〇株式会社ABC開発案件"/>
                </ListItem>
            </List>
        </div>
        <div className={classes.content2}>
            <List >
                <ListItem>
                  <ListItemText　primary="雇用形態"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="正社員"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="所属会社"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="生年月日"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="性別"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="連絡先"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="現配属案件"/>
                </ListItem>
                <ListItem>
                  <ListItemText　primary="スタッフ番号"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="氏名"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="役職"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="生年月日"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="性別"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="連絡先"/>
                </ListItem>
                <ListItem>
                  <ListItemText primary="現配属案件"/>
                </ListItem>
            </List>
        </div>
      </Paper>
    </div>
  );
  }