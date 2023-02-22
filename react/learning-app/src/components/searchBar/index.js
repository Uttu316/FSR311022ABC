import React, { useState } from "react";
import { users } from "../../utils/data";

const SearchBar = ({ setList }) => {
  const [search, setSearch] = useState("");

  const onChangeInput = (e) => {
    const { value } = e.target;
    setSearch(value);
    const newUsers = users.filter(
      (i) =>
        i.firstName.toLowerCase().includes(value.toLowerCase()) ||
        i.lastName.toLowerCase().includes(value.toLowerCase())
    );
    setList(newUsers);
  };

  return (
    <input
      placeholder="Search User name"
      value={search}
      onChange={onChangeInput}
    />
  );
};

export default SearchBar;
