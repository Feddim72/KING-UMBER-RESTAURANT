import { withTranslateRoutes } from 'next-translate-routes'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import 'tailwindcss/tailwind.css'
import { Header } from '../components/app/header'
import useLoader from '../hooks/useLoader'
import '../styles/globals.css'
const Footer = dynamic(() => import('../components/app/footer'))
const Loader = dynamic(() => import('../components/common/loader'))

function MyApp({ Component, pageProps }: AppProps) {
  const isLoading = useLoader()
  return (
    <>
      <Header />
      {isLoading && <Loader variant="fullPage" />}
      <main className="main">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default withTranslateRoutes(MyApp)
