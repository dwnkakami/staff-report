import React
// , { useState, useEffect } 
from "react";
import Paper from '@material-ui/core/paper';
import './CaseListCSS.css';
import Typography from '@material-ui/core/Typography';
// import {render} from 'react-dom';
//テーブルマテリアルＵＩ
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import { Grid } from '@material-ui/core';

// const styles = (theme) => ({
//   root: {
//       margin: 0,
//       padding: theme.spacing(2),
//   },
// });

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
//   }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//     root: {
//       '&:nth-of-type(odd)': {
//         backgroundColor: theme.palette.action.hover,
//       },
//     },
//   }))(TableRow);

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

const StyledTableRow = withStyles(() => ({
  root: {
      '&:nth-of-type(odd)': {
          backgroundColor: "#ffffff",
      },
  },
}))(TableRow);

  function createData(number, casename, customerid, uni_cost, workplace, number_of_persons, matter_start, matter_end) {
    return { number, casename, customerid, uni_cost, workplace, number_of_persons, matter_start, matter_end };
  }
  
  const Case = [
    createData(1, '金融システム開発プロジェクト', 1, '350000~400000', '渋谷', 2, '2020/06/01', '2020/08/31'),
    createData(2, 'ゲーム開発プロジェクト', 2, '380000~420000', '新宿', 3, '2020/07/10', '2020/09/10'),
    createData(3, 'ホームページのリデザイン', 3, '280000~330000', '神保町', 2, '2020/06/20', '2020/07/31'),
    createData(4, 'ＡＢＣ開発プロジェクト',4, '350000~400000', '神田', 1, '2020/07/01', '2020/08/10'),
    createData(5, 'テスト開発プロジェクト', 1, '350000~390000', '新宿', 3, '2020/07/01', '2020/09/30'),
  ];
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  export default function CaseList() {
    const classes = useStyles();

  //   handleSortByAscend((key) => {
  //     const line = this.state.data.sort((a, b) => {
  //      if (a[key] < b[key]) return -1;
  //      if (a[key] > b[key]) return 1;
  //       return 0;
  //     });
  //     this.setState({
  //       data: line
  //     });
  //   });

  //  handleSortByDescend((key) => {
  //     const line = this.state.data.sort((a, b) => {
  //       if (a[key] < b[key]) return 1;
  //       if (a[key] > b[key]) return -1;
  //       return 0;
  //     });
  //     this.setState({
  //       data: line
  //     });
  //   });

  //   let list = this.state.data.map((data) => (
  //     <li key={data.id}>
  //       {data.id}: {data.name}
  //     </li>
  //   ));
  //   return (
  //     <div>
  //     <div>
  //       <Form onFilterVal={this.handleFilterVal.bind(this)} />
  //       <SortButton
  //         onSortByAscend={this.handleSortByAscend.bind(this)}
  //         onSortByDescend={this.handleSortByDescend.bind(this)}
  //       />
  //       <ul>
  //         {list}
  //       </ul>
  //     </div>
  //     </div>
  //   );
  // }


  //   Form.propTypes = {
  //     onFilterVal: React.PropTypes.func.isRequired
  //   };
  //   class SortButton extends Component {
  //     _sortByAscend(e) {
  //       e.preventDefault();
  //       this.props.handleSortByAscend(e.target.value);
  //     }
  //     _sortByDescend(e) {
  //       e.preventDefault();
  //       this.props.handleSortByDescend(e.target.value);
  //     }
  //   }

  return(
    <Paper elevation={3} className='paper1'>
       <div className='title' style={{ display: 'flex' }}>
                    <DescriptionOutlinedIcon style={{ fontSize: '40px', }} />
                    <Typography style={{ fontSize: '30px' }}>案件リスト</Typography>
        </div>
        <TableContainer>
          <Grid container spacing={24} justify={"center"}>
            <Grid className="table1">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">案件番号</StyledTableCell>
              <StyledTableCell align="left">案件名</StyledTableCell>
              <StyledTableCell align="left">顧客番号</StyledTableCell>
              <StyledTableCell align="left">依頼単価&nbsp;
              {/* <button onClick={this._sortByAscend.bind(this)} value="uni_cost">昇順</button>
              <button onClick={this._sortByDescend.bind(this)} value="uni_cost">降順</button> */}
              </StyledTableCell>
              <StyledTableCell align="left">勤務地</StyledTableCell>
              <StyledTableCell align="left">募集人数</StyledTableCell>
              <StyledTableCell align="left">勤務開始日</StyledTableCell>
              <StyledTableCell align="left">勤務終了日</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Case.map((row) => (
              <StyledTableRow key={row.number}>
                <StyledTableCell component="th" scope="row">
                  {row.number}
                </StyledTableCell>
                <StyledTableCell align="left"><a href='https://www.google.com'>{row.casename}</a></StyledTableCell>
                <StyledTableCell align="left">{row.customerid}</StyledTableCell>
                <StyledTableCell align="left">{row.uni_cost}</StyledTableCell>
                <StyledTableCell align="left">{row.workplace}</StyledTableCell>
                <StyledTableCell align="left">{row.number_of_persons}</StyledTableCell>
                <StyledTableCell align="left">{row.matter_start}</StyledTableCell>
                <StyledTableCell align="left">{row.matter_end}</StyledTableCell>
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