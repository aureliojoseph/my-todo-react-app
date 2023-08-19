'use client'

import styles from './AddButton.module.scss'
import { MdAdd } from 'react-icons/md'

interface AddButtonProps {
  type: string
  id: string
  handleAddTodo: (todo: string) => void
}

export default function AddButton({ type, id, handleAddTodo }: AddButtonProps) {
  const handleClick = () => {
    handleAddTodo('')
  }

  return (
    <div>
      <button
        className={styles.add_button}
        data-type={type}
        id={id}
        onClick={handleClick}
        >
          <MdAdd />
      </button>
    </div>
  )
}
