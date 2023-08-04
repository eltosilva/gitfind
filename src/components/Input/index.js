import styles from './styles.module.css'

export default function Input(){
  return (
    <input className={styles.input} type='text' placeholder='@usuario' />
  )
}