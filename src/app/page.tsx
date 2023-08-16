import styles from './page.module.scss'
import { MdDone } from "react-icons/md"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          This is my&nbsp;
          <code className={styles.code}>Todo App</code>
          <MdDone />
        </p>
      </div>
    </main>
  )
}
