import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import StaffList005_figure from './StaffList005_figure';
import StaffList003_map from '../staffList003/StaffList003_figure';
import StaffList002_2 from '../staffskill/StaffList002_2';
import { useState } from 'react';
import { getThemeProps } from '@material-ui/styles';

const styles = makeStyles((theme) => ({
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
    height: '40px',
    padding: '0px 20px 0px 20px',
  },
  Button2: {
    background:'rgb(120,144,156)',
    left: 25,
    marginRight: '25px',
    color: '#ffffff',
    borderRadius: '0px 0px 0px 0px',
    float: 'right',
  },
  Button3: {
    background:'rgb(120,144,156)',
    left: 5,
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
    margin: '20px 300px 10px 0px',
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

const DialogButton = (props) => {
  const classes = styles();
  const [staff, setStaff] = useState(<StaffList002_2 />);

  const handleClick = (selected) => {
    if(selected === 1){
      setStaff(<StaffList002_2 id={props.id} />)
    } else if(selected === 2){
      setStaff(<StaffList003_map id={props.id} />);
    } else if(selected === 3){
      setStaff('キャリアパス：データなし');
    } else {
      setStaff(<StaffList005_figure id={props.id} name={props.name} position={props.position} matter_end={props.matter_end} />);
    }
  };

  return (
    <div className={classes.root}>
        <div widt='600px'>
          <ButtonGroup className={classes.ButtonGroup}　size="small" variant="contained" aria-label="contained primary button group">
              <Button className={classes.Button} onClick={() => handleClick(1)}>スキル</Button>
              <Button className={classes.Button} onClick={() => handleClick(2)}>経歴</Button>
              <Button className={classes.Button} onClick={() => handleClick(3)}>キャリアパス</Button>
              <Button className={classes.Button} onClick={() => handleClick(4)}>スタッフ情報</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button variant="contained"　className={classes.Button2}>スキルシート出力</Button>
            <Button variant="contained"　className={classes.Button3}>引合登録</Button>
          </ButtonGroup>
        </div>
        <div>
          {staff}
        </div>
    </div>
  );
}
    export default DialogButton;