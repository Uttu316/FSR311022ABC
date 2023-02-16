import React, { useEffect, useState } from "react";
import { getUserList } from "../services/api";

const UsersList = (props) => {
  const [usersList, setUsersList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  const getUsers=()=>{
    setIsLoading(true)
    getUserList()
      .then((data) => {
        setUsersList(data)
      })
      .catch((err) => {
        console.log(err);
      }).finally(()=>{
        setIsLoading(false)
      })
  }
  useEffect(() => {
    getUsers()
  }, []);

  const users = (!isLoading && usersList&& usersList.data)||[]
  return (
    <div>
      <h1>I am User List</h1>
      <ul>
       {
        users.map((user)=>(
            <li key={user.id}>
                <img src={user.avatar} alt={user.first_name}/> 
                <span>
                    {user.first_name+' '+ user.last_name}
                </span>
            </li>
        ))
       }
      </ul>
    </div>
  );
};
export default UsersList;

/*
useEffect -> componentDidMount->[]
useEffect -> componentDidUpdate->[dependency1,dependency2]
useEffect -> componentWillunMount->[]+return ()=>{}


*/
