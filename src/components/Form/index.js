import styles from './styles.module.css'

export default function Form({ children }) {
  return (
    <form className={styles.form}>
      {children}
    </form>  
  )
}