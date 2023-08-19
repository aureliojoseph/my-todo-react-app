'use client'

import styles from './TodoList.module.scss'
import { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { MdCheck } from 'react-icons/md'

interface TodoListProps {
  todos: string[]
}

export default function TodoList({ todos }: TodoListProps) {
  const [selectedItems, setselectedItems] = useState<{[key: number]: boolean}>({})

  const toggleSelected = (index: number) => {
    setselectedItems((prevSelectedItems: any) => ({
      ...prevSelectedItems,
      [index]: !prevSelectedItems[index]
    }))
  }

  return (
    <div className={styles.list_container}>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className={styles.todo_list}>
            <div className={styles.item_container}>
              <input type="checkbox" onClick={() => toggleSelected(index)} />
              <p className={styles.todo_item}>{todo}</p>
            </div>
            {
              !selectedItems[index] ?
              <MdClose className={styles.list_icon} /> :
              <MdCheck className={styles.list_icon} />
            }
          </li>
        ))}
      </ul>
    </div>
  )
}
