import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';



export default function SelectItem (props) {

    return (
      <MenuItem key={props.key} value={props.value1}>
              {props.choice}
      </MenuItem>
    )
  
  }