import styles from './styles.module.css'

export default function Profile({ avatar_url, bio, html_url, login, name }) {
  return (
    <section>
      <div className={`line-bottom styles ${styles.flex}`}>
        <img className={styles.photo} src={avatar_url} alt='' />
        <div className={styles.person}>
          <div>
            <h2 className={styles.name}>{name}</h2>
            <a className={styles.github} href={html_url} alt={`Link para o github do ${name}`} target='_blank' rel='noreferrer' >@{login}</a>
          </div>
          <p>{bio}</p>
        </div>
      </div>
    </section>
  )
}