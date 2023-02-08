import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
      <main className={styles.main}>
      <Head>
        <title>Next js GAMES | SkyDe </title>
        <meta name="description" content="collection of free online games" />
        <meta name="keywords" content="free, online, game"></meta>
        <meta name='author' content='Sky_De1991@outlook.com'/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Link href="/jumper">START JUMPER GAME</Link>
      </main>
  )
}
