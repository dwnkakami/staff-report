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

      </Paper>
    </div>
  );
  }