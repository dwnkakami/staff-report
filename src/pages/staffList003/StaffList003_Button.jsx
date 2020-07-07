import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import StaffList003_map from './StaffList003_map';

const useStyles = makeStyles((theme) => ({
  Button: {
    background:'rgb(120,144,156)',
    borderRadius: '0px 0px 0px 0px',
  },
  Button2: {
    background:'rgb(120,144,156)',
    color: '#ffffff',
    borderRadius: '0px 0px 0px 0px',
    top:12,
    float: 'right',
  },
  Button3: {
    background:'rgb(120,144,156)',
    color: '#ffffff',
    borderRadius: '0px 0px 0px 0px',
    top: 12,
    float: 'right',
  },
  Button4: {
    color: '#000000',
  },
  ButtonGroup: {
    margin: '10px 200px 10px 0px',
    borderRadius: '0px 0px 0px 0px',
  },
  Button5: {
    margin: '20px',
  },
}));


const StaffList003_Button = () => {
  const classes = useStyles();
  const [staff, setStaff] = useState('データなし１');

  const handleClick = (selected) => {
    if(selected　=== 1){
      setStaff('データなし１')
    } else if(selected　=== 2){
      setStaff(<StaffList003_map />);
      } else if(selected　=== 3){
        setStaff('データなし３');
      }else {
      　setStaff("データなし４");
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
          <Button variant="contained" size="small"　className={classes.Button2}>スキルシート出力</Button>
          <Button variant="contained" size="small" className={classes.Button3}>引合登録</Button>
      </div>
      <div>
        {staff}
      </div>
      <div>
      </div>
    </div>
  );
}

export default StaffList003_Button;

