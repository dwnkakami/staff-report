import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  // NotificationsNone as NotificationsIcon,
  // FormatSize as TypographyIcon,
  // FilterNone as UIElementsIcon,
  // BorderAll as TableIcon,
  // QuestionAnswer as SupportIcon,
  // LibraryBooks as LibraryIcon,
  // HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";
// import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
// import Dot from "./components/Dot";

// components
import { Typography } from "../Wrappers/Wrappers";
// import Notification from "../Notification/Notification";
// import UserAvatar from "../UserAvatar/UserAvatar";


// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";
import { useUserDispatch } from "../../context/UserContext";

const structure = [
  { id: 0, color: "#fff", label: "ホーム", link: "/staff-report/dashboard", icon: <HomeIcon /> },
  

  { id: 1,　type: "title", label: "スタッフ", },
  
  {
    id: 2,
    label: "スタッフリスト",
    link: "/staff-report/stafflist/001",
    icon: <img src="https://img.icons8.com/ios-filled/26/ffffff/user-folder--v2.png"/>,
  },
  
  { 
    id: 3,
    label: "スタッフ検索",
    link: "/staff-report/staffsearch/001",
    icon: <img src="https://img.icons8.com/ios-filled/26/ffffff/find-user-male.png"/>,
  },
  
  {
    id: 4,
    label: "スタッフ追加",
    link: "/staff-report/staffadd/001",
    icon: <img src="https://img.icons8.com/ios-filled/26/ffffff/add-user-male.png"/>,
  },


  { id: 5, type: "title", label: "案件", },

  { id: 6,
    label: "案件リスト",
    link: "/staff-report/caselist/001",
    icon: <img src="https://img.icons8.com/ios-filled/26/ffffff/documents-folder--v1.png"/>,
  },

  { id: 7,
    label: "案件検索",
    link: "/staff-report/casasearch/001",
    icon: <img src="https://img.icons8.com/ios-filled/26/ffffff/view-file.png"/>,
  },

  { id: 8,
    label: "案件登録",
    link: "/staff-report/caseadd/001",
    icon: <img src="https://img.icons8.com/ios-filled/26/ffffff/add-file.png"/>,
  },


  { id: 9, type: "title", label: "引合", },

  { id: 10,
    label: "引合リスト",
    link: "/staff-report/referencelist/001",
    icon: <img src="https://img.icons8.com/ios-filled/26/ffffff/downloads-folder.png"/>,
  },


  { id: 11, type: "title", label: "領収書",},

  { id: 12,
    label: "領収書発行",
    link: "/staff-report/billing/001",
    icon: <img src="https://img.icons8.com/ios-filled/26/ffffff/request-money.png"/>,
  },
]

function Sidebar({ location } ,props) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();
  var userDispatch = useUserDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
        
      </List>
      <div className={classes.profileMenuUser}>
        {/* <Typography className={classes.profileMenuLink}
              color="primary"
              onClick={() => signOut(userDispatch, props.history) }>ログアウト
        </Typography> */}
        <Typography className={classes.profileMenuLink}
              color="primary"
              // onClick={() => signOut(userDispatch, props.history) }>ログアウト
              onClick={() => {
                  localStorage.removeItem("id_token");
                  userDispatch({ type: "SIGN_OUT_SUCCESS" }); 
                  window.location.href = '/login';
                }}>ログアウト
        </Typography>
      </div>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
