// import React, { useState, useEffect }　from 'react';
// import Paper from '@material-ui/core/Paper';
// import { Typography, DialogTitle } from '@material-ui/core';
// import { lighten, withStyles, makeStyles } from '@material-ui/core/styles';
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


// const StyledTableCell = withStyles((theme) => ({
//     head: {
//         fontWeight: 'border',
//         backgroundColor: "#eee",
//         color: theme.palette.common.black,
//     },
//     body: {
//         color: "black",
//         fontSize: 14,
//     },
// }))(TableCell);

// const useStyles = makeStyles({
//     table: {
//         minWidth: 700,
//     },
// });

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
//     const {  order, orderBy, numSelected, rowCount, onRequestSort } = props;
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
//               /> */}
//             {/* </TableCell> */}
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
//                   {/* {headCell.label}
//                   {orderBy === headCell.id ? (
//                     <span className={classes.visuallyHidden}>
//                       {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
//                     </span>
//                   ) : null} */}
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

//     //   const useToolbarStyles = makeStyles((theme) => ({
//     //     root: {
//     //       paddingLeft: theme.spacing(2),
//     //       paddingRight: theme.spacing(1),
//     //     },
//     //     highlight:
//     //       theme.palette.type === 'light'
//     //         ? {
//     //             color: theme.palette.secondary.main,
//     //             backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//     //           }
//     //         : {
//     //             color: theme.palette.text.primary,
//     //             backgroundColor: theme.palette.secondary.dark,
//     //           },
//     //     // title: {
//     //     //   flex: '1 1 100%',
//     //     // },
//     //   }));

//     //   const EnhancedTableToolbar = (props) => {
//     //     const classes = useToolbarStyles();
//     //     const { numSelected } = props;

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
//     const [posts, setPosts] = useState([]);

//     const handleRequestSort = (event, property) => {
//         const isAsc = orderBy === property && order === 'asc';
//         setOrder(isAsc ? 'desc' : 'asc');
//         setOrderBy(property);
//     };

//     useEffect(() => getStaffData());
//     const getStaffData = () => {
//         if(posts.length === 0) {
//             axios
//               .get('/api/stafflist001/1')
//               .then(response => {
//                   console.log([response.data]);
//                 setPosts(response.data);
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

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//       };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//       };

//     const handleChangeDense = (event) => {
//         setDense(event.target.checked);
//       };
    
//     //   const isSelected = (name) => selected.indexOf(name) !== -1;
    
//     //   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
// return(
//     <Paper elevation={3} >
//     <DialogTitle id="customized-dialog-title">
//     <div className='title' style={{ display: 'flex' }}>
//         <PeopleIcon style={{ fontSize: '40px' }} />
//         <Typography style={{ fontSize: '30px' }}>スタッフリスト</Typography>
//     </div>
//     </DialogTitle>
//     <TableContainer component={Paper}>
//         <Grid container spacing={24} justify={"center"}>
//         <Grid className="tablel">
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead
//           classes={classes}
//           numSelected={selected.length}
//           order={order}
//           orderBy={orderBy}
//           onSelectAllClick={handleSelectAllClick}
//           onRequestSort={handleRequestSort}
//           rowCount={rows.length}>
//           <TableRow
//             hover
//             onClick={(event) => handleClick(event, row.name)}
//             // role="checkbox"
//             aria-checked={isItemSelected}
//             tabIndex={-1}
//             key={row.name}
//             selected={isItemSelected}>
//             <StyledTableCell>スタッフID</StyledTableCell>
//             <StyledTableCell align="right">スタッフ名</StyledTableCell>
//             <StyledTableCell align="right">役職</StyledTableCell>
//             <StyledTableCell align="right">所属会社</StyledTableCell>
//             <StyledTableCell align="right">案件終了日</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//                {/* {stableSort(rows, getComparator(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((row, index) => {
//                   const isItemSelected = isSelected(row.name);
//                   const labelId = `enhanced-table-checkbox-${index}`; */}
//                   {/* return (
//                     // <TableCell component="th" id={labelId} scope="row" padding="none">
//                     //   {row.name}
//                     // </TableCell> */}

//           {posts.map((data) => (
//             <StyledTableRow >
//             <StyledTableCell component="th" scope="row" aligin="center">
//                 {data.id}
//               </StyledTableCell>
//               <StyledTableCell align="center"><Button>{data.name}</Button></StyledTableCell>
//               <StyledTableCell align="center">{data.position}</StyledTableCell>
//               <StyledTableCell align="center">{data.company_abbreviation}</StyledTableCell>
//               <StyledTableCell align="center">{data.matter_end}</StyledTableCell>
//             </StyledTableRow>
//           ))}    
    
//         </TableBody>
//       </Table>
//       </Grid>
//       </Grid>    
//     </TableContainer>
//     <TablePagination
//         //   rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={rows.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onChangePage={handleChangePage}
//           onChangeRowsPerPage={handleChangeRowsPerPage}
//         />
//    </Paper>
//     <FormControlLabel
//         control={<Switch checked={dense} onChange={handleChangeDense} />}
//         // label="Dense padding"
//     />
//  )
// };