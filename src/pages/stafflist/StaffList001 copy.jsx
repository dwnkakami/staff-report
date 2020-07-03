import React, { useState, useEffect, Component }　from 'react';
import { render } from 'react-dom';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import { getData }  from './M_staff';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import './StaffList001.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
  }
  handleFilterVal(val) {

    const line = this.props.data.filter((item) => (
      item.id.toString().indexOf(val) >= 0
      || item.name.toLowerCase().indexOf(val) >= 0
    ));
  
    this.setState({
      data: line
    });
  }

  handleSortByAscend(key) {
    const line = this.state.data.sort((a, b) => {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    });
    this.setState({
      data: line
    });
  }

  handleSortByDescend(key) {
    const line = this.state.data.sort((a, b) => {
      if (a[key] < b[key]) return 1;
      if (a[key] > b[key]) return -1;
      return 0;
    });
    this.setState({
        data: line
    });
  }
render() {

  let list = this.state.data.map((data) => (
    <li key={data.id}>
    {data.id}: {data.name}
    </li>
  ));
  return (
    <div>
      <Form onFilterVal={this.handleFilterVal.bind(this)} />
      <SortButton
      onSortByAscend={this.handleSortByAscend.bind(this)}
      onSortByDescend={this.handleSortByDescend.bind(this)}
      />
      <ul>         
        {list}
      </ul>
    </div>
   );
  }
}

App.propTypes = {
  data: React.PropTypes
};

class Form extends Component {
  _filterVal() {
    const val = this.refs.myinput.value;
    this.props.onFilterVal(val);
}
render() {
  return (
    <div>
      <span style={{ marginRight: '8px', fontSize: '12px' }}>
      キーワードで絞り込む:
      </span>
      <input
      type="text"
      ref="myinput"
      defaultValue=""
      onKeyUp={this._filterVal.bind(this)}
      />
      </div>
   );
 }
}

Form.propTypes = {
  onFilterVal: React.PropTypes
};
class SortButton extends Component {
  _sortByAscend(e) {
    e.preventDefault();

    this.props.handleSortByAscend(e.target.value);
  }

  _sortByDescend(e) {
    e.preventDefault();

    this.props.handleSortByDescend(e.target.value);
  }
  render() {
    return (
      <div>
     <div>
       <span style={{ marginRight: '8px', fontSize: '12px' }}>
         idでソート:
        </span>
        <button onClick={this._sortByAscend.bind(this)} value="id">
          昇順
        </button>
        
        <button onClick={this._sortByDescend.bind(this)} value="id">
          降順
        </button>
     </div>
     <div>
       <span style={{ marginRight: '8px', fontSize: '12px' }}>
         nameでソート:
       </span>

        <button onClick={this._sortByAscend(this)} value="name">
          昇順
        </button>
        <button onClick={this._sortByDescend.bind(this)} value="name">
          降順
        </button>
        </div>
        </div>
    );
    }
  }
  SortButton.propTypes = {
    handleSortByAscend: React.PropTypes,
    handleSortByDescend: React.PropTypes
  };

let data = [
//   { id: 1, name: 'foo' },
//   { id: 2, name: 'bar' },
//   { id: 3, name: 'baz' },
//   { id: 4, name: 'qux' },
//   { id: 5, name: 'quux' },
//   { id: 6, name: 'foobar' }
];

render(
  <App data={data} />, document.querySelector('.content')
);

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
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
 export default function StaffList001 () {
    const classes = useStyles();
    const [staff, setStaff] = useState([]);
    useEffect(() => getStaffData());
    const getStaffData = () => {
        if(staff.length === 0) {
            axios
              .get('/api/stafflist001/1')
              .then(response => {
                setStaff([response.data]);
              })
              .catch(() => {
                console.log('connected error');
              })
            }
    }
return(
<Grid>
    <Typography variant="h2">スタッフリスト</Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>スタッフID</StyledTableCell>
            <StyledTableCell align="right">スタッフ名</StyledTableCell>
            <StyledTableCell align="right">役職</StyledTableCell>
            <StyledTableCell align="right">所属会社</StyledTableCell>
            <StyledTableCell align="right">案件終了日</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staff.map((data) => (
            <StyledTableRow key={data.id}>
            <StyledTableCell component="th" scope="row">
                {data.id}
              </StyledTableCell>
              <StyledTableCell align="right"><Button>{data.name}</Button></StyledTableCell>
              <StyledTableCell align="right">{data.position}</StyledTableCell>
              <StyledTableCell align="right">{data.company_abbreviation}</StyledTableCell>
              <StyledTableCell align="right">{data.matter_end}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>      
    </TableContainer>
   </Grid>
)
};