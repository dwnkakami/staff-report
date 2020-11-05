import React from 'react';
import Button from '@material-ui/core/Button';
import CaseList from '../caselist/CaseList';




export default function SearchButton(props) {

  return (
    <div className={props.className}>
      <Button variant="contained" onClick={props.onClick} type={props.type} style={{ backgroundColor: "#536dfe" }}>
        検索
      </Button>
    </div>
  );
}
