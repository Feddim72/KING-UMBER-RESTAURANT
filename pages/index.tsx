import type { NextPage } from "next";
import Head from "next/head";
import { FollowUsOnInstagram } from "../components/followUsOnInstagram";
import { FormBirhdaySpecialRewards } from "../components/formBirhdaySpecialRewards";
import { MakeReservation } from "../components/makeReservation";
import { TodaysSpecials } from "../components/todaysSpecials";
import { AboutAndContact } from "../components/aboutAndContact";
import { Nav } from "../components/nav";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza | Lepsza </title>
        <meta name="description" content="pizza Rzeszow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} text-white relative`}>
        <Nav />
        <TodaysSpecials />
        <MakeReservation />
        <FormBirhdaySpecialRewards />
        <FollowUsOnInstagram />
        <AboutAndContact />
      </main>

      <Footer className={styles.footer} />
    </div>
  );
};

export default Home;
