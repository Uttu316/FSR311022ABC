import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showToast } from "../../redux/actions/utilsActions";
import { getUserDetails } from "../../services/dashboard";
import { Toast, Loader } from "../utils";
import UserCard from "./userCard";
import styles from "./userDetails.module.css";

const UsersList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    getUserDetails()
      .then((res) => {
        setList(res);
      })
      .catch((err) => {
        dispatch(
          showToast({
            message: "Something Went Wrong",
          })
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const showList = !isLoading && list && !!list.data;
  return (
    <div className={styles.userDetailsWrapper}>
      {isLoading && <Loader />}
      {showList && (
        <div className={styles.userList}>
          {list.data.map((item) => (
            <UserCard userDetails={item} key={item.id} />
          ))}
        </div>
      )}
      <Toast />
    </div>
  );
};

export default UsersList;
