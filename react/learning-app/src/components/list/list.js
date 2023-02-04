import React, { useState } from 'react'
import { users } from '../../utils/data'
import Card from '../card'
import styles from './style.module.css'

const List = () => {
  const [list, setList] = useState(users)
  const [selectedUser, selectUser] = useState(null)
  const [search, setSearch] = useState('')

  const onClickItem = item => {
    selectUser(item)
  }
  const onChangeInput = e => {
    const { value } = e.target

    setSearch(value)

    const newUsers = users.filter(
      i =>
        i.firstName.toLowerCase().includes(value.toLowerCase()) ||
        i.lastName.toLowerCase().includes(value.toLowerCase())
    )

    setList(newUsers)
  }

  return (
    <div className={styles.listContainer}>
      <input
        placeholder='Search User name'
        value={search}
        onChange={onChangeInput}
      />
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

      {selectedUser && <Card user={selectedUser} />}
    </div>
  )
}

export default List
