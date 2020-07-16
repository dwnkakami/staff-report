// import React from 'react';
// import './CasedataCSS.css';

// const CaseData = (props) => {
//     return(
//         <div className='title' style={{ display: 'flex' }}>
//                     <DescriptionOutlinedIcon style={{ fontSize: '40px', }} />
//                     <Typography style={{ fontSize: '30px' }}>案件リスト</Typography>
//         </div>
//         <TableContainer>
//           <Grid container spacing={24} justify={"center"}>
//             <Grid className="table1">
//         <Table className={classes.table} aria-label="customized table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell align="left">案件番号</StyledTableCell>
//               <StyledTableCell align="left">案件名</StyledTableCell>
//               <StyledTableCell align="left">顧客番号</StyledTableCell>
//               <StyledTableCell align="left">依頼単価&nbsp;
//               {/* <button onClick={this._sortByAscend.bind(this)} value="uni_cost">昇順</button>
//               <button onClick={this._sortByDescend.bind(this)} value="uni_cost">降順</button> */}
//               </StyledTableCell>
//               <StyledTableCell align="left">勤務地</StyledTableCell>
//               <StyledTableCell align="left">募集人数</StyledTableCell>
//               <StyledTableCell align="left">勤務開始日</StyledTableCell>
//               <StyledTableCell align="left">勤務終了日</StyledTableCell>
//               <StyledTableCell align="left">案件詳細</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//           {current_data.map((data) => (
//                 <Question key={data.id} 
//                 contentstext={data.contents_statement}
//                 contentsquestion={data.contents_name}
//               />
//             ))}
//             {Case.map((row) => (
//               <StyledTableRow key={row.number}>
//                 <StyledTableCell component="th" scope="row">
//                   {row.number}
//                 </StyledTableCell>
//                 <StyledTableCell align="left"><a href='https://www.google.com'>{row.casename}</a></StyledTableCell>
//                 <StyledTableCell align="left">{row.customerid}</StyledTableCell>
//                 <StyledTableCell align="left">{row.uni_cost}</StyledTableCell>
//                 <StyledTableCell align="left">{row.workplace}</StyledTableCell>
//                 <StyledTableCell align="left">{row.number_of_persons}</StyledTableCell>
//                 <StyledTableCell align="left">{row.matter_start}</StyledTableCell>
//                 <StyledTableCell align="left">{row.matter_end}</StyledTableCell>
//               </StyledTableRow>
//             ))}
//           </TableBody>
//        </Table>
//         </Grid>
//       </Grid>
//     </TableContainer>
//     );
// }
// export default CaseData;