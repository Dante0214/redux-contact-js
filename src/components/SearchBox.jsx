import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_NAME", payload: { searchName } });
  };
  return (
    <Box component="form" onSubmit={handleSearch} noValidate sx={{ mt: 1 }}>
      <Grid container alignItems="flex-start" spacing={2}>
        <Grid item xs={10}>
          <TextField
            margin="normal"
            onChange={(e) => setSearchName(e.target.value)}
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
            sx={{ height: "56px", mt: 2 }}
          >
            검색
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBox;
