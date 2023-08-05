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
  console.log(list)
  return (
    <section>
      <h3 className={styles.title}>Repositórios</h3>
      <ul className={styles.list}>
        {
          list.map(item => (
            <li className={`line-bottom`}>
              <h4 className={styles.repository}>
                <a href={item.html_url} alt={`Link para o repositório ${item.name}, no Github`} target='_blank' rel='noreferrer' >{item.name}</a>
              </h4>
              <p className={styles.description}>{item.description}</p>
            </li>

          ))
        }
      </ul>
    </section>
  )
}