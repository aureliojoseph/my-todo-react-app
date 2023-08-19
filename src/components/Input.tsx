'use client'

import { useState } from 'react'
import styles from './Input.module.scss'
import AddButton from './AddButton'

interface InputProps {
  type: string
  name: string
  id: string
  placeholder: string
  addTodo: (todo: string) => void
}

export default function Input({ type, name, id, placeholder, addTodo }: InputProps) {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value)
  }

  const handleAddTodo = () => {
    if (inputValue !== '') {
      addTodo(inputValue.trim())
      setInputValue('')
    }
  }

  // const handleEnterKeyDown = (event: any) => {
  //   if (event.key === 'Enter')
  //   event.preventDefault()
  //   handleAddTodo()
  // }

  return (
    <div className={styles.input_container}>
      <input
        className={styles.input}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        // onKeyDown={handleEnterKeyDown}
      />
      <AddButton
        type={'submit'}
        id={'add-button'}
        handleAddTodo={handleAddTodo}
      />
    </div>
  )
}
