import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

// pages
import Dashboard from "../../pages/dashboard/Dashboard";
import Typography from "../../pages/typography/Typography";
import Notifications from "../../pages/notifications/Notifications";
import Maps from "../../pages/maps/Maps";
import Tables from "../../pages/tables/Tables";
import Icons from "../../pages/icons/Icons";
import Charts from "../../pages/charts/Charts";

// import StaffList001 from "../pages/stafflist001";
 import StaffSearch_G from "../../pages/staffsearch/StaffSearch_G";
// import StaffList001 from "../../pages/stafflist001";
// import StaffSearch from "../../pages/staffsearch";
// import StaffAdd from "../../pages/staffadd";

//import CaseList from "../../pages/caselist";
//import CaseSearch from "../../pages/casesearch";
//import CaseAdd from "../../pages/caseadd";

//import ReferenceList from "../../pages/referencelist";
//import  from "../../pages/";　引合検索

//import Billing from "../../pages/billing";


// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/staff-report/dashboard" component={Dashboard} />
              <Route path="/app/typography" component={Typography} />
              <Route path="/app/tables" component={Tables} />
              {/* <Route path="/app/tables" component={StaffSearch_G} /> */}
              <Route path="/app/notifications" component={Notifications} />

              {/* <Route path="/staff-report/stafflist/001" component={StaffList001} /> */}
              {/* <Route path="/staff-report/staffsearch/001" component={StaffSearch} /> */}
              {/* <Route path="/staff-report/staffadd/001" component={StaffAdd} /> */}

              {/* <Route path="/staff-report/caselist/001" component={CaseList} /> */}
              {/* <Route path="/staff-report/casasearch/001" component={CaseSearch} /> */}
              {/* <Route path="/staff-report/caseadd/001" component={CaseAdd} /> */}

              {/* <Route path="/staff-report/referencelist/001" component={ReferenceList} /> */}
              {/* <Route path="" component={} /> 引合検索  */}
              
              {/* <Route path="/staff-report/billing/001" component={Billing} /> */}

              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);