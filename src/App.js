import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "./components/Card";

const useStyles = makeStyles(() => ({
  root: {
    minHeight: "100vh",
    background: "pink",
  },
  heading: {
    fontFamily: "times, Times New Roman, times-roman, georgia, serif",
    fontSize: "25px",
    lineHeight: "40px",
    letterSpacing: "-1px",
    color: "#444",
    fontWeight: "100",
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <h2 className={classes.heading}>Random Cat Fact Generator! </h2>

      <Grid item md={8} sm={8} xs={10}>
        <Card />
      </Grid>
    </Grid>
  );
}
