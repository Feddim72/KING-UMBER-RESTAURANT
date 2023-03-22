import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useCountSkroll from '../../hooks/useCountSkroll'

export const Header = () => {
  const { route } = useRouter()
  const isHomePage = route === '/'
  const { scrollActualCount } = useCountSkroll()
  const [navPath, setNavPath] = useState([
    { url: '/menu', name: `MENU` },
    { url: '/', name: `HOME` },
    { url: '/todaySpecial', name: `TODAY'S SPECIAL` },
    { url: '/reservation', name: `RESERVATIONS` },
    { url: '/birthdayClub', name: `BIRTHDAY CLUB` },
    { url: '/instagram', name: `INSTAGRAM` },
    { url: '/location', name: `LOCATION` },
    { url: '/recipes', name: `RECIPES` },
    { url: '/giftCards', name: `GIFT CARDS` },
    { url: '/orderOnline', name: `ORDER ONLINE` },
  ])

  const menuItems = navPath.map(({ name, url }, index) => (
    <li key={index}>
      <Link href={url}>{name}</Link>
    </li>
  ))

  return (
    <header
      className={`absolute z-50 flex min-h-[336px] w-full justify-center ${
        !isHomePage && 'bg-black-transparent'
      }`}
    >
      <div
        className={`${
          scrollActualCount > 550 &&
          '!fixed !top-0 bg-black !opacity-100 transition-all duration-500'
        } ${
          scrollActualCount > 400 && 'w-full'
        } absolute top-12 z-40 flex flex-col items-center justify-center`}
      >
        <div className={`${scrollActualCount > 400 && 'hidden'}`}>
          <Link href="/">
            <Image
              src={'/logo.webp'}
              sizes="(max-width: 425px) 75vw,
                    (max-width: 1200px) 20vw,
                    15vw"
              width={200}
              height={190}
              alt="logo"
            />
          </Link>
        </div>
        <ul
          className={`nav__link ${
            scrollActualCount > 400 && '!my-2'
          } sticky top-5 mb-11 mt-2 flex flex-row flex-wrap justify-center text-base text-white children:m-4 children:leading-[1em] children:tracking-wide`}
        >
          {menuItems}
        </ul>
      </div>

      {isHomePage && (
        <div className="w-full">
          <div className={`flex w-full flex-col items-center`}>
            <h1 className="mb-4 mt-[470px] text-center text-5xl font-normal leading-[1.1em] tracking-wide text-white xl:mt-[340px]">
              KING UMBER RESTAURANT
            </h1>
            <div className="flex flex-col gap-1">
              <button className="button__nav">ORDER ONLINE</button>
              <button className="button__nav">BUY GIFT CARDS</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
