import styles from './Footer.module.scss'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className={styles.footer}>
      Copyright &copy; <span>{ currentYear }</span> by Aurelio Borges
    </div>
  )
}
