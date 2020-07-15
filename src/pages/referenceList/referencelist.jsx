import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography, DialogTitle } from '@material-ui/core'
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Grid from '@material-ui/core/Grid';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import axios from 'axios';

import './ReferenceList.css'
import ReferenceDetail from '../referencedetail/ReferenceDetail';


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
            backgroundColor: "#fff"
        },
        '&:nth-of-type(even)': {
            backgroundColor: "#eee"
        },
    },
}))(TableRow);

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: '案件名' },
    { id: 'staff_name', numeric: true, disablePadding: false, label: 'スタッフ名' },
    { id: 'customer_abbreviation', numeric: true, disablePadding: false, label: '発注元会社' },
    { id: 'status', numeric: true, disablePadding: false, label: '状態' },
    { id: 'detail', numeric: true, disablePadding: false, label: '詳細' },
];

function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <StyledTableRow>
                {headCells.map((headCell) => (
                    <StyledTableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'center' : 'center'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </StyledTableCell>
                ))}
            </StyledTableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export default function ReferenceList() {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);

    useEffect(() => { getReferenceData(); console.log("connected") },[]);

    const getReferenceData = () => {
        if (posts.length === 0) {
            axios
<<<<<<< HEAD:src/pages/referencelist/ReferenceList.jsx
                .get('/api/referencelist/2')
=======
                .get('/api/referencelist/1')
>>>>>>> 2efab5201e790464c2b5058a4c3dd78d011d32c8:src/pages/referenceList/ReferenceList.jsx
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
        <Paper elevation={3} >
            <DialogTitle id="customized-dialog-title">
                <div className='title' style={{ display: 'flex' }}>
                    <DescriptionOutlinedIcon style={{ fontSize: '40px', }} />
                    <Typography style={{ fontSize: '30px' }}>引合リスト</Typography>
                </div>
            </DialogTitle>
​
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <TableContainer>
                        <Grid container justify={"center"}>
                            <Grid className="table1">
                                <Table
                                    className={classes.table}
                                >
                                    <EnhancedTableHead
                                        classes={classes}
                                        rowCount={posts.length}
                                    />
                                    <TableBody>
                                        {stableSort(posts, getComparator())
                                            .map((data) => {
                                                return (
                                                    <StyledTableRow
                                                        hover
                                                        key={data.id}
                                                    >
                                                        <TableCell align="center">{data.name}</TableCell>
                                                        <TableCell align="center">{data.staff_name}</TableCell>
                                                        <TableCell align="center">{data.customer_abbreviation}</TableCell>
                                                        <TableCell align="center"></TableCell>
                                                        <TableCell align="center">
                                                            <ReferenceDetail />
                                                        </TableCell>
                                                    </StyledTableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </Grid>
                        </Grid>
                    </TableContainer>
                </Paper>
            </div>
        </Paper>
    )
};