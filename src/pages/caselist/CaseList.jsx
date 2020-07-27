import React, { useState, useEffect }from "react";
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
import { Grid, Button } from '@material-ui/core';

import axios from 'axios';

import CaseDetail from '../casedetail/CaseDetail';
import { getThemeProps } from "@material-ui/styles";
import ListData from '../casesearch/ListData';

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
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

  export default function CaseList() {
    const classes = useStyles();

  //   const handleSortByAscend = (key) => {
  //     const line = this.state.data.sort((a, b) => {
  //      if (a[key] < b[key]) return -1;
  //      if (a[key] > b[key]) return 1;
  //       return 0;
  //     });
  //     this.setState({
  //       data: line
  //     });
  //   };

  //   const handleSortByDescend = (key) => {
  //     const line = this.state.data.sort((a, b) => {
  //       if (a[key] < b[key]) return 1;
  //       if (a[key] > b[key]) return -1;
  //       return 0;
  //     });
  //     this.setState({
  //       data: line
  //     });
  //   };

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

  const[Caselistmap ,setCaselist] = useState([]);

  useEffect(() => getCaselistData());

  const getCaselistData = () => {
    if(Caselistmap.length === 0){
    axios
      .get('/api/caselist/1')
      .then(response =>{
        console.log('Accept')
        setCaselist(response.data);
      })
      .catch(() => {
       console.log('connected error');
      })
    }
  }

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const getSelectline = () => {
  //   caseid=data.id
  // }

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
              <StyledTableCell align="left">案件詳細</StyledTableCell>
            </TableRow>
          </TableHead>
          {ListData.getCaseData().map((data) => (
          <TableBody>
                <StyledTableRow/>
                <StyledTableCell classname="tablecell" component="th" scope="row">
                  {data.id}
                </StyledTableCell>
                <StyledTableCell classname="tablecell" align="left">{data.name}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="left">{data.customer_id}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="left">{data.unit_cost}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="left">{data.workplace}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="left">{data.number_of_persons}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="left">{data.matter_start}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="left">{data.matter_end}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="left">
                  {/* <Button variant="outlined" color="" handleClickOpen = {handleClickOpen, getSelectline}> */}
                  {/* 案件リスト詳細 */}
                  <CaseDetail key={data.id} caseid={data.id}
                  // open = {open}
                  />
                  {/* </Button> */}
                </StyledTableCell>
          </TableBody>
          ))}
       </Table>
        </Grid>
      </Grid>
    </TableContainer>
    </Paper>
    );
  }