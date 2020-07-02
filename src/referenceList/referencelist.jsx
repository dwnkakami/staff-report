import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

import axios from 'axios';
import './S_012.css';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// ];

const useStyles = makeStyles({
    table: {
        minWidth: 7,
    },
});

export default function Referencelist(props) {
    const classes = useStyles();

    const [posts, setPosts] =useState([]);

useEffect(() => getData());

const getData = () => {
    if(posts.length === 0){
        axios
        .get('/api/referencelist')
        .then(response =>{
            setPosts(response.data);
            console.log([response.data])
        })
        .catch(() => {
            console.log("データがありません")
        })
    }
}

    return (
        <Paper elevation={3} className="paper1">
            {/* <h1>引合リスト</h1> */}
            <div className='title' style={{ display: 'flex' }}>
                <DescriptionOutlinedIcon style={{ fontSize: '40px', }} />
                <Typography style={{ fontSize: '30px' }}>引合リスト</Typography>
            </div>
            <TableContainer >
                <Grid container spacing={24} justify={"center"}>
                    <Grid className="table1">
                        
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>案件名</StyledTableCell>
                                    <StyledTableCell align="right">スタッフ名</StyledTableCell>
                                    <StyledTableCell align="right">発注元会社</StyledTableCell>
                                    <StyledTableCell align="right">回答期限</StyledTableCell>
                                    <StyledTableCell align="right">その他</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {posts.map((data) => (
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            {data.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{data.staff_id}</StyledTableCell>
                                        <StyledTableCell align="right">{data.customer_abbreviation}</StyledTableCell>
                                        <StyledTableCell align="right"></StyledTableCell>
                                        <StyledTableCell align="right">{data.note}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>

                    <Grid className="table2" item xs={10}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>案件名</StyledTableCell>
                                    <StyledTableCell align="right">スタッフ名</StyledTableCell>
                                    <StyledTableCell align="right">スタッフ所属</StyledTableCell>
                                    <StyledTableCell align="right">状態</StyledTableCell>
                                    <StyledTableCell align="right">その他</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {posts.map((data) => (
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            {data.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="right">{data.staff_id}</StyledTableCell>
                                        <StyledTableCell align="right">{data.company_abbreviation}</StyledTableCell>
                                        <StyledTableCell align="right"></StyledTableCell>
                                        <StyledTableCell align="right">{data.note}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Grid>
                </Grid>
            </TableContainer>
        </Paper>
    );
}
