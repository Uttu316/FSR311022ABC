import { Typography } from "@mui/material";
import React from "react";
import ContactList from "../../components/contactList";
import Header from "../../components/header";


const Contacts = () => {
  

  return (
    <div>
      <Header />
      <Typography variant="h4" component={"h4"} color="secondary" m={4}>
        Contacts 👫
      </Typography>
      <ContactList/>
    </div>
  );
};

export default Contacts;
