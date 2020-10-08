import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import StaffInformation from './StaffInformation';
import StaffList003_map from '../staffcareer/StaffCareer';
import StaffList002_map from '../staffskill/StaffList002';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  Button: {
    // background:'rgb(120,144,156)',
    borderRadius: '0px 0px 0px 0px',
  },
  ButtonGroup: {
    margin: '2px 0px 7px 0px',
    borderRadius: '0px 0px 0px 0px',
  },
  ButtonGroup2: {
    margin: '2px 0px 7px 0px',
    borderRadius: '0px 0px 0px 0px',
    float: 'right',
  },
  Button2: {
    // background:'rgb(120,144,156)',
    // color: '#ffffff',
    borderRadius: '0px 0px 0px 0px',
  },
}));


const DialogButton = (props) => {
  const classes = useStyles();
  const [staff, setStaff] = useState(<StaffList002_map id={props.id}/>);

  const handleClick = (selected) => {
    if(selected === 1){
      setStaff(<StaffList002_map id={props.id}/>)
    } else if(selected === 2){
      setStaff(<StaffList003_map id={props.id} />);
    } else if(selected === 3){
      setStaff('キャリアパス：データなし');
    } else {
      setStaff(<StaffInformation id={props.id} name={props.name} position={props.position} matter_end={props.matter_end} />);
    }
  };

  return (
    <div className={classes.root}>
        <div widt='600px'>
          <ButtonGroup className={classes.ButtonGroup}　size="small" variant="contained" color="" aria-label="contained primary button group">
              <Button className={classes.Button} onClick={() => handleClick(1)}>スキル</Button>
              <Button onClick={() => handleClick(2)}>経歴</Button>
              <Button onClick={() => handleClick(3)}>キャリアパス</Button>
              <Button className={classes.Button} onClick={() => handleClick(4)}>スタッフ情報</Button>
          </ButtonGroup>
          <ButtonGroup className={classes.ButtonGroup2} size="small" variant="contained" aria-label="contained primary button group">
            <Button variant="contained"　className={classes.Button2}>スキルシート出力</Button>
            {/* <Button variant="contained"　className={classes.Button2}>引合登録</Button> */}
          </ButtonGroup>
        </div>
        <div>
          {staff}
        </div>
    </div>
  );
}
    export default DialogButton;