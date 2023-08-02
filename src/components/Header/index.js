import styles from './styles.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>GitFind</h1>
    </header>
  )
}