import React, { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import { Grid } from "@mui/material";
import ContactItem from "./ContactItem";
import { useSelector } from "react-redux";

const ContactList = () => {
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
    <Grid container direction="column">
      <Grid item sx={{ width: "50%" }}>
        <SearchBox />
      </Grid>
      <Grid item>
        <p>{filteredList.length}명</p>
        {filteredList.map((item, index) => (
          <ContactItem item={item} key={index} />
        ))}
      </Grid>
    </Grid>
  );
};

export default ContactList;
