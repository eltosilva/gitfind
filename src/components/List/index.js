import BoxBorderBottom from '../BoxBorderBottom'
import styles from './styles.module.css'

export default function List() {
  return (
    <section>
      <h3 className={styles.title}>Repositórios</h3>
      <ul className={styles.list}>
        <li>
          <BoxBorderBottom>
            <h4 className={styles.repository}>
              <a href='/#'>fisiotheapp-challenge</a>
            </h4>
            <p className={styles.description}>Full Stack Developer web and mobile, passionate to javascript and all your ecosystem.</p>
          </BoxBorderBottom>
        </li>
        <li>
          <BoxBorderBottom>
            <h4 className={styles.repository}>
              <a href='/#'>fisiotheapp-challenge</a>
            </h4>
            <p className={styles.description}>Full Stack Developer web and mobile, passionate to javascript and all your ecosystem.</p>
          </BoxBorderBottom>
        </li>
        <li>
          <BoxBorderBottom>
            <h4 className={styles.repository}>
              <a href='/#'>fisiotheapp-challenge</a>
            </h4>
            <p className={styles.description}>Full Stack Developer web and mobile, passionate to javascript and all your ecosystem.</p>
          </BoxBorderBottom>
        </li>
      </ul>
    </section>
  )
}