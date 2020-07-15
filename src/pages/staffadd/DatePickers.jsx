import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
//   KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
// import { makeStyles } from '@material-ui/core';


// const useStyles = makeStyles((theme) => ({
//   root: {
//     // margin: theme.spacing(1),
//     float:'left',
//     width:300,
//     // marginTop:10,
//   },
// }));

export default function DatePickers(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
//   const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} >
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/dd"
          margin="normal"
          id="date-picker-inline"
        //   label={props.label}
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}