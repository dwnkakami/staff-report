import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

import Themes from "./themes";
// import App from "./components/App";
import StaffList003 from '../src/pages/staffList003/StaffList003';
// import S_003 from './pages/staffList003/S_003'
import * as serviceWorker from "./serviceWorker";
import { LayoutProvider } from "./context/LayoutContext";
import { UserProvider } from "./context/UserContext";

ReactDOM.render(
  <LayoutProvider>
    <UserProvider>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        {/* <App /> */}
        <StaffList003 />
        {/* <S_003 /> */}
      </ThemeProvider>
    </UserProvider>
  </LayoutProvider>,
  document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
