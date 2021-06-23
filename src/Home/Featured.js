import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 10,
  },
  image: {
    width: 283,
    height: 195,
  },
  typo: {
    textAlign: "center",
  },
});

function Featured({ title, image, address }) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root} >
        <CardMedia
          component="img"
          alt="Featured Projects"
          image={image}
          title="Featured Projects"
          className={classes.image}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h6"
            component="h2"
            className={classes.typo}
          >
            {title}
          </Typography>
          <Typography className={classes.typo}>2,3,4 BHK</Typography>
          <Typography className={classes.typo}>Address, Gurgaon</Typography>
          <Typography className={classes.typo}>
            ₹1.33 CR to ₹3.83 CR{" "}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default Featured;
