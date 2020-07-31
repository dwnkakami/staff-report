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
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import StaffAdd from "../../pages/staffadd/StaffAdd";

import CaseSearch from "../../pages/casesearch/CaseSearch";
import CaseResult from "../../pages/casesearch/CaseResult";
import StaffSearch from "../../pages/staffsearch/StaffSearch";
import StaffList_result from "../../pages/staffsearch/StaffList_result";

import CaseList from "../../pages/caselist/CaseList";
import CaseAdd from "../../pages/caseadd/CaseAdd";

<<<<<<< HEAD
// import ReferenceList from "../../pages/referencelist/ReferenceList";
// import ReferenceList_not from "../../pages/referencelist/notData";
//import  from "../../pages/";　引合検索
=======
import ReferenceList from "../../pages/referenceList/ReferenceList";
import ReferenceList_not from "../../pages/referenceList/notData";
>>>>>>> a5c62e88242292718d87e1d128558e87816c3683

//import Billing from "../../pages/billing/Billing";


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
<<<<<<< HEAD
              <Route path="/app/tables" component={Tables} />
              {/* <Route path="/app/tables" component={ReferenceList} /> */}
              <Route path="/app/notifications" component={Notifications} />

              {/* <Route path="/staff-report/stafflist/001" component={StaffList001} /> */}
              {/* <Route path="/staff-report/staffsearch/001" component={StaffSearch} /> */}
=======
              <Route path="/app/notifications" component={Notifications} />

              <Route path="/staff-report/stafflist/001" component={StaffList001} />
              <Route path="/staff-report/staffsearch/001" component={StaffSearch} />
              <Route path="/staff-report/stafflist-result/001" component={StaffList_result} />
>>>>>>> a5c62e88242292718d87e1d128558e87816c3683
              <Route path="/staff-report/staffadd/001" component={StaffAdd} />

              <Route path="/staff-report/caselist/001" component={CaseList} />
              <Route path="/staff-report/casasearch/001" component={CaseSearch} />
              <Route path="/staff-report/caseresult/001" component={CaseResult} />
              <Route path="/staff-report/caseadd/001" component={CaseAdd} />

<<<<<<< HEAD
              {/* <Route path="/staff-report/referencelist/001" component={ReferenceList} /> */}
              {/* <Route path="/staff-report/referencelist/001" component={ReferenceList_not} /> */}
              {/* <Route path="" component={} /> 引合検索  */}
=======
              <Route path="/staff-report/referencelist/001" component={ReferenceList} />
              <Route path="/staff-report/referencelist/001" component={ReferenceList_not} />
>>>>>>> a5c62e88242292718d87e1d128558e87816c3683
              
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
