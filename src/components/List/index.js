import BoxBorderBottom from '../BoxBorderBottom'
import styles from './styles.module.css'

/**
 * 
 * @param {{
 *  list: Array<{
 *    name: string,
 *    description:string,
 *    html_url: string
 *  }>
 * }} param0 
 * @returns 
 */
export default function List({ list }) {
  return (
    <section>
      <h3 className={styles.title}>Repositórios</h3>
      <ul className={styles.list}>
        {
          list.map(item => (
            <li>
              <BoxBorderBottom>
                <h4 className={styles.repository}>
                  <a href={item.html_url} target='_blank' >{item.name}</a>
                </h4>
                <p className={styles.description}>{item.description}</p>
              </BoxBorderBottom>
            </li>

          ))
        }
      </ul>
    </section>
  )
}