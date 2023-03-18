import Image from 'next/image'
import Link from 'next/link'
import ActualCountSkroll from './actualCountSkroll'

export const Nav = () => {
  const { scrollActualCount } = ActualCountSkroll()

  return (
    <>
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
            <Image src={'/logo.png'} width={200} height={190} quality={95} alt="logo" />
          </Link>
        </div>
        <ul
          className={`nav__link ${
            scrollActualCount > 400 && '!my-2'
          } sticky top-5 mb-11 mt-2 flex flex-row flex-wrap justify-center text-base text-white children:m-4 children:leading-[1em] children:tracking-wide`}
        >
          <li>
            <Link href="/menu">MENU</Link>
          </li>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/todaySpecial">{`TODAY'S SPECIAL`}</Link>
          </li>
          <li>
            <Link href="/reservation">RESERVATIONS</Link>
          </li>
          <li>
            <Link href="/birthdayClub">BIRTHDAY CLUB</Link>
          </li>
          <li>
            <Link href="/instagram">INSTAGRAM</Link>
          </li>
          <li>
            <Link href="/location">LOCATION</Link>
          </li>
          <li>
            <Link href="/recipes">RECIPES</Link>
          </li>
          <li>
            <Link href="/giftCards">GIFT CARDS</Link>
          </li>
          <li>
            <Link href="/orderOnline">ORDER ONLINE</Link>
          </li>
        </ul>
      </div>

      <div className="relative min-h-screen w-full">
        <div className="nav min-h-screen w-full"></div>
        <div className="absolute left-0 top-0   flex min-h-screen w-full  flex-col items-center bg-black-transparent">
          <h1 className="mb-4 mt-[340px] text-center text-5xl font-normal leading-[1.1em] tracking-wide">
            KING UMBER RESTAURANT
          </h1>
          <div className="flex flex-col gap-1">
            <button className="button__nav">ORDER ONLINE</button>
            <button className="button__nav">BUY GIFT CARDS</button>
          </div>
        </div>
      </div>
    </>
  )
}
