import BoxBorderBottom from '../BoxBorderBottom';
import styles from './styles.module.css'
import photo from './foto de rosto.jpeg'

export default function Profile() {
  return (
    <section>
      <BoxBorderBottom className={styles.flex}>
        <img className={styles.photo} src={photo} alt='' />
        <div className={styles.person}>
          <div>
            <h2 className={styles.name}>Elto Oliveira da Silva</h2>
            <span>@eltosilva</span>
          </div>
          <p>
            Full Stack Developer Web, passionate to Java and JavaScript
          </p>
        </div>
      </BoxBorderBottom>
    </section>
  )
}