// import React, { useState, useEffect }　from 'react';
// import Paper from '@material-ui/core/Paper';
// import { Typography } from '@material-ui/core';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// // import { getData }  from './M_staff';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// // import './StaffList001.css';
// import axios from 'axios';


//   function descendingComparator(a, b, orderBy) {
//     if (b[orderBy] < a[orderBy]) {
//       return -1;
//     }
//     if (b[orderBy] > a[orderBy]) {
//       return 1;
//     }
//     return 0;
//   }

//   function getComparator(order, orderBy) {
//     return order === 'desc'
//       ? (a, b) => descendingComparator(a, b, orderBy)
//       : (a, b) => -descendingComparator(a, b, orderBy);
//   }

//   function stableSort(array, comparator) {
//     const stabilizedThis = array.map((el, index) => [el, index]);
//     stabilizedThis.sort((a, b) => {
//       const order = comparator(a[0], b[0]);
//       if (order !== 0) return order;
//       return a[1] - b[1];
//     });
//     return stabilizedThis.map((el) => el[0]);
//   }
//   const headCells = [
//     { id: 'name', numeric: false, disablePadding: true, label: 'Name' },
//     { id: 'position', numeric: true, disablePadding: false, label: 'Position' },
//     { id: 'company_abbrevation', numeric: true, disablePadding: false, label: 'Company_Abbrevation' },
//     { id: 'matter_end', numeric: true, disablePadding: false, label: 'Matter_End' },
//   ];

//   function EnhancedTableHead(props) {
//     const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
//     const createSortHandler = (property) => (event) => {
//       onRequestSort(event, property);
//     };
//     return (
//         <TableHead>
//           <TableRow>
//             {/* <TableCell padding="checkbox">
//               <Checkbox
//                 indeterminate={numSelected > 0 && numSelected < rowCount}
//                 checked={rowCount > 0 && numSelected === rowCount}
//                 onChange={onSelectAllClick}
//                 inputProps={{ 'aria-label': 'select all desserts' }}
//               />
//             </TableCell> */}
//             {headCells.map((headCell) => (
//               <TableCell
//                 key={headCell.id}
//                 align={headCell.numeric ? 'right' : 'left'}
//                 padding={headCell.disablePadding ? 'none' : 'default'}
//                 sortDirection={orderBy === headCell.id ? order : false}
//               >
//                 <TableSortLabel
//                   active={orderBy === headCell.id}
//                   direction={orderBy === headCell.id ? order : 'asc'}
//                   onClick={createSortHandler(headCell.id)}
//                 >
//                   {headCell.label}
//                   {orderBy === headCell.id ? (
//                     <span className={classes.visuallyHidden}>
//                       {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                     </span>
//                   ) : null}
//                 </TableSortLabel>
//               </TableCell>
//             ))}
//           </TableRow>
//         </TableHead>
//       );
//     }

//     EnhancedTableHead.propTypes = {
//         classes: PropTypes.object.isRequired,
//         numSelected: PropTypes.number.isRequired,
//         onRequestSort: PropTypes.func.isRequired,
//         onSelectAllClick: PropTypes.func.isRequired,
//         order: PropTypes.oneOf(['asc', 'desc']).isRequired,
//         orderBy: PropTypes.string.isRequired,
//         rowCount: PropTypes.number.isRequired,
//       };

//       EnhancedTableToolbar.propTypes = {
//         numSelected: PropTypes.number.isRequired,
//       };


//  export default function StaffList001 () {
//     const classes = useStyles();
//     const [order, setOrder] = React.useState('asc');
//     const [orderBy, setOrderBy] = React.useState('position');
//     const [selected, setSelected] = React.useState([]);
//     const [page, setPage] = React.useState(0);
//     const [dense, setDense] = React.useState(false);
//     const [rowsPerPage, setRowsPerPage] = React.useState(5);

//     const handleRequestSort = (event, property) => {
//         const isAsc = orderBy === property && order === 'asc';
//         setOrder(isAsc ? 'desc' : 'asc');
//         setOrderBy(property);
//     };
//     const [staff, setStaff] = useState([]);
//     useEffect(() => getStaffData());
//     const getStaffData = () => {
//         if(staff.length === 0) {
//             axios
//               .get('/api/stafflist001/1')
//               .then(response => {
//                 setStaff([response.data]);
//               })
//               .catch(() => {
//                 console.log('connected error');
//               })
//             }
//     }
    
//     const handleSelectAllClick = (event) => {
//         if (event.target.checked) {
//           const newSelecteds = rows.map((n) => n.name);
//           setSelected(newSelecteds);
//           return;
//         }
//         setSelected([]);
//       };

//       const handleClick = (event, name) => {
//         const selectedIndex = selected.indexOf(name);
//         let newSelected = [];
    
//         if (selectedIndex === -1) {
//           newSelected = newSelected.concat(selected, name);
//         } else if (selectedIndex === 0) {
//           newSelected = newSelected.concat(selected.slice(1));
//         } else if (selectedIndex === selected.length - 1) {
//           newSelected = newSelected.concat(selected.slice(0, -1));
//         } else if (selectedIndex > 0) {
//           newSelected = newSelected.concat(
//             selected.slice(0, selectedIndex),
//             selected.slice(selectedIndex + 1),
//           );
//         }

//         setSelected(newSelected);
//     };
//     const handleChangeDense = (event) => {
//         setDense(event.target.checked);
//       };
    
//       const isSelected = (name) => selected.indexOf(name) !== -1;
    
//       const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
// return(
// <Grid>
//     <Typography variant="h2">スタッフリスト</Typography>
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>スタッフID</StyledTableCell>
//             <StyledTableCell align="right">スタッフ名</StyledTableCell>
//             <StyledTableCell align="right">役職</StyledTableCell>
//             <StyledTableCell align="right">所属会社</StyledTableCell>
//             <StyledTableCell align="right">案件終了日</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {staff.map((data) => (
//             <StyledTableRow key={data.id}>
//             <StyledTableCell component="th" scope="row">
//                 {data.id}
//               </StyledTableCell>
//               <StyledTableCell align="right"><Button>{data.name}</Button></StyledTableCell>
//               <StyledTableCell align="right">{data.position}</StyledTableCell>
//               <StyledTableCell align="right">{data.company_abbreviation}</StyledTableCell>
//               <StyledTableCell align="right">{data.matter_end}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>      
//     </TableContainer>
//    </Grid>
// )
// };