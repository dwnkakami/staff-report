import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import StaffList003_figure from './StaffList003_figure';
import { render } from 'react-dom';

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
    bottom: theme.spacing(16),
    left: theme.spacing(5),
    background:'#000000',
    float: 'right',
  },
  icon: {
    color: '#ffffff',
  },
  Button: {
    background:'rgb(120,144,156)',
    borderRadius: '0px 0px 0px 0px',
  },
  Button2: {
    background:'rgb(120,144,156)',
    left: 45,
    color: '#ffffff',
    borderRadius: '0px 0px 0px 0px',
    float: 'right',
  },
  Button3: {
    background:'rgb(120,144,156)',
    left: 45,
    color: '#ffffff',
    borderRadius: '0px 0px 0px 0px',
    float: 'right',
  },
  Button4: {
    top: theme.spacing(2),
    right: theme.spacing(6),
    color: '#000000',
    height: '30px',
  },
  ButtonGroup: {
    margin: '10px 200px 10px 0px',
    borderRadius: '0px 0px 0px 0px',
  },
  Paper: {
    padding: theme.spacing(7),
    margin: '16px',
    width: '95%',
    borderRadius: '12px 12px 12px 12px',
  },
  title: {
    margin: '10px 0px 10px 0px',
  },
}));

const StaffList003 = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper variant="outlined" className={classes.Paper}>
      <Typography variant="h2" className={classes.title}>スタッフ詳細</Typography>
      <Typography variant="h4">テスト太郎</Typography>
      <IconButton aria-label="delete" className={classes.margin}>
      <CloseIcon className={classes.icon} />
      </IconButton>
      <div>
      <ButtonGroup className={classes.ButtonGroup}　size="small" variant="contained" aria-label="contained primary button group">
        <Button className={classes.Button}>スキル</Button>
        <Button className={classes.Button}>経歴</Button>
        <Button className={classes.Button}>キャリアパス</Button>
        <Button className={classes.Button}>スタッフ情報</Button>
      </ButtonGroup>
      <Button variant="contained"　className={classes.Button2}>スキルシート出力</Button>
      <Button variant="contained"　className={classes.Button3}>引合登録</Button>
      </div>
      <div>
        <StaffList003_figure />
      </div>
      <div>
      <StaffList003_figure />
      </div>
      <div>
        <Button className={classes.Button4}><AddIcon />追加</Button>
      </div>
      </Paper>
    </div>
  );
}

  export default StaffList003;
