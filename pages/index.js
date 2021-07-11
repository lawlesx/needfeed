import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'


export default function Home() {

  const router = useRouter();


  return (
    <div className={styles.Hcontainer}>
      <Head>
        <title>NeedFeed</title>
        <meta name="description" content="Feed The Hungry" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <div className='info'>
        <h1>Hi,</h1>
        <h1>Let me tell you that you can now Feed the Needed</h1>
        <p>Donate surplus food and we will redirect the food to those who need.</p>
      </div>
      <button className='button' onClick={ () => router.push('/details')}>Donate Food</button>
    </div>
  )
}
