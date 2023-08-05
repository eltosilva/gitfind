import styles from './styles.module.css'

export default function Form(props) {
  return (
    <form className={styles.form} {...props}>
      <input className={styles.input} type='text' placeholder='@usuario' name='user' />
      <button className={styles.button}>Buscar</button>
    </form>
  )
}
