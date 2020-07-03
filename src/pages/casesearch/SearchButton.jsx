import React from 'react';
import Button from '@material-ui/core/Button';



export default function SearchButton(props) {

  return (
    <div className={props.className}>
      <Button variant="contained" >
        検索
      </Button>
    </div>
  );
}
