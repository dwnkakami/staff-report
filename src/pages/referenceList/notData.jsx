import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

// import './notData.css';

export default function Referencelist() {
    return (
        <Paper elevation={3} className="paper1">
            {/* <h1>引合リスト</h1> */}
            <div className='title' style={{ display: 'flex' }}>
                <DescriptionOutlinedIcon style={{ fontSize: '40px', }} />
                <Typography style={{ fontSize: '30px' }}>引合リスト</Typography>
            </div>

            <Typography className='text' style={{ fontSize: '30px' }} >データがありません</Typography>
        </Paper>
    );
}