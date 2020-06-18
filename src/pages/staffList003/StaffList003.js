import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

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
    top: theme.spacing(3.8),
  },
  Button3: {
    background:'rgb(120,144,156)',
    float: 'right',
    top: theme.spacing(3.8),
    color: '#ffffff',
    height: '30px',
  },
  Button4: {
    top: theme.spacing(10),
    right: theme.spacing(5),
    // float: 'bottom',
    color: '#000000',
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
  figure: {
    background: '#ffffff',
    color: '#000000',
    
  },
  figure2:{
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
      <div>
      <Button variant="contained"　className={classes.Button2}>スキルシート出力</Button>
      <Button variant="contained"　className={classes.Button3}>引合登録</Button>
      </div>
      <Button className={classes.Button4}><AddIcon />追加</Button>
      <div>
      <ButtonGroup className={classes.ButtonGroup}　size="small" variant="contained" aria-label="contained primary button group">
        <Button className={classes.Button}>スキル</Button>
        <Button className={classes.Button}>経歴</Button>
        <Button className={classes.Button}>キャリアパス</Button>
        <Button className={classes.Button}>スタッフ情報</Button>
      </ButtonGroup>
      </div>
      {/* <div>
        <Paper variant="outlined" square className={classes.figure}>
            <Typography variant="h2">1</Typography>
        </Paper>
        <Paper variant="outlined" square className={classes.figure2}>
            <Typography variant="h4">期間</Typography>
        </Paper>
        </div> */}

      </Paper>
    </div>
  );
  }
