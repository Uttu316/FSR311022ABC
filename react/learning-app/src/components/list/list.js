import React, { useState } from "react";
import { users } from "../../utils/data";
import Card from "../card";
import SearchBar from "../searchBar";
import ListBox from "./listBox";
import styles from "./style.module.css";

const List = () => {
  const [list, setList] = useState(users);
  const [selectedUser, selectUser] = useState(null);
  return (
    <div className={styles.listContainer}>
      <SearchBar setList={setList} />
      <ListBox
        selectedUser={selectedUser}
        selectUser={selectUser}
        list={list}
      />

      {selectedUser && <Card user={selectedUser} />}
    </div>
  );
};

export default List;
