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
import Divider from '@material-ui/core/Divider';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';

import axios from 'axios';
import './ReferenceList.css';
import ReferenceDetail from '../referencedetail/ReferenceDetail';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        fontWeight: 'bolder',
        backgroundColor: "#eee",
        color: theme.palette.common.black,
    },
    body: {
        color: "black",
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: "#ffffff",
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 70,

    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
        </MuiDialogTitle>
    );
});

export default function ReferenceList(props) {

    const classes = useStyles();

    const [posts, setPosts] = useState([]);

    useEffect(() => getData());

    const getData = () => {
        if (posts.length === 0) {
            axios
                .get('/api/referencelist/2')
                .then(response => {
                    setPosts(response.data);
                    console.log([response.data])
                })
                .catch(() => {
                    console.log("connected error")
                })
        }
    }

    return (
        <Paper elevation={3}>
            <DialogTitle id="customized-dialog-title" >
                <div className='title' style={{ display: 'flex' }}>
                    <DescriptionOutlinedIcon style={{ fontSize: '40px', }} />
                    <Typography style={{ fontSize: '30px' }}>引合リスト</Typography>
                </div>
            </DialogTitle>

            <Divider className="line" />


            <TableContainer >
                <Grid container spacing={24} justify={"center"}>
                    <Grid className="table1">
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>案件名</StyledTableCell>
                                    <StyledTableCell align="center">スタッフ名</StyledTableCell>
                                    <StyledTableCell align="center">発注元会社</StyledTableCell>
                                    <StyledTableCell align="center">状態</StyledTableCell>
                                    <StyledTableCell align="center">詳細</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {posts.map((data) => (
                                    <StyledTableRow>
                                        <StyledTableCell component="th" scope="row">
                                            {data.name}
                                        </StyledTableCell>
                                        <StyledTableCell align="center">{data.staff_name}</StyledTableCell>
                                        <StyledTableCell align="center">{data.customer_abbreviation}</StyledTableCell>
                                        <StyledTableCell align="center">回答済み</StyledTableCell>
                                        <StyledTableCell align="center">
                                            <ReferenceDetail />
                                        </StyledTableCell>
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