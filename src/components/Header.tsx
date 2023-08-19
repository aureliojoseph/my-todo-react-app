import styles from './Header.module.scss'

interface HeaderProps {
  text: string
}

export default function Header({ text }: HeaderProps) {
  return (
    <div className={styles.header}>
      <h1>{ text }</h1>
    </div>
  )
}
