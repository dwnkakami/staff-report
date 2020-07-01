import React, { useState, useEffect }　from 'react';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
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
const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
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
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
 export default function StaffList001 () {
    const classes = useStyles();
    const [staff, setStaff] = useState([]);
    useEffect(() => getStaffData());
    // const sortArray = [...array].sort((a, b) => a.name - b.name);
    // console.log(sortArray);
    const getStaffData = () => {
        if(staff.length === 0) {
            axios
              .get('/api/stafflist001/1')
              .then(response => {
                setStaff([response.data]);
              })
              .catch(() => {
                console.log('connected error');
              })
            }
    }
return(
<Grid>
    <Typography variant="h2">スタッフリスト</Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>スタッフID</StyledTableCell>
            <StyledTableCell align="right">スタッフ名</StyledTableCell>
            <StyledTableCell align="right">役職</StyledTableCell>
            <StyledTableCell align="right">所属会社</StyledTableCell>
            <StyledTableCell align="right">案件終了日</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staff.map((data) => (
            <StyledTableRow key={data.id}>
            <StyledTableCell component="th" scope="row">
                {data.id}
              </StyledTableCell>
              <StyledTableCell align="right"><Button>{data.name}</Button></StyledTableCell>
              <StyledTableCell align="right">{data.position}</StyledTableCell>
              <StyledTableCell align="right">{data.company_abbreviation}</StyledTableCell>
              <StyledTableCell align="right">{data.matter_end}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
)
};