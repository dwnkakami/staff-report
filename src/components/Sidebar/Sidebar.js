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
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "ホーム", link: "/app/dashboard", icon: <HomeIcon /> },
  { id: 1,　type: "title", label: "メニュー", },

  {
    id: 2,
    label: "スタッフ",
    link: "/staff-report/menu",
    icon: <ArrowDropDownIcon />,
    children: [
      { label: "スタッフリスト", link: "/staff-report/stafflist/001", icon: <Dot size="small" /> },
      { label: "スタッフ検索", link: "/staff-report/staffsearch/001", icon: <Dot size="small" /> },
      { label: "スタッフ追加", link: "/staff-report/staffadd/001", icon: <Dot size="small" />  },
    ],
  },
  // {
  //   id: 1,
  //   label: "Typography",
  //   link: "/app/typography",
  //   icon: <TypographyIcon />,
  // },
  {
    id: 3,
    label: "案件",
    link: "/staff-report/menu",
    icon: <ArrowDropDownIcon />,
    children: [
      { label: "案件リスト", link: "/staff-report/caselist/001", icon: <Dot size="small" /> },
      { label: "案件検索", link: "/staff-report/casasearch/001", icon: <Dot size="small" /> },
      { label: "案件登録", link: "staff-report/caseadd/001", icon: <Dot size="small" />  },
    ],
  },
  // { id: 2, label: "Tables", link: "/app/tables", icon: <TableIcon /> },
  {
    id: 4,
    label: "引合",
    link: "/staff-report/menu",
    icon: <ArrowDropDownIcon />,
    children: [
      { label: "引合リスト", link: "/staff-report/referencelist/001", icon: <Dot size="small" /> },
      { label: "引合検索", link: "", icon: <Dot size="small" /> },
    ],
  },
  // {
  //   id: 3,
  //   label: "Notifications",
  //   link: "/app/notifications",
  //   icon: <NotificationsIcon />,
  // },
  {
    id: 5,
    label: "領収書",
    link: "/staff-report/menu",
    icon: <ArrowDropDownIcon />,
    children: [
      { label: "領収書発行", link: "/staff-report/billing/001", icon: <Dot size="small" /> },
    ],
  },
  // {
  //   id: 4,
  //   label: "UI Elements",
  //   link: "/app/ui",
  //   icon: <UIElementsIcon />,
  //   children: [
  //     { label: "Icons", link: "/app/ui/icons" },
  //     { label: "Charts", link: "/app/ui/charts" },
  //     { label: "Maps", link: "/app/ui/maps" },
  //   ],
  // },
  {
    id: 6,
    label: "ログアウト",
    link: "",
  },
]
//   { id: 5, type: "divider" },
//   { id: 6, type: "title", label: "HELP" },
//   { id: 7, label: "Library", link: "", icon: <LibraryIcon /> },
//   { id: 8, label: "Support", link: "", icon: <SupportIcon /> },
//   { id: 9, label: "FAQ", link: "", icon: <FAQIcon /> },
//   { id: 10, type: "divider" },
//   { id: 11, type: "title", label: "PROJECTS" },
//   {
//     id: 12,
//     label: "My recent",
//     link: "",
//     icon: <Dot size="small" color="warning" />,
//   },
//   {
//     id: 13,
//     label: "Starred",
//     link: "",
//     icon: <Dot size="small" color="primary" />,
//   },
//   {
//     id: 14,
//     label: "Background",
//     link: "",
//     icon: <Dot size="small" color="secondary" />,
//   },
// ];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

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
