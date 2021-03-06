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
import Grid from '@material-ui/core/Grid';
import '../stafflist001/StaffList001.css';
import axios from 'axios';
import ListIcon from '@material-ui/icons/List';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import PropTypes from 'prop-types';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import StaffList005 from '../staffList005/StaffList005.jsx';
import ListData from './ListData';

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
    if (a[orderBy] === null) {
      return 1;
    }
    if (b[orderBy] === null) {
      return -1;
    }
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
    { id:'id', numeric: false, disablePadding: true, label: 'スタッフID' },
    { id:'name',numeric: true, disablePadding: false, label: 'スタッフ名' },
    { id:'occupation',numeric: true, disablePadding: false, label: '職種' },
    { id:'company_abbreviation',numeric: true, disablePadding: false, label: '所属会社' },
    { id:'matter_end',numeric: true, disablePadding: false, label: '案件終了日' },
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
              align="center"
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
        <StyledTableCell align="center">詳細</StyledTableCell>
        </StyledTableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
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

 export default function StaffList001 () {
    const classes = useStyles();

    const [posts, setPosts] = useState([]);

    useEffect(() => getStaffData(),[]);
 
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

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

return(
  <div>
<Paper elevation={3} >
<DialogTitle id="customized-dialog-title">
<div className='title' style={{ display: 'flex' }}>
    <ListIcon style={{ fontSize: '25px'}}/>
    <PeopleAltIcon style={{ fontSize: '40px', }} />
    <Typography style={{ fontSize: '30px' }}>スタッフリスト</Typography>
</div>
</DialogTitle>
<div className={classes.root}>
      {/* <Paper className={classes.paper}> */}
        <TableContainer>
        <Grid container spacing={24} justify={"center"}>
        <Grid className="table1">
          <Table
            className={classes.table}
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={posts.length}
            />
            <TableBody>
              {stableSort(ListData.getStaffData(), getComparator(order, orderBy))
                .map((data) => {
                  return (
                    <StyledTableRow　variant="outlined">

                      <TableCell align="center">{data.id}</TableCell>
                      <TableCell align="center">{data.name}</TableCell>
                      <TableCell align="center">{data.occupation}</TableCell>
                      <TableCell align="center">{data.company_abbreviation}</TableCell>
                      <TableCell align="center">{data.matter_end}</TableCell>
                      <TableCell align="center">
                        <StaffList005 key={data.id} id={data.id} name={data.name} occupation={data.occupation} matter_end={data.matter_end} />
                      </TableCell>
                    </StyledTableRow>
                  );
                })}</TableBody>
          </Table>
          </Grid>
          </Grid>
        </TableContainer>
      {/* </Paper> */}
    </div>
    </Paper>
    </div>
);
};



