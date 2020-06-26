import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      float: 'left',
    },
  },
}));

export default function DeleteButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" >
        クリア
      </Button>
    </div>
  );
}
