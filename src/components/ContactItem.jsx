import { Grid, Typography } from "@mui/material";
import React from "react";

const ContactItem = ({ item }) => {
  return (
    <Grid container alignItems="center">
      <Grid item md={1.3}>
        <img
          width={80}
          src="data:image/png;base64,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"
          alt="personimg"
        ></img>
      </Grid>
      <Grid item>
        <Typography>{item.name}</Typography>
        <Typography>{item.phoneNum}</Typography>
      </Grid>
    </Grid>
  );
};

export default ContactItem;
