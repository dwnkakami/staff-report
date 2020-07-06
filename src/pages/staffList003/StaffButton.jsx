import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import StaffList003 from './StaffList003';
import { Link , Route } from 'react-router-dom';



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



const StaffButton = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [add, setAdd] =useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = () => {
    setAdd(true);
  };


  return (
    <div>

      <div>
        <ButtonGroup className={classes.ButtonGroup}　size="small" variant="contained" aria-label="contained primary button group">
          <Button className={classes.Button}>スキル</Button>
          <Button className={classes.Button} onClick={handleChange}>経歴
          <Link to='/StaffList003' />
          </Button>
          <Button className={classes.Button} >キャリアパス</Button>
          <Button className={classes.Button} >スタッフ情報</Button>
      </ButtonGroup>
          <Button variant="contained" size="small"　className={classes.Button2}>スキルシート出力</Button>
          <Button variant="contained" size="small" className={classes.Button3}>引合登録</Button>
      </div>
      <Route path="/staffList003" component={StaffList003} />
    </div>
  );
}

export default StaffButton;


