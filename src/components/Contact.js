import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { Avatar, Box, Link } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    marginTop: "20px",
    justifyContent: "center",
  },
  cardDetails: {
    // flex: 1,
    display: "flex",
    // flexDirection: "column",

    alignItems: "center",
    justifyContent: "center",
    // flexDirection: "column",
    // // flex: 1,
    // justifyContent: "center",
    // marginBottom: theme.spacing(2),
  },
  //   cardMedia: {
  //     width: 160,
  //   },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
}));

const contactInfo = [
  {
    icon: <EmailIcon />,
    title: "Email",
    email: "annamcintosh10@gmail.com",
    image: "",
    imageTitle: "",
  },
  {
    icon: <LinkedInIcon />,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/annamcintosh/",
    image: "",
    imageTitle: "",
  },
  {
    icon: <GitHubIcon />,
    title: "Github",
    url: "https://github.com/annamcintosh",
    image: "",
    imageTitle: "",
  },
];

export default function Contact() {
  const classes = useStyles();

  return (
    <Grid container spacing={3} style={{ justifyContent: "center" }}>
      {contactInfo.map((contactInfo) => (
        <Grid item xs={12} md={3}>
          <Card className={classes.card}>
            <Box className={classes.cardDetails}>
              <CardContent>
                <Avatar className={classes.avatar}>{contactInfo.icon}</Avatar>
                <Typography
                  component="h2"
                  variant="h4"
                >
                  {contactInfo.title}
                </Typography>
                {contactInfo.email ? (
                  <Typography variant="subtitle1" paragraph>
                    {contactInfo.email}
                  </Typography>
                ) : (
                  <Link
                    variant="subtitle1"
                    href={contactInfo.url}
                    target="_blank"
                  >
                    Go to {contactInfo.title}
                  </Link>
                )}
              </CardContent>
            </Box>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image={contactInfo.image}
                title={contactInfo.imageTitle}
              />
            </Hidden>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
