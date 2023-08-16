import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          This is my&nbsp;
          <code className={styles.code}>Todo App</code>
        </p>
      </div>
    </main>
  )
}
