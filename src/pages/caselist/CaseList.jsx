import React from "react";
import Paper from '@material-ui/core/paper';
import './CaseListCSS.css';
import Typography from '@material-ui/core/Typography';
//テーブルマテリアルＵＩ
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

  //Case.sort();

return(
    <Paper elevation={3} className='paper1'>
        <Typography variant="h3" component="h2">
        案件リスト
        </Typography>
        <TableContainer className='table1' component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">案件番号</StyledTableCell>
            <StyledTableCell align="left">案件名</StyledTableCell>
            <StyledTableCell align="left">顧客番号</StyledTableCell>
            <StyledTableCell align="left">依頼単価&nbsp;<button >昇順</button><button >降順</button></StyledTableCell>
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
    </TableContainer>
    </Paper>
    )
}