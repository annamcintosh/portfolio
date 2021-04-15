import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const aboutContent = {
  heading: "Authentic Storytelling",
  headingText:
    "I believe that relationships flourish with authentic storytelling. I am glad to share a bit of my story with you.",
  firstSubHeading: "The Elevator Pitch",
  firstText:
    "I am a Full-Stack Web Developer with relentless curiosity and eagerness to learn. I am passionate about finding ways to connect people to what matters to them. My background as a hospital chaplain orients me to approach every problem with the intent to listen for whose voices, experiences, and challenges are being heard - and whose aren’t. Creative problem solving begins with finding out what is meaningful to someone through genuine interaction and authentic storytelling. I believe technology can be a bridge between needs and resources, isolation and connection, dreams and fulfillment. ",
  secondSubHeading: "Experience",
  secondText:
    "I took the non-traditional route into the tech industry. After watching several close friends complete bootcamp programs, I decided to go it on my own as a self-taught developer while still working full-time in the chaplaincy field. I am grateful to have a community of peers who have guided and helped me along the way, keeping me briefed on current technologies and challenging me to reach for the advanced topics not covered in a bootcamp. I really loved being in school - I finished college in three years and completed a Master's degree with two certificates on time - and being in a field where learning is not only encouraged but required is terribly exciting. If you're interested in the details of the my tech stack, I'd be happy to send you my full resume. You can also take a glance at the Projects page to see some of my work.",
  thirdSubHeading: "Chaplaincy",
  thirdText:
    "My formal training is as a hospital chaplain. The role of the chaplain, at least in my practice, is to be the person that stands in the gap. Perhaps the most obvious way this is lived out is in the bedside care a chaplain provides, being present in moments of grief, celebration, transition, and fear. However, the chaplain also stands in the gap as a bridge to a divide. A chaplain must be able to speak the language of groups with different interests or priorities: patients, family, medical staff, physicians, hospital administration, and other chaplains. One of the beautiful things that chaplains can do is bring shared understanding of values to people that can sometimes appear at odds, helpingt to turn a group into a team. The gift of a chaplain is finding what a person or organization values and working to make sure that those values are at the center of the experience.",
};

const useStyles = makeStyles((theme) => ({
  box: {
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  heading: {
    paddingBottom: "10px",
  },
  subheading: {
    paddingBottom: "10px",
    paddingTop: "10px",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Typography variant="h3" className={classes.heading}>
        {aboutContent.heading}
      </Typography>
      <Typography variant="h6" style={{paddingTop: "10px", paddingBottom: "10px"}}>{aboutContent.headingText}</Typography>
      <Typography variant="h4" className={classes.subheading}>
        {aboutContent.firstSubHeading}
      </Typography>
      <Typography variant="subtitle1">{aboutContent.firstText}</Typography>
      <Typography variant="h4" className={classes.subheading}>
        {aboutContent.secondSubHeading}
      </Typography>
      <Typography variant="subtitle1">{aboutContent.secondText}</Typography>
      <Typography variant="h4" className={classes.subheading}>
        {aboutContent.thirdSubHeading}
      </Typography>
      <Typography variant="subtitle1">{aboutContent.thirdText}</Typography>
    </Box>
  );
}
