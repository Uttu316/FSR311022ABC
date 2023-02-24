import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Toast } from "../utils";
import UserCard from "./userCard";
import styles from "./userDetails.module.css";

const ContactList = () => {
  const contactedUser = useSelector((state) => state.user.contactedUser);

  const showList = (contactedUser || []).length > 0;

  return (
    <div className={styles.userDetailsWrapper}>
      {showList && (
        <div className={styles.userList}>
          {contactedUser.map((item) => (
            <UserCard userDetails={item} key={item.id} />
          ))}
        </div>
      )}
      {!showList && (
        <Typography variant="h5" textAlign={'center'} component={"h5"} color="gray" m={4}>
          No User Available 🗑
        </Typography>
      )}
      <Toast />
    </div>
  );
};

export default ContactList;
