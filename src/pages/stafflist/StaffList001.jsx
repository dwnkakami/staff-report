import React, { useState, useEffect }　from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography, DialogTitle } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import { getData }  from './M_staff';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import './StaffList001.css';
import axios from 'axios';
import PeopleIcon from '@material-ui/icons/People';
import Link from '@material-ui/core/Link';
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
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
 export default function StaffList001 () {
    const classes = useStyles();
    const [posts, setPosts] = useState([]);
    useEffect(() => getStaffData());
    const getStaffData = () => {
        if(posts.length === 0) {
            axios
              .get('/api/stafflist001/1')
              .then(response => {
                console.log([response.data]);
                setPosts(response.data);
              })
              .catch(() => {
                console.log('connected error');
              })
            }
    }
      const preventDefault = (event) => event.preventDefault();
return(
<Paper elevation={3} >
<DialogTitle id="customized-dialog-title">
<div className='title' style={{ display: 'flex' }}>
    <PeopleIcon style={{ fontSize: '40px', }} />
    <Typography style={{ fontSize: '30px' }}>スタッフリスト</Typography>
</div>
</DialogTitle>
    <TableContainer component={Paper}>
    <Grid container spacing={24} justify={"center"}>
    <Grid className="table1">
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">スタッフID</StyledTableCell>
            <StyledTableCell align="center">スタッフ名</StyledTableCell>
            <StyledTableCell align="center">役職</StyledTableCell>
            <StyledTableCell align="center">所属会社</StyledTableCell>
            <StyledTableCell align="center">案件終了日</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((data) => (
            <StyledTableRow >
            <StyledTableCell component="th" scope="row" align="center">
                {data.id}
              </StyledTableCell>
              <StyledTableCell align="center">{data.name}</StyledTableCell>
              <StyledTableCell align="center">{data.position}</StyledTableCell>
              <StyledTableCell align="center">{data.company_abbreviation}</StyledTableCell>
              <StyledTableCell align="center">{data.matter_end}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Grid>
    </Grid>
    </TableContainer>
    </Paper>
)
};