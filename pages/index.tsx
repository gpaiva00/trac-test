import Player from '../components/Player'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>     
      <main className={styles.main}>
      <Player />
      </main>
    </div>
  )
}
