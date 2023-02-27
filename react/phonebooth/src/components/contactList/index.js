import { Button, Stack, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeMultipleUsers } from "../../redux/actions/userActions";
import Container from "../container";
import { Toast } from "../utils";
import UserCard from "./userCard";
import styles from "./userDetails.module.css";

const ContactList = () => {
  const contactedUser = useSelector((state) => state.user.contactedUser);
  const dispatch  = useDispatch()


  const divRef =  useRef(null);

  const counter2 = useRef(0);
 

  const [selectedUsers, selectUser] = useState({});
  const [counter,setCounter] = useState(0)

  const showList =  useMemo(()=>(contactedUser || []).length > 0,[contactedUser]);

  const allUsers =  useMemo(()=>{
   return  Object.keys(selectedUsers);
  },[selectedUsers])


  const onDeleteAll = useCallback(() => {
    dispatch(removeMultipleUsers(selectedUsers))
    selectUser({})
  },[selectedUsers]) 

  useEffect(()=>{
    if(counter>2){
      divRef.current.style.color ='red' //node(Dom Element)
    }
    if(counter>6){
      divRef.current.style.color ='green' //node(Dom Element)
    }
    if(counter>8){
      divRef.current.innerHTML ='Hello from Container' //node(Dom Element)
    }
  },[counter])
 
  const onCounter = ()=>{
    setCounter(counter+1)
    
  }
  const onCounter2  =()=>{
    counter2.current = counter2.current+1;
  }
  console.log(counter,counter2)

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
        <Container>
          <Button onClick={onDeleteAll} variant="contained">
            Delete {allUsers.length}
          </Button>
        </Container>
      )}


      <div ref={divRef}> I am Box </div>
      <button onClick={onCounter}>
          Count {counter}
      </button>
      <button onClick={onCounter2}>
          Count Ref {counter2.current}
      </button>
      <Toast />
    </div>
  );
};

export default ContactList;

