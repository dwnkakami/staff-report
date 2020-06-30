import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const CheckBox = (props) => {

    // const [check, setCheck] = React.useState({
    //     checked: false
    // });
  
    // const handleChange = (event) => {
    //     setCheck({...check, [event.target.name]:event.target.checked});
    // };

    return (
    <FormControlLabel
    control={
    <Checkbox 
    // checked={check}
    // onChange={handleChange}
    // name="checked"
    />
    }                                      
    label={props.name}
    />
    )
}

export default CheckBox;