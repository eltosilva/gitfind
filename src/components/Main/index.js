import Button from '../Button'
import Form from '../Form'
import Input from '../Input'
import List from '../List'
import Profile from '../Profile'
import styles from './styles.module.css'

export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Form>
          <Input />
          <Button>Buscar</Button>
        </Form>
        <Profile />
        <List />
      </div>
    </main>
  )
}