import React, { useState } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckBox = (props) => {

    const [check, setCheck] = useState(false);
  
    const handleChange = (event) => {
        setCheck(event.target.checked);
    };

    return (
    <FormControlLabel
    control={
    <Checkbox color="primary"
    checked={check}
    onChange={handleChange}
    />
    }                                      
    label={props.name}
    />
    )
}

export default CheckBox;