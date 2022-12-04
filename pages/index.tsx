import type { NextPage } from "next";
import Head from "next/head";
import {useState,useEffect} from "react";
import Image from "next/image";
import { FollowUsOnInstagram } from "../components/followUsOnInstagram";
import { ItemLandingFormBirhday } from "../components/itemLandingFormBirhday";
import { ItemLandingThree } from "../components/itemLandingThree";
import { ItemLandingTwo } from "../components/itemLandingTwo";
import { LandingBottomDescription } from "../components/landingBottomDescription";
import { Nav } from "../components/nav";
import styles from "../styles/Home.module.css";
import { FaBeer, FaTwitter } from "react-icons/fa";
import { Footer } from "../components/footer";
import A from "../components/A";
import ActualCountSkroll from "../components/actualCountSkroll";
const Home: NextPage = () => {
    
const {scrollActualCount}=ActualCountSkroll() 

  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza | Lepsza </title>
        <meta name="description" content="pizza Rzeszow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.main} text-white relative`}>
        <div className={`${scrollActualCount>550 &&' bg-black opacity-100 !fixed top-0 transition-all duration-500'} ${scrollActualCount>400 && ' opacity-0 w-full'} absolute test2 top-12 z-40 flex flex-col justify-center items-center`}>
          <A href="/" className={`${scrollActualCount > 400 && 'hidden'}`}>
            <Image src={"/logo.png"} width={200} height={190} quality={95} />
          </A>
          <div className={`nav__link ${scrollActualCount>400 && '!my-2' } children:leading-[1em] children:tracking-wide children:m-4 text-base text-white mb-11 mt-2 flex flex-row justify-center flex-wrap sticky top-5`}>
            <A href="/menu" text="MENU" />
            <A href="/" text="HOME" />
            <A href="/todaySpecial" text="TODAY'S SPECIAL" />
            <A href="/reservation" text="RESERVATIONS" />
            <A href="/birthdayClub" text="BIRTHDAY CLUB" />
            <A href="/instagram" text="INSTAGRAM" />
            <A href="/location" text="LOCATION" />
            <A href="/recipes" text="RECIPES" />
            <A href="/giftCards" text="GIFT CARDS" />
            <A href="/orderOnline" text="ORDER ONLINE" />
          </div>
        </div>
        <Nav />
        <ItemLandingTwo />
        <ItemLandingThree />
        <ItemLandingFormBirhday />
        <FollowUsOnInstagram />
        <LandingBottomDescription />
      </main>

      <Footer className={styles.footer} />
    </div>
  );
};

export default Home;
