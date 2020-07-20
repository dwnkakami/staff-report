import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import StaffList002_graph from './StaffList002_graph';

const useStyles = makeStyles((theme) => ({
  Button: {
    background:'rgb(120,144,156)',
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
    background:'rgb(120,144,156)',
    color: '#ffffff',
    borderRadius: '0px 0px 0px 0px',
  },
}));


const Staffskillbotton = () => {
  const classes = useStyles();
  const [staff, setStaff] = useState(<StaffList002_graph />);

  const handleClick = (selected) => {
    if(selected　=== 1){
      setStaff(<StaffList002_graph />)
    } else if(selected　=== 2){
      setStaff('詳細：データなし');
      } else if(selected　=== 3){
        setStaff('キャリアパス：データなし');
      }else {
      　setStaff('スタッフ情報：データなし');
    }
  };

  return (
    <div>
      <div>
        <ButtonGroup className={classes.ButtonGroup}　size="small" variant="contained" aria-label="contained primary button group">
          <Button className={classes.Button} onClick={() => handleClick(1)}>スキル</Button>
          <Button className={classes.Button} onClick={() => handleClick(2)}>経歴</Button>
          <Button className={classes.Button} onClick={() => handleClick(3)}>キャリアパス</Button>
          <Button className={classes.Button} onClick={() => handleClick(4)}>スタッフ情報</Button>
      </ButtonGroup>
      <ButtonGroup className={classes.ButtonGroup2}　size="small" variant="contained" aria-label="contained primary button group">
          <Button　className={classes.Button2}>スキルシート出力</Button>
          <Button className={classes.Button2}>引合登録</Button>
          </ButtonGroup>
      </div>
      <div>
        {staff}
      </div>
    </div>
  );
}

export default Staffskillbotton;