import { useState } from 'react'
import Form from '../Form'
import List from '../List'
import Profile from '../Profile'
import styles from './styles.module.css'

const URL_BASE = 'https://api.github.com/users'

export default function Main() {

  const [currentUser, setCurrentUser] = useState(null)
  const [listRepos, setListRepos] = useState(null)

  async function submit(event) {
    event.preventDefault()

    const userName = event.target.elements.user.value
    const user = await fetchUser(`${URL_BASE}/${userName}`)

    if (user.name) {
      setCurrentUser(user)
      const repositories = await fetchRepos(`${URL_BASE}/${userName}/repos`)
      setListRepos(repositories)
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Form onSubmit={submit} />
        {!!currentUser ? (
          <>
            <Profile {...currentUser} />
            {listRepos && <List list={listRepos} />}
          </>
        ) : null}
      </div>
    </main>
  )
}

async function fetchUser(url) {
  const { avatar_url, bio, html_url, login, name } = await fetch(url).then(value => value.json())

  return { avatar_url, bio, html_url, login, name }
}

async function fetchRepos(url) {
  const listRepos = await fetch(url).then(value => value.json())
  
  return listRepos.map(repos => {
    const { name, description, html_url } = repos
    return { name, description, html_url }
  })
}
