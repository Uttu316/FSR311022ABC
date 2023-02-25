import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMultipleUsers } from "../../redux/actions/userActions";
import { Toast } from "../utils";
import UserCard from "./userCard";
import styles from "./userDetails.module.css";

const ContactList = () => {
  const contactedUser = useSelector((state) => state.user.contactedUser);
  const dispatch  = useDispatch()

  const [selectedUsers, selectUser] = useState({});

  const showList = (contactedUser || []).length > 0;

  const allUsers = Object.keys(selectedUsers);

  const onDeleteAll = () => {
    dispatch(removeMultipleUsers(selectedUsers))
    selectUser({})
  };
  return (
    <div className={styles.userDetailsWrapper}>
      {showList && (
        <div className={styles.userList}>
          {contactedUser.map((item) => (
            <UserCard
              userDetails={item}
              key={item.id}
              hideMailButton={true}
              showDeleteButton={true}
              selectUser={selectUser}
              selectedUsers={selectedUsers}
            />
          ))}
        </div>
      )}
      {!showList && (
        <Typography
          variant="h5"
          textAlign={"center"}
          component={"h5"}
          color="gray"
          m={4}
        >
          No User Available 🗑
        </Typography>
      )}
      {!!allUsers.length && (
        <Stack justifyContent={"center"} alignItems="center" margin={4}>
          <Button onClick={onDeleteAll} variant="contained">
            Delete {allUsers.length}
          </Button>
        </Stack>
      )}
      <Toast />
    </div>
  );
};

export default ContactList;
