import GameEngine from "../classes/GameEngine"
import styles from "../styles/Jumper.module.scss"
import Head from 'next/head'

export default function Jumper() {
    return(
        <main className={styles.jumper}>
            <Head>
              <title>Jumper Game | SkyDe </title>
              <meta name="description" content="you must be able to use both side of your brain for Win this game, HAVE A FUN!" />
              <meta name="keywords" content="free, online, game"></meta>
              <meta name='author' content='Sky_De1991@outlook.com'/>
              <link rel="icon" href="/favicon.ico" />
            </Head>
                    <GameEngine/>
        </main>
    )

}