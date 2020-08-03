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
import DialogTitle from '@material-ui/core/DialogTitle';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListIcon from '@material-ui/icons/List';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Grid, Button } from '@material-ui/core';

import axios from 'axios';

import CaseDetail from '../casedetail/CaseDetail';
import { getThemeProps } from "@material-ui/styles";

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

  // root: {
  //   '&:nth-of-type(odd)': {
  //       backgroundColor: "#ffffff",
  //   },
// },
  
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
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },

  //   root: {
  //     '&:nth-of-type(odd)': {
  //         backgroundColor: "#ffffff",
  //     },
  // },
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
        <Table className='table' aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">案件番号</StyledTableCell>
              <StyledTableCell align="center">案件名</StyledTableCell>
              <StyledTableCell align="center">顧客番号</StyledTableCell>
              <StyledTableCell align="center">依頼単価&nbsp;
              {/* <button onClick={this._sortByAscend.bind(this)} value="uni_cost">昇順</button>
              <button onClick={this._sortByDescend.bind(this)} value="uni_cost">降順</button> */}
              </StyledTableCell>
              <StyledTableCell align="center">勤務地</StyledTableCell>
              <StyledTableCell align="center">募集人数</StyledTableCell>
              <StyledTableCell align="center">勤務開始日</StyledTableCell>
              <StyledTableCell align="center">勤務終了日</StyledTableCell>
              <StyledTableCell align="center">案件詳細</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {Caselistmap.map((data) => (
                <StyledTableRow>
                <StyledTableCell classname="tablecell" align="center" component="th" scope="row">
                  {data.id}
                </StyledTableCell>
                <StyledTableCell classname="tablecell" align="center">{data.name}</StyledTableCell>
                <StyledTableCell classname="tablecell" align="center">{data.customer_id}</StyledTableCell>
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
                  // open = {open}
                  />
                  {/* </Button> */}
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