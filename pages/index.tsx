import type { NextPage } from 'next'
import Head from 'next/head'
import { AboutAndContact } from '../components/aboutAndContact'
import { FollowUsOnInstagram } from '../components/followUsOnInstagram'
import { Footer } from '../components/footer'
import { FormBirhdaySpecialRewards } from '../components/formBirhdaySpecialRewards'
import { MakeReservation } from '../components/makeReservation'
import { Nav } from '../components/nav'
import { TodaysSpecials } from '../components/todaysSpecials'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza | Lepsza </title>
        <meta name="description" content="pizza Rzeszow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} relative text-white`}>
        <Nav />
        <TodaysSpecials />
        <MakeReservation />
        <FormBirhdaySpecialRewards />
        <FollowUsOnInstagram />
        <AboutAndContact />
      </main>

      <Footer />
    </div>
  )
}

export default Home
