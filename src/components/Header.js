import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: "center",
  },
  toolbarTitle: {
    paddingLeft: "15px"
  },
  Box: {
    // overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Link
          // component="h2"
          variant="h5"
          key="home"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
          href="/"
          style={{ textDecoration: "none" }}
        >
          Anna McIntosh
        </Link>
        <a href="/">
          <img
            style={{ width: "100px", marginLeft: "10px", marginRight: "10px" }}
            src="https://annamcintosh-portfolio.s3.amazonaws.com/MonogramBlockA-M.png"
            alt="monogram with the letters a and m"
          />
        </a>
        {/* <Link
          color="inherit"
          key="home"
          variant="body2"
          href="/"
          className={classes.toolbarLink}
        >
          Home
        </Link> */}
        {/* <Typography>/</Typography> */}
        <Link
          color="inherit"
          key="about"
          variant="body2"
          href="/about"
          className={classes.toolbarLink}
          style={{ textDecoration: "none" }}
        >
          About
        </Link>
        <Typography>/</Typography>
        <Link
          color="inherit"
          key="projects"
          variant="body2"
          href="/projects"
          className={classes.toolbarLink}
          style={{ textDecoration: "none" }}
        >
          Projects
        </Link>
        <Typography>/</Typography>
        <Link
          color="inherit"
          key="contact"
          variant="body2"
          href="/contact"
          className={classes.toolbarLink}
          style={{ textDecoration: "none" }}
        >
          Contact
        </Link>
      </Toolbar>
    </React.Fragment>
  );
}
