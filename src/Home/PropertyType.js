import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import "./PropertyType.css";
import React from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
});

function PropertyType({ title, input1, input2, image1, image2 }) {
  const classes = useStyles();
  return (
    <>
      <div className="header">
        <Typography variant="h3">{title}</Typography>
      </div>
      <div className="PropertyType">
        <div className="first">
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h3" color="textSecondary">
                {input1}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              alt="Under Construction"
              height="400"
              image={image1}
              title="Under Construction"
            />
          </Card>
        </div>
        <div className="second">
          <Card className={classes.root}>
            <CardMedia
              component="img"
              alt="Under Construction"
              height="400"
              image={image2}
              title="Under Construction"
            />
            <CardContent>
              <Typography variant="h3" color="textSecondary">
                {input2}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default PropertyType;
