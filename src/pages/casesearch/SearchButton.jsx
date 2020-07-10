import React from 'react';
import Button from '@material-ui/core/Button';



export default function SearchButton(props) {

  return (
    <div className={props.className}>
      <Button variant="contained" onClick={props.onClick} type={props.type}>
        検索
      </Button>
    </div>
  );
}
