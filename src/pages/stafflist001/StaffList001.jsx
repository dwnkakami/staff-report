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
import { getData }  from './M_staff';
import Grid from '@material-ui/core/Grid';
import './StaffList001.css';
import axios from 'axios';
import PeopleIcon from '@material-ui/icons/People';
import PropTypes from 'prop-types';
import TableSortLabel from '@material-ui/core/TableSortLabel';
// import TextField from '@material-ui/core/TextField';
// import SearchIcon from '@material-ui/icons/Search';
import StaffList005 from '../staffList005/StaffList005.jsx';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import StaffList003 from '../staffList003/StaffList003';

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
    { id:'id', numeric: false, disablePadding: true, label: 'スタッフID' },
    { id:'name',numeric: true, disablePadding: false, label: 'スタッフ名' },
    { id:'position',numeric: true, disablePadding: false, label: '役職' },
    { id:'company_abbreviation',numeric: true, disablePadding: false, label: '所属会社' },
    { id:'matter_end',numeric: true, disablePadding: false, label: '案件終了日' },
    { id:'id',numeric: true, disablePadding: false, label: '詳細' },
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

    const [staff = getData,setStaff] = useState([]);

    const filterList = (e) => {
      const updateList = staff.filter((data) => {
        return data.toLowerCase().search( e.target.value.toLowerCase()) !== -1;
      })
      setStaff(updateList)
    };

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
  const [selected, setSelected] = React.useState([]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = posts.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

return(
  <div>
<Paper elevation={3} >
<DialogTitle id="customized-dialog-title">
<div className='title' style={{ display: 'flex' }}>
    <PeopleIcon style={{ fontSize: '40px', }} />
    <Typography style={{ fontSize: '30px' }}>スタッフリスト</Typography>
</div>
</DialogTitle>
　　　　　<Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <SearchIcon />
          </Grid>
          <Grid item>
            <TextField onChange={filterList} label="Search" />
          </Grid>
        </Grid>
<div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
        <Grid container spacing={24} justify={"center"}>
        <Grid className="table1">
          <Table
            className={classes.table}
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={posts.length}
            />
            <TableBody>
              {stableSort(posts, getComparator(order, orderBy))
                .map((data) => {
                  const isItemSelected = isSelected(data.id);
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, data.id)}
                      selected={isItemSelected}
                      variant="outlined"
                    >
                      {/* <TableCell>
                        <StaffList005 key={data.id} id={data.id} name={data.name} position={data.position} matter_end={data.matter_end} />
                      </TableCell> */}

                      <TableCell align="center">{data.id}</TableCell>
                      <TableCell align="center">{data.name}</TableCell>
                      <TableCell align="center">{data.position}</TableCell>
                      <TableCell align="center">{data.company_abbreviation}</TableCell>
                      <TableCell align="center">{data.matter_end}</TableCell>
                      <TableCell align="center">
                        <StaffList005 key={data.id} id={data.id} name={data.name} position={data.position} matter_end={data.matter_end} />
                      </TableCell>
                    </TableRow>
                  );
                })}</TableBody>
          </Table>
          </Grid>
          </Grid>
        </TableContainer>
      </Paper>
    </div>
    </Paper>
    </div>
);
};



