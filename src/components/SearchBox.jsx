import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";

const SearchBox = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={10}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="이름으로 검색"
            name="name"
            autoFocus
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            검색
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBox;
