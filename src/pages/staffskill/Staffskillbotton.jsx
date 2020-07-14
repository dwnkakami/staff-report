import React, { useState } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Staffskill2 from './Staffskill2';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

const styles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'colomn',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    margin: {
        botton: theme.spacing(16),
        left: theme.spacing(5),
        background:'#000000',
        float: 'right',
    },
}));
const Staffskillbotton = () => {
    const classes = styles();
    const [staff, setStaff] = useState(<Staffskill2 />);

    const handleClick = (selected) => {
        if(selected === 1){
            setStaff(<Staffskill2 />);
        } else if(selected === 2){
            setStaff('詳細');
        } else if(selected === 3){
            setStaff('キャリアパス');
        } else {
            setStaff('スタッフ情報');
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
      <staff />
        </div>
    )
}
export default Staffskillbotton;