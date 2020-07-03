import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  card: {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  },
  fullHeightBody: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  Icon: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  Licon: {
    position: "relative",
    height: "25%",
    width: "25%",
  },
  Picon: {
    height: "50%",
    width: "50%",
  },
}));
