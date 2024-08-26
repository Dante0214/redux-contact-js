import { Box, Button, Container, CssBaseline, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNum } });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
          autoComplete="off"
        >
          <TextField
            margin="normal"
            required
            onChange={(e) => setName(e.target.value)}
            fullWidth
            id="name"
            label="이름"
            name="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            onChange={(e) => setPhoneNum(e.target.value)}
            fullWidth
            name="phonenumber"
            label="전화번호"
            id="phonenumber"
            type="number"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            추가
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
