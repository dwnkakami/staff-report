import React from 'react';
import Paper from '@material-ui/core/Paper';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Typography, DialogTitle } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function StaffAdd () {
    return(
        <Paper elevation={3}>
        <DialogTitle id="customized-dialog-title">
            <div className='title' style={{ display: 'flex' }}>
            <PersonAddIcon style={{ fontSize: '40px', }}/>
            <Typography　style={{ fontSize: '30px' }}>スタッフ追加</Typography>
            </div>
        </DialogTitle>
            <Typography>スタッフID</Typography>
            <TextField variant="outlined" />
            <Typography>スタッフ名</Typography>
            <TextField variant="outlined" />
            <Typography>性別</Typography>
            <TextField variant="outlined" />
            <Typography>役職</Typography>
            <TextField variant="outlined" />
            <Typography>入社日</Typography>
            <TextField variant="outlined" />
            <Typography>生年月日</Typography>
            <TextField variant="outlined" />
            <Typography>年齢</Typography>
            <TextField variant="outlined" />
            <Typography>最終学歴</Typography>
            <TextField variant="outlined" />
            <Typography>連絡先</Typography>
            <TextField variant="outlined" />
            <Typography>最寄駅</Typography>
            <TextField variant="outlined" />
            <Typography>所属会社</Typography>
            <TextField variant="outlined" />
            <Typography>地域</Typography>
            <TextField variant="outlined" />
            <Typography>雇用形態</Typography>
            <TextField variant="outlined" />
            <Button　variant="contained">追加</Button>
        </Paper>
    )
}