'use client'

import { useState } from 'react'
import styles from './page.module.scss'
import Header from '@/components/Header'
import Input from '@/components/Input'
import Footer from '@/components/Footer'
import TodoList from '@/components/TodoList'

export default function Home() {
  const [todos, setTodos] = useState<string[]>([])

  const addTodo = (todo: string) => {
    setTodos([...todos, todo])
  }

  return (
    <div className={styles.main}>
      <main className={styles.main_container}>
        <div className={styles.main_header}>
          <Header text={'Todo List'} />
          <div className={styles.input_container}>
            <Input
              type={'text'}
              name={'input-item'}
              id={'input-item'}
              placeholder={'Type here'}
              addTodo={addTodo}
            />
          </div>
        </div>

        <div className={styles.main_header}>
          {
            todos.length === 0 ? '' :
            <Header text={'Done'} />
          }
          <TodoList todos={todos} />
        </div>

      </main>

      <Footer />
    </div>
  )
}
