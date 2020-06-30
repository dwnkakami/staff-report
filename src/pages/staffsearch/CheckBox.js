import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const CheckBox = (props) => {

    const [check, setCheck] = React.useState(false);
  
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