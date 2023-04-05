import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import useCountSkroll from '../../hooks/useCountSkroll'
import DropdownMenu from '../common/dropdownMenu'
const MobileMenu = dynamic(() => import('./mobileMenu'))

export type navPathType = {
  expand?: {
    url: string
    name: string
  }[]
  name: string
  url?: string
  id?: string
}[]

export const Header = () => {
  const { route, push } = useRouter()
  const isHomePage = route === '/'
  const { scrollActualCount } = useCountSkroll()
  const [navPath, setNavPath] = useState<navPathType>([
    {
      expand: [
        { url: '/diningRoom', name: `Dining Room` },
        { url: '/pizzeria', name: `Pizzeria` },
        { url: '/wineList', name: `Wine list` },
        { url: '/catering', name: `Catering` },
      ],
      name: `Menu`,
    },
    { url: '/', name: `HOME` },
    { id: 'todaysSpecial', name: `TODAY'S SPECIAL` },
    { id: 'reservation', name: `RESERVATIONS` },
    { id: 'formBirhdaySpecialRewards', name: `BIRTHDAY CLUB` },
    { id: 'followUsOnInstagram', name: `INSTAGRAM` },
    { id: 'aboutAndContact', name: `LOCATION` },
    { url: '/recipes', name: `RECIPES` },
    { url: '/giftCards', name: `GIFT CARDS` },
    { url: '/orderOnline', name: `ORDER ONLINE` },
  ])

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 50
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  const handleClickLiNav = (id: string) => {
    isHomePage ? scrollToElement(id) : push('/').finally(() => scrollToElement(id))
  }

  const menuItems = navPath.map(({ name, url, expand, id }) => {
    if (url) {
      return (
        <li className="uppercase" key={name}>
          <Link href={url}>{name}</Link>
        </li>
      )
    } else if (expand) {
      return (
        <DropdownMenu key={name} title={name}>
          <ul className="cursor-pointer uppercase">
            {expand.map((item) => {
              return (
                <li className="whitespace-nowrap py-2 uppercase" key={item.name}>
                  <Link href={item.url}>{item.name}</Link>
                </li>
              )
            })}
          </ul>
        </DropdownMenu>
      )
    } else {
      return (
        <li
          onClick={() => id && handleClickLiNav(id)}
          className="cursor-pointer uppercase"
          key={name}
        >
          {name}
        </li>
      )
    }
  })

  return (
    <>
      <header
        className={`absolute z-50 flex min-h-[336px] w-full justify-center tablet:hidden  ${
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
                className="tablet:w-36 mobileL:w-24"
                src={'/logo.webp'}
                sizes="(max-width: 425px) 35vw,
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
      </header>

      <MobileMenu
        scrollActualCount={scrollActualCount}
        handleClickLiNav={handleClickLiNav}
        navPath={navPath}
      />
    </>
  )
}
