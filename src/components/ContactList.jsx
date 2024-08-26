import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import { Box, Container, Grid, useMediaQuery } from "@mui/material";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { contactList, searchName } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (searchName.trim() !== "") {
      const lowercaseName = searchName.toLowerCase();
      const list = contactList.filter((item) =>
        item.name.toLowerCase().includes(lowercaseName)
      );
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [searchName, contactList]);
  return (
    <Container maxWidth={isMobile ? "xs" : "xl"}>
      <Grid container direction="column" justifyContent="center">
        <Grid item sx={{ width: isMobile ? "80%" : "50%" }}>
          <SearchBox />
        </Grid>
        <Grid item>
          <p>{filteredList.length}명</p>
          {filteredList.map((item, index) => (
            <ContactItem item={item} key={index} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactList;
