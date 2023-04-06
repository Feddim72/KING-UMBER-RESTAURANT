import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { navPathType } from './header'

interface MobileMenuProps {
  navPath: navPathType
  scrollToElement: (id: string) => void
  scrollActualCount: number
  isHomePage: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  navPath,
  scrollToElement,
  scrollActualCount,
  isHomePage,
}) => {
  const [isExpandMenu, setIsExpandMenu] = useState<boolean>(false)
  const [isMobileNavToggleChecked, setIsMobileNavToggleChecked] = useState<boolean>(false)

  const handleMobileNavToggleChange = () => {
    setIsMobileNavToggleChecked(!isMobileNavToggleChecked)
    setIsExpandMenu(false)

    document.body.style.overflow = isMobileNavToggleChecked ? 'auto' : 'hidden'
  }
  const menuItems = navPath.map(({ name, expand, url, queryKey }) => {
    if (url) {
      const href = queryKey ? { pathname: url, query: { section: queryKey } } : url

      return (
        <li key={name}>
          <Link onClick={() => handleMobileNavToggleChange()} href={href}>
            {name}
          </Link>
        </li>
      )
    } else if (expand) {
      return expand.map(({ name, url }) => (
        <li className={`${isExpandMenu ? 'block' : 'hidden'}`} key={name}>
          <Link onClick={() => handleMobileNavToggleChange()} href={url}>
            {name}
          </Link>
        </li>
      ))
    }
  })
  return (
    <>
      <style jsx global>{`
        .mobile-nav-toggle-label {
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          z-index: 1010;
          width: 10%;
          position: absolute;
          z-index: 100;
          top: 20px;
          left: 20px;
          padding: 0;
          vertical-align: middle;
          line-height: 16px;
          text-align: right;
          cursor: pointer;
          user-select: none;
          color: #fff;
          width: 22px;
          height: 22px;
        }

        .mobile-nav-toggle-label .top-bar,
        .mobile-nav-toggle-label .middle-bar,
        .mobile-nav-toggle-label .bottom-bar {
          width: 22px;
          height: 2px;
          background-color: #fff;
          -webkit-transition: -webkit-transform 0.1s 0s ease-in-out, top 0.1s 0.1s ease-in-out;
          -moz-transition: -moz-transform 0.1s 0s ease-in-out, top 0.1s 0.1s ease-in-out;
          -ms-transition: -ms-transform 0.1s 0s ease-in-out, top 0.1s 0.1s ease-in-out;
          -o-transition: -o-transform 0.1s 0s ease-in-out, top 0.1s 0.1s ease-in-out;
          transition: transform 0.1s 0s ease-in-out, top 0.1s 0.1s ease-in-out;
          -webkit-transform-origin: 50% 50%;
          -moz-transform-origin: 50% 50%;
          -ms-transform-origin: 50% 50%;
          -o-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
          position: absolute;
          top: 0;
          right: 0;
        }

        .mobile-nav-toggle-label .middle-bar {
          -webkit-transition: opacity 0s 0.15s linear;
          -moz-transition: opacity 0s 0.15s linear;
          -ms-transition: opacity 0s 0.15s linear;
          -o-transition: opacity 0s 0.15s linear;
          transition: opacity 0s 0.15s linear;
          top: 7px;
        }

        .mobile-nav-toggle-label .bottom-bar {
          top: 14px;
        }

        #overlayNav {
          position: fixed;
          z-index: 100;
          width: 100%;
          height: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          opacity: 0;
          visibility: hidden;
          line-height: 1em;
          text-align: left;
          overflow: auto;
          pointer-events: none;
          background-color: rgba(0, 0, 0, 0.97);
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-transition: opacity 0.14s 0s ease-in-out, visibility 0s 0.14s linear;
          -moz-transition: opacity 0.14s 0s ease-in-out, visibility 0s 0.14s linear;
          -ms-transition: opacity 0.14s 0s ease-in-out, visibility 0s 0.14s linear;
          -o-transition: opacity 0.14s 0s ease-in-out, visibility 0s 0.14s linear;
          transition: opacity 0.14s 0s ease-in-out, visibility 0s 0.14s linear;
        }

        #overlayNav #mobileNavWrapper {
          position: relative;
          width: 100%;
          height: 101%;
          padding: 100px 0;
          display: table;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          text-align: center;
          font-size: 24px;
        }

        #overlayNav #mobileNavWrapper nav {
          padding: 0;
          display: table-cell;
          vertical-align: middle;
        }

        #overlayNav #mobileNavWrapper nav div {
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }

        #overlayNav #mobileNavWrapper nav div a,
        #overlayNav #mobileNavWrapper nav div label {
          display: block;
          padding: 0.5em 0;
          font-size: 54px;
        }

        #mobileNavToggle:checked ~ #header {
          pointer-events: none;
          background-color: transparent;
        }

        #mobileNavToggle:checked ~ #header .mobile-nav-toggle-label {
          pointer-events: auto;
        }

        #mobileNavToggle:checked ~ #header h1 {
          pointer-events: auto;
        }

        #mobileNavToggle:checked ~ #header .mobile-nav-toggle-label,
        #mobileNavToggle:checked ~ .show-on-scroll-wrapper .mobile-nav-toggle-label {
          z-index: 100;
        }

        #mobileNavToggle:checked ~ #header .mobile-nav-toggle-label .top-bar,
        #mobileNavToggle:checked ~ .show-on-scroll-wrapper .mobile-nav-toggle-label .top-bar,
        #mobileNavToggle:checked ~ #header .mobile-nav-toggle-label .bottom-bar,
        #mobileNavToggle:checked ~ .show-on-scroll-wrapper .mobile-nav-toggle-label .bottom-bar {
          -webkit-transition: top 0.1s 0.1s ease-in-out, -webkit-transform 0.1s 0.2s ease-in-out;
          -moz-transition: top 0.1s 0.1s ease-in-out, -moz-transform 0.1s 0.2s ease-in-out;
          -ms-transition: top 0.1s 0.1s ease-in-out, -ms-transform 0.1s 0.2s ease-in-out;
          -o-transition: top 0.1s 0.1s ease-in-out, -o-transform 0.1s 0.2s ease-in-out;
          transition: top 0.1s 0.1s ease-in-out, transform 0.1s 0.2s ease-in-out;
        }

        #mobileNavToggle:checked ~ #header .mobile-nav-toggle-label .top-bar,
        #mobileNavToggle:checked ~ .show-on-scroll-wrapper .mobile-nav-toggle-label .top-bar {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
          top: 7px;
        }

        #mobileNavToggle:checked ~ #header .mobile-nav-toggle-label .middle-bar,
        #mobileNavToggle:checked ~ .show-on-scroll-wrapper .mobile-nav-toggle-label .middle-bar {
          opacity: 0;
        }

        #mobileNavToggle:checked ~ #header .mobile-nav-toggle-label .bottom-bar,
        #mobileNavToggle:checked ~ .show-on-scroll-wrapper .mobile-nav-toggle-label .bottom-bar {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -ms-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
          top: 7px;
        }

        #mobileNavToggle:checked ~ .show-on-scroll-wrapper .mobile-nav-toggle-label .top-bar,
        #mobileNavToggle:checked ~ .show-on-scroll-wrapper .mobile-nav-toggle-label .bottom-bar {
          top: 17px;
        }

        #mobileNavToggle:checked ~ #overlayNav {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          -webkit-overflow-scrolling: touch;
          -webkit-transition: opacity 0.14s 0s ease-in-out, visibility 0s 0s linear;
          -moz-transition: opacity 0.14s 0s ease-in-out, visibility 0s 0s linear;
          -ms-transition: opacity 0.14s 0s ease-in-out, visibility 0s 0s linear;
          -o-transition: opacity 0.14s 0s ease-in-out, visibility 0s 0s linear;
          transition: opacity 0.14s 0s ease-in-out, visibility 0s 0s linear;
        }

        #mobileNavToggle:checked ~ #overlayNav nav {
          -webkit-transform: scale(1, 1);
          -moz-transform: scale(1, 1);
          -ms-transform: scale(1, 1);
          -o-transform: scale(1, 1);
          transform: scale(1, 1);
          opacity: 1;
          visibility: visible;
          -webkit-transition: opacity 0.14s 0.14s ease-in-out, visibility 0s 0s linear,
            -webkit-transform 0.14s 0.18s ease-in-out;
          -moz-transition: opacity 0.14s 0.14s ease-in-out, visibility 0s 0s linear,
            -moz-transform 0.14s 0.18s ease-in-out;
          -ms-transition: opacity 0.14s 0.14s ease-in-out, visibility 0s 0s linear,
            -ms-transform 0.14s 0.18s ease-in-out;
          -o-transition: opacity 0.14s 0.14s ease-in-out, visibility 0s 0s linear,
            -o-transform 0.14s 0.18s ease-in-out;
          transition: opacity 0.14s 0.14s ease-in-out, visibility 0s 0s linear,
            transform 0.14s 0.18s ease-in-out;
        }

        .show-on-scroll-wrapper {
          position: fixed;
        }

        @media screen and (max-width: 769px) {
          .show-on-scroll-wrapper .mobile-nav-toggle-label .top-bar,
          .show-on-scroll-wrapper .mobile-nav-toggle-label .middle-bar,
          .show-on-scroll-wrapper .mobile-nav-toggle-label .bottom-bar {
            top: 10px;
            right: 9px;
          }
          .show-on-scroll-wrapper .mobile-nav-toggle-label .middle-bar {
            top: 17px;
          }

          .show-on-scroll-wrapper .mobile-nav-toggle-label .bottom-bar {
            top: 24px;
          }
          .show-on-scroll-wrapper {
            top: 0;
            left: 0;
            width: auto;
            visibility: hidden;
            opacity: 0;
            z-index: 1010;
          }
          .show-on-scroll-wrapper .mobile-nav-toggle-label,
          body:not(.has-banner-image)
            .transparent-header
            .show-on-scroll-wrapper
            .mobile-nav-toggle-label {
            margin-top: 0;
            padding: 10px;
            background-color: #000;
            width: 40px;
            height: 36px;
          }
        }

        @media only screen and (max-width: 640px) {
          .mobile-nav-toggle-label {
            top: 20px;
            left: 20px;
          }
        }

        .mobile-nav-toggle-label {
          display: inline-block;
        }

        .show-on-scroll-wrapper {
          z-index: 1012;
          top: -20px;
          left: 0;
          width: 100%;
          visibility: hidden;
          pointer-events: none;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          opacity: 0;
          font-size: 14px;
          text-align: center;
          background-color: rgba(0, 0, 0, 0.95);
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          -webkit-transform: translate3d(0, 0, 0);
          -moz-transform: translate3d(0, 0, 0);
          -ms-transform: translate3d(0, 0, 0);
          -o-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          -webkit-transition: opacity 0.14s ease-in-out, visibility 0s 0.14s linear,
            top 0.14s ease-in-out;
          -moz-transition: opacity 0.14s ease-in-out, visibility 0s 0.14s linear,
            top 0.14s ease-in-out;
          -ms-transition: opacity 0.14s ease-in-out, visibility 0s 0.14s linear,
            top 0.14s ease-in-out;
          -o-transition: opacity 0.14s ease-in-out, visibility 0s 0.14s linear,
            top 0.14s ease-in-out;
          transition: opacity 0.14s ease-in-out, visibility 0s 0.14s linear, top 0.14s ease-in-out;
        }

        .show-on-scroll-wrapper.show {
          visibility: visible;
          opacity: 1;
          pointer-events: auto;
          top: 0;
          -webkit-transition: opacity 0.14s ease-in-out, visibility 0s 0s linear,
            top 0.14s ease-in-out;
          -moz-transition: opacity 0.14s ease-in-out, visibility 0s 0s linear, top 0.14s ease-in-out;
          -ms-transition: opacity 0.14s ease-in-out, visibility 0s 0s linear, top 0.14s ease-in-out;
          -o-transition: opacity 0.14s ease-in-out, visibility 0s 0s linear, top 0.14s ease-in-out;
          transition: opacity 0.14s ease-in-out, visibility 0s 0s linear, top 0.14s ease-in-out;
        }
      `}</style>

      <div className="hidden tablet:block">
        <input
          type="checkbox"
          name="mobile-nav-toggle"
          id="mobileNavToggle"
          className="hidden"
          checked={isMobileNavToggleChecked}
          onChange={handleMobileNavToggleChange}
        />
        <div
          className={`show-on-scroll-wrapper ${scrollActualCount > 300 && 'show'}`}
          id="showOnScrollWrapper"
        >
          <label
            htmlFor="mobileNavToggle"
            className="mobile-nav-toggle-label show-on-scroll-mobile"
          >
            <div className="top-bar"></div>
            <div className="middle-bar"></div>
            <div className="bottom-bar"></div>
          </label>
        </div>
        <div id="overlayNav" className="text-white">
          <div id="mobileNavWrapper" className="nav-wrapper">
            <nav id="mobileNavigation">
              <ul className="flex flex-col flex-wrap justify-center text-2xl text-white children:m-4 children:uppercase children:leading-[0.7em] children:tracking-wide">
                <li onClick={() => setIsExpandMenu(!isExpandMenu)}>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <p>{`Menu`}</p>
                    <>
                      {isExpandMenu ? (
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            strokeLinecap="square"
                            strokeMiterlimit="10"
                            strokeWidth="48"
                            d="M112 328l144-144 144 144"
                          ></path>
                        </svg>
                      ) : (
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 512 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="none"
                            strokeLinecap="square"
                            strokeMiterlimit="10"
                            strokeWidth="48"
                            d="M112 184l144 144 144-144"
                          ></path>
                        </svg>
                      )}
                    </>
                  </div>
                </li>
                {menuItems}
              </ul>
            </nav>
          </div>
        </div>

        <header
          id="header"
          role="banner"
          className={`absolute left-0 top-0 z-[101] w-full ${
            isHomePage ? 'bg-transparent' : 'bg-black-transparent'
          }`}
        >
          <div className="relative">
            <div className="flex w-full justify-center py-5">
              <Link href="/">
                <Image
                  className="w-16"
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
            <label htmlFor="mobileNavToggle" className={`mobile-nav-toggle-label`}>
              <div className="top-bar" />
              <div className="middle-bar" />
              <div className="bottom-bar" />
            </label>
          </div>
        </header>
      </div>
    </>
  )
}

export default MobileMenu
