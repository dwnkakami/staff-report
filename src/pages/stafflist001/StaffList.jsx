import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { getData }  from './M_staff';
import { Typography } from '@material-ui/core';

class App extends Component {
  constructor() {
    super() 
    // this.state = {
    //     initialItem:
    //     [
    //      getData.name,
    //      getData.position,
    //      getData.company_abbraviation
    //     ],
    //     items: []
    // }
    this.state = {
      initialItem: 
      [
        "apple",
        "tree",
        "pen",
        "mike",
        "dog",
        "cat",
        "iphone",
        "book"
      ],
      items: []
    }
  }

  componentDidMount() {
    this.setState({items: this.state.initialItem})
  }

  filterList = (e) => {
    const updateList = this.state.initialItem.filter((item) => {
      return item.toLowerCase().search( e.target.value.toLowerCase()) !== -1;
    })
    this.setState({items: updateList})
  }

  render() {
    return (
      <div>
        {/* <form action=""> */}
          <TextField onChange={this.filterList} label="Search" />
        {/* </form> */}
        <div>
          {this.state.items.map((item) => {
            return (
              <li>{item}</li>
            )  
          })}
        </div>
      </div>
    );
  }
}

export default App;
