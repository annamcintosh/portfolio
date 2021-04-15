import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { Divider, Link } from "@material-ui/core";

const useStyles = makeStyles({
  grid: {
      justifyItems: "center"
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
});

const projects = [
  {
    title: "Affirmation-Mart",
    environment: "React, DynamoDB, Serverless, etc etc etc",
    description: "An uplifting twist on e-commerce",
    github: "https://github.com/annamcintosh/affirmation-mart-frontend",
    url: "Deployed Site",
    image: "",
    imageTitle: "",
  },
  {
    title: "Stay Tonight ATL",
    environment: "React, DynamoDB, Serverless, etc etc etc",
    description: "An uplifting twist on e-commerce",
    github: "https://github.com/annamcintosh/stay-tonight-atl",
    url: "https://stay-tonight-atl.herokuapp.com/",
    image: "",
    imageTitle: "",
  },
  {
    title: "Torr Dynamics",
    environment: "React, DynamoDB, Serverless, etc etc etc",
    description: "An uplifting twist on e-commerce",
    github: "",
    url: "",
    image: "",
    imageTitle: "",
  },
];

export default function Projects() {
  const classes = useStyles();

  return (
    <Grid xs={12} md={10} className={classes.grid}>
      {projects.map((project) => (
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
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
              <Link variant="subtitle1" href={project.github} target="_blank">
                Deployed Site
              </Link>
              <Divider style={{ margin: "10px" }} />
              <Link variant="subtitle1" href={project.github} target="_blank">
                Github
              </Link>
            </CardContent>
          </div>
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
  );
}
