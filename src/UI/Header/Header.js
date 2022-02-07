import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    marginBottom: theme.spacing(1),
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {},
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.title}>
          TODO KEEPER
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
