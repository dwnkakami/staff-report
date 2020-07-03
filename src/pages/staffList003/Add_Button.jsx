import React, { Component } from 'react';
import StaffList003_figure from './StaffList003_figure';

class Add_Button extends Component {
 constructor(props) {
     super(props);

     this.state = {
         name: "button",
         add: [<StaffList003_figure />]
     }
 }
 render(){
     return (
         <div>
             {this.state.add}
         </div>
     )
 }
}

export default Add_Button;
