import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: "space-between",
  },
  toolbarTitle: {
    // flex: 1,
  },
  Box: {
    // overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  // const sections = [{title: "About"}, {title: "Projects"}, {title: "Contact"}];

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          // style={{ paddingRight: "150px" }}
          className={classes.toolbarTitle}
        >
          Anna McIntosh
        </Typography>
        <img
          style={{ width: "100px" }}
          src="https://annamcintosh-portfolio.s3.amazonaws.com/MonogramBlockA-M.png"
          alt="monogram with the letters a and m"
        />
        <Link
          color="inherit"
          // key={}
          variant="body2"
          // href={}
          className={classes.toolbarLink}
        >
          About
        </Link>
        <Typography>/</Typography>
        <Link
          color="inherit"
          // key={}
          variant="body2"
          // href={}
          className={classes.toolbarLink}
        >
          Projects
        </Link>
        <Typography>/</Typography>
        <Link
          color="inherit"
          // key={}
          variant="body2"
          // href={}
          className={classes.toolbarLink}
        >
          Contact
        </Link>
      </Toolbar>
    </React.Fragment>
  );
}
