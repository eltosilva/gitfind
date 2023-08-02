import Header from '../../components/Header';
import Main from '../../components/Main';
import styles from './styles.module.css';
import background from './github.png';

function App() {
  return (
    <>
      <img className={styles.background} src={background} alt=''/>
      <Header />
      <Main />
    </>
  );
}

export default App;
