import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import FeaturedTiles from "./FeaturedTiles";

const useStyles = makeStyles((theme) => ({
  mainPage: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage:
      "url(https://annamcintosh-portfolio.s3.amazonaws.com/skyline.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainPageContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(12),
      paddingRight: 0,
    },
  },
}));

const featuredPosts = [
  {
    title: "About",
    description:
      "Learn more about Anna.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Projects",
    description:
      "Take a look at some favorite projects.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
  {
    title: "Contact",
    description:
      "Let's connect.",
    image: "https://source.unsplash.com/random",
    imageText: "Image Text",
  },
];
export default function Main() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.mainPage}>
        {
          <img
            style={{ display: "none" }}
            src="https://annamcintosh-portfolio.s3.amazonaws.com/skyline.jpg"
            alt="atlanta, georgia skyline"
          />
        }
        <div className={classes.overlay} />
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainPageContent}>
              <Typography
                component="h1"
                variant="h2"
                color="inherit"
                gutterBottom
              >
                Anna McIntosh
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Software Engineer
              </Typography>
              <Typography variant="subtitle1" color="inherit">
                Full-stack developer driven by relentless curiosity and
                eagerness to learn. I am passionate about finding ways to
                connect people to what matters to them.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={3}>
        {featuredPosts.map((post) => (
          <FeaturedTiles key={post.title} post={post} />
        ))}
      </Grid>
    </>
  );
}