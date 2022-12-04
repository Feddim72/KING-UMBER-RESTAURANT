import Image from "next/image";
import React from "react";
import A from "./A";

export const Nav = () => {
  return (
    <div className="relative min-h-screen w-full">
      <div className="nav min-h-screen w-full"></div>
      <div className="absolute left-0 top-0   flex flex-col items-center  min-h-screen w-full bg-black-transparent">
        {/* <A href="/">
          <Image src={"/logo.png"} width={200} height={190} quality={95} />
        </A>
        <div className="nav__link children:leading-[1em] children:tracking-wide children:m-4 text-base text-white mb-11 mt-2 flex flex-row justify-center flex-wrap sticky top-5">
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
        </div> */}
        <h1 className="mb-4 text-5xl leading-[1.1em] font-normal tracking-wide text-center mt-[340px]">
          KING UMBER RESTAURANT
        </h1>
        <div className="flex flex-col gap-1">
          <button className="button__nav">ORDER ONLINE</button>
          <button className="button__nav">BUY GIFT CARDS</button>
        </div>
      </div>
    </div>
  );
};
