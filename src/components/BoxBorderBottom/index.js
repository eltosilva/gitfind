import styles from './styles.module.css'

export default function BoxBorderBottom({ children, className }) {
  return (
    <div className={`${styles.box} ${className}`}>{children}</div>
  )
}