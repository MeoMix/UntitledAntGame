import Head from 'next/head';
import Link from 'next/link';
import Blog from '../components/blog';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Untitled Ant Game</title>
        <meta name="description" content="Website for Untitled Ant Game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.center}>
          Hello, world
        </div>

        <div>
          <div>Projects</div>
          <ul>
            <li>
              <Link href="/projects/meo">Meo</Link>
            </li>
          </ul>
        </div>

        <div>
          <div>Software Development Blog</div>

          <Blog />
        </div>
      </main>
    </>
  )
}
