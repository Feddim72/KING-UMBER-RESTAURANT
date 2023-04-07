import { Link } from 'next-translate-routes'
import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
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
  queryKey?: string
}[]

export const Header = () => {
  const { t } = useTranslation('')

  const { route, query } = useRouter()
  const isHomePage = route === '/'
  const { scrollActualCount } = useCountSkroll()
  const [navPath, setNavPath] = useState<navPathType>([
    {
      expand: [
        { url: '/diningRoom', name: t('common:nav.diningRoom') },
        { url: '/pizzeria', name: t('common:nav.pizzeria') },
        { url: '/wineList', name: t('common:nav.wineList') },
        { url: '/catering', name: t('common:nav.catering') },
      ],
      name: `Menu`,
    },
    { url: '/', name: t('common:nav.home') },
    { url: '/', queryKey: 'todaysSpecial', name: t('common:nav.todaysSpecial') },
    { url: '/', queryKey: 'reservations', name: t('common:nav.reservations') },
    {
      url: '/',
      queryKey: 'formBirhdaySpecialRewards',
      name: t('common:nav.formBirhdaySpecialRewards'),
    },
    { url: '/', queryKey: 'followUsOnInstagram', name: t('common:nav.followUsOnInstagram') },
    { url: '/', queryKey: 'location', name: t('common:nav.location') },
    { url: '/recipes', name: t('common:nav.recipes') },
    { url: '/giftCard', name: t('common:nav.giftCard') },
    { url: '/orderOnline', name: t('common:nav.orderOnline') },
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

  const menuItems = navPath.map(({ name, url, expand, queryKey }) => {
    if (url) {
      const href = queryKey ? { pathname: url, query: { section: queryKey } } : url
      return (
        <li className="uppercase" key={name}>
          <Link href={href}>{name}</Link>
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
    }
  })

  useEffect(() => {
    const querySection = query.section
    if (typeof querySection == 'string') {
      scrollToElement(querySection)
    }
  }, [query])

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
        isHomePage={isHomePage}
        scrollActualCount={scrollActualCount}
        scrollToElement={scrollToElement}
        navPath={navPath}
      />
    </>
  )
}
