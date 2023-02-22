import React, { useState } from "react";
import styles from './style.module.css'


const ListBox = ({list,selectUser,selectedUser})=>{
   
    const onClickItem = item => {
        selectUser(item)
      }
    return(
        <ul className={styles.list}>
        {list.map(item => (
          <li
            key={item.id}
            style={{
              background:
                selectedUser && selectedUser.id === item.id ? 'pink' : 'salmon'
            }}
            className={styles.listItem}
            onClick={() => onClickItem(item)}
          >
            <p>
              <span>{item.firstName}</span>
              <span>{item.lastName}</span>
            </p>
            <p>
              <span>{item.email}</span>
              <span>{item.phone}</span>
            </p>
          </li>
        ))}
      </ul>
    )
}
export default ListBox