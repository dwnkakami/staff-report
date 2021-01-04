import React from "react";
import { Link } from 'react-router-dom'
import { Grid } from "@material-ui/core";

import Button from "@material-ui/core/Button";
// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import AssignmentIcon from '@material-ui/icons/Assignment';
// import DescriptionIcon from '@material-ui/icons/Description';
// import LocalAtmIcon from '@material-ui/icons/LocalAtm';

// import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
// import ListIcon from '@material-ui/icons/List';
// import AddIcon from '@material-ui/icons/Add';
// import SearchIcon from '@material-ui/icons/Search';

// import { green } from '@material-ui/core/colors';
// import { blue } from '@material-ui/core/colors';
// import { yellow } from '@material-ui/core/colors';

// styles
import useStyles from "./styles";

// components
import Widget from "../../components/Widget";

export default function Dashboard(props) {
  var classes = useStyles();

  return (
    <>
    {/* <div> */}
    <Grid container spacing={1}>
      {/* <Grid item lg={2} md={4} sm={6} xs={12}> */}
      <Grid item xs={12} sm={3}>
      <Link to="/staff-report/stafflist/001">
       <Widget
        title="スタッフリスト"
        upperTitle
        bodyClass={classes.fullHeightBody}
        className={classes.card}
       >
      <div className={classes.Icon}>
        <Button variant="contained" style={{ background: "#4FC3F7" }} className={classes.Icon}>
          <img src="https://img.icons8.com/ios-filled/100/000000/user-folder--v2.png"/>
        </Button>
      </div>
      </Widget>
      </Link>
    </Grid>
    {/* <Grid item lg={2} md={4} sm={6} xs={12}> */}
    <Grid item xs={12} sm={3}>
      <Link to="/staff-report/staffsearch/001">
      <Widget
        title="スタッフ検索"
        upperTitle
        bodyClass={classes.fullHeightBody}
        className={classes.card}
       >
      <div className={classes.Icon}>
        <Button variant="contained" style={{ background: "#4FC3F7" }} className={classes.Icon}>
          <img src="https://img.icons8.com/ios-filled/100/000000/find-user-male.png"/>
        </Button>
      </div>
      </Widget>
      </Link>
    </Grid>
    {/* <Grid item lg={2} md={4} sm={6} xs={12}> */}
    <Grid item xs={12} sm={3}>
      <Link to="/staff-report/staffadd/001">
      <Widget
        title="スタッフ追加"
        upperTitle
        bodyClass={classes.fullHeightBody}
        className={classes.card}
       >
      <div className={classes.Icon}>
        <Button variant="contained" style={{ background: "#4FC3F7" }} className={classes.Icon}>
          <img src="https://img.icons8.com/ios-filled/100/000000/add-user-male.png"/>
        </Button>
      </div>
      </Widget>
      </Link>
    </Grid>
    </Grid>
    {/* </Grid> */}
    {/* </div> */}

    {/* <div> */}
    {/* <Grid container spacing={10}> */}
      {/* <Grid item lg={2} md={4} sm={6} xs={12}> */}
      <Grid container spacing={1}>
      <Grid item xs={12} sm={3}>
        <Link to="/staff-report/caselist/001">
        <Widget
          title="案件リスト"
          upperTitle
          bodyClass={classes.fullHeightBody}
          className={classes.card}
        >
        <div className={classes.Icon}>
          <Button variant="contained" style={{ background: "#FFF176" }} className={classes.Icon}>
            <img src="https://img.icons8.com/ios-filled/100/000000/documents-folder--v1.png"/>
          </Button>
        </div>
        </Widget>
        </Link>
      </Grid>
      {/* <Grid item lg={2} md={4} sm={6} xs={12}> */}
      <Grid item xs={12} sm={3}>
        <Link to="/staff-report/casasearch/001">
        <Widget
          title="案件検索"
          upperTitle
          bodyClass={classes.fullHeightBody}
          className={classes.card}
        >
        <div className={classes.Icon}>
          <Button variant="contained" style={{ background: "#FFF176" }} className={classes.Icon}>
            <img src="https://img.icons8.com/ios-filled/100/000000/view-file.png"/>
          </Button>
        </div>
        </Widget>
        </Link>
      </Grid>
      {/* <Grid item lg={2} md={4} sm={6} xs={12}> */}
      <Grid item xs={12} sm={3}>
        <Link to="/staff-report/caseadd/001">
        <Widget
          title="案件登録"
          upperTitle
          bodyClass={classes.fullHeightBody}
          className={classes.card}
        >
        <div className={classes.Icon}>
          <Button variant="contained" style={{ background: "#FFF176" }} className={classes.Icon}>
            <img src="https://img.icons8.com/ios-filled/100/000000/add-file.png"/>
          </Button>
        </div>
        </Widget>
        </Link>
      </Grid>
      </Grid>
    {/* </Grid> */}
    {/* </div> */}

    {/* <div> */}
    {/* <Grid container spacing={10}> */}
      {/* <Grid item lg={2} md={4} sm={6} xs={12}> */}
      <Grid container spacing={1}>
      <Grid item xs={12} sm={3}>
      <Link to="/staff-report/referencelist/001">
      <Widget
       title="引合リスト"
       upperTitle
       bodyClass={classes.fullHeightBody}
       className={classes.card}
      >
      <div className={classes.Icon}>
        <Button variant="contained" style={{ background:　"#aeea00" }} className={classes.Icon}>
          <img src="https://img.icons8.com/ios-filled/100/000000/downloads-folder.png"/>
        </Button>
      </div>
      </Widget>
      </Link>
      </Grid>
      {/* <Grid item lg={2} md={4} sm={6} xs={12}> */}
      <Grid item xs={12} sm={3}>
      <Link to="/staff-report/billing/001">
      <Widget
       title="領収書発行"
       upperTitle
       bodyClass={classes.fullHeightBody}
       className={classes.card}
      >
        <div className={classes.Icon}>
          <Button variant="contained" style={{ background:　"#eeeeee" }} className={classes.Icon}>
            <img src="https://img.icons8.com/ios-filled/100/000000/request-money.png"/>
          </Button>
        </div>
       </Widget>
       </Link>
        </Grid>
       </Grid>
      {/* </div> */}
    </>
  );
}