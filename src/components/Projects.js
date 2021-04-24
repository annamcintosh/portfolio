import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { Box, Divider, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
  },
  card: {
    padding: "10px",
    margin: "10px",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  heading: {
    margin: "10px",
  },
}));

const projects = [
  {
    title: "Affirmation-Mart",
    environment:
      "DynamoDB, Serverless Framework, AWS Lambda, React, JavaScript, HTML5, CSS, Material-UI, bcrypt",
    description:
      "A full-stack single page web application that puts an uplifting twist on e-commerce. Users are given credits that allow them to order images of affirmations, delivered right to their email.",
    github: "https://github.com/annamcintosh/affirmation-mart-frontend",
    url: "https://affirmationmart.com",
    image: "",
    imageTitle: "",
  },
  {
    title: "Stay Tonight ATL",
    environment:
      "DynamoDB, Express, React, Node, JavaScript, GCP, HMTL5, CSS, Heroku, ReactStrap, bcrypt, JSON Web Tokens",
    description:
      "A full-stack single page web application that serves as a solution to users who are asked the question: “Do you know where I can stay tonight?” Stay Tonight ATL gives users a platform to share homeless shelter information in a collaborative approach to consolidating and distributing up-to-date information.",
    github: "https://github.com/annamcintosh/stay-tonight-atl",
    url: "https://stay-tonight-atl.herokuapp.com/",
    image: "",
    imageTitle: "",
  },
  {
    title: "Torr Dynamics",
    environment: "React, AWS Route 53, AWS Cloudfront",
    description:
      "A single page web application for Torr Dynamics, a new leader in the greenhouse glass world. This site is designed to meet the specific needs of their clients, who value simplicity, accessibility, and clear communication of how Torr Dynamics adds value to their greenhouse projects.",
    github: "",
    url: "",
    image: "",
    imageTitle: "",
  },
];

export default function Projects() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Typography variant="h3" className={classes.heading}>
        Featured Projects
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={10} className={classes.grid}>
          {projects.map((project) => (
            <Card className={classes.card}>
              <Box className={classes.cardDetails}>
                <CardContent>
                  <Typography component="h2" variant="h4">
                    {project.title}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    Environment: {project.environment}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {project.description}
                  </Typography>
                  {project.url === "" ? (
                    <Typography
                      variant="subtitle1"
                      target="_blank"
                    >
                      Deployed Site Under Construction
                    </Typography>
                  ) : (
                    <Link
                      variant="subtitle1"
                      href={project.url}
                      target="_blank"
                    >
                      Deployed Site
                    </Link>
                  )}
                  <Divider style={{ margin: "10px" }} />
                  {project.github === "" ? (
                    <Typography variant="subtitle1">
                      Due to privacy constraints, the Github repo for this project is
                      not available for distribution at this time.
                    </Typography>
                  ) : (
                    <Link
                      variant="subtitle1"
                      href={project.github}
                      target="_blank"
                    >
                      Github
                    </Link>
                  )}
                </CardContent>
              </Box>
              <Hidden xsDown>
                <CardMedia
                  className={classes.cardMedia}
                  image={project.image}
                  title={project.imageTitle}
                />
              </Hidden>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
