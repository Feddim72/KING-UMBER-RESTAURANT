import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import MediaBackground from '../components/common/mediaBackground'

const MakeReservation = dynamic(() => import('../components/home/makeReservation'))
const TodaysSpecials = dynamic(() => import('../components/home/todaysSpecial'))
const FormBirhdaySpecialRewards = dynamic(
  () => import('../components/home/formBirhdaySpecialRewards')
)
const FollowUsOnInstagram = dynamic(() => import('../components/home/followUsOnInstagram'))
const AboutAndContact = dynamic(() => import('../components/home/aboutAndContact'))

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KING UMBER | RESTAURANT</title>
        <meta name="description" content="KING UMBER | RESTAURANT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MediaBackground mode="home" />
      <TodaysSpecials />
      <MakeReservation />
      <FormBirhdaySpecialRewards />
      <FollowUsOnInstagram />
      <AboutAndContact />
    </>
  )
}

export default Home
