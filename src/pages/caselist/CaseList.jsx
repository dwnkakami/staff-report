import React, { useState, useEffect }from "react";
import Paper from '@material-ui/core/paper';
import './CaseListCSS.css';
import Typography from '@material-ui/core/Typography';
//テーブルマテリアルＵＩ
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import DialogTitle from '@material-ui/core/DialogTitle';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListIcon from '@material-ui/icons/List';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Grid } from '@material-ui/core';
import PropTypes from 'prop-types';
import TableSortLabel from '@material-ui/core/TableSortLabel';


import axios from 'axios';

import CaseDetail from '../casedetail/CaseDetail';


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
          backgroundColor: "#fff",
      },
      '&:nth-of-type(even)':{
        backgroundColor: "#eee",
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
  { id:'id', numeric: false, disablePadding: true, label: '案件番号' },
  { id:'name',numeric: true, disablePadding: false, label: '案件名' },
  { id:'customer_name',numeric: true, disablePadding: false, label: '顧客名' },
  { id:'unit_cost',numeric: true, disablePadding: false, label: '依頼単価' },
  { id:'workplace',numeric: true, disablePadding: false, label: '勤務地' },
  { id:'number_of_persons',numeric: true, disablePadding: false, label: '募集人数' },
  { id:'matter_start',numeric: true, disablePadding: false, label: '案件開始日' },
  { id:'matter_end',numeric: true, disablePadding: false, label: '案件終了日' },
  { id:'id',numeric: true, disablePadding: false, label: '案件詳細' },
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

  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
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
  });



  export default function CaseList() {
    const classes = useStyles();


  const[caselistmap ,setCaselistmap] = useState([]);

  useEffect(() => getCaselistData(),[]);

  const getCaselistData = () => {
      if(caselistmap.length === 0){
        axios
          .get('/api/caselist/1')
          .then(response =>{
            console.log([response.data]);
            setCaselistmap(response.data);
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
    <Paper elevation={3} >
      <DialogTitle>
       <div className='title' style={{ display: 'flex' }}>
                    <ListIcon style={{ fontSize: '25px', }} />
                    <AssignmentIcon style={{fontSize: '40px'}} />
                    <Typography style={{ fontSize: '30px' }}>案件リスト</Typography>
        </div>
        </DialogTitle>
        <TableContainer >
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
              rowCount={caselistmap.length}
            />
          <TableBody>
          {stableSort(caselistmap, getComparator(order, orderBy)).map((data) => (
                <StyledTableRow>
                <StyledTableCell classname="tablecell" align="center" component="th" scope="row">
                  {data.id}
                </StyledTableCell>
                <StyledTableCell classname="tablecell" align="center">{data.name}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="center">{data.customer_name}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="center">{data.unit_cost}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="center">{data.workplace}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="center">{data.number_of_persons}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="center">{data.matter_start}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="center">{data.matter_end}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="center">
                  {/* <Button variant="outlined" color="" handleClickOpen = {handleClickOpen, getSelectline}> */}
                  {/* 案件リスト詳細 */}
                  <CaseDetail key={data.id}
                  name={data.name}
                  customer_name={data.customer_name}
                  user_name={data.user_name}
                  unit_cost={data.unit_cost}
                  workplace={data.workplace}
                  number_of_persons={data.number_of_persons}
                  matter_start={data.matter_start}
                  matter_end={data.matter_end}
                  skill1={data.skill1}
                  skill2={data.skill2}
                  skill3={data.skill3}
                  skill_level_column={data.skill_level_column}
                  business_content={data.business_content}
                  note={data.note}
                  occupation={data.occupation}
                  // open = {open}
                  />
                </StyledTableCell>
                </StyledTableRow>
              )
          )}
        </TableBody>
       </Table>
        </Grid>
      </Grid>
    </TableContainer>
    </Paper>
    );
  }