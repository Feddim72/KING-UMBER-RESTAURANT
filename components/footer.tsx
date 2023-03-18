import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import styles from '../styles/Footer.module.css'

export const Footer = () => {
  return (
    <div className={`flex w-full flex-col ${styles.footer}`}>
      <div className="flex w-full justify-center gap-4 bg-gray-1f py-10">
        <Link href="">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-white duration-300 hover:bg-white hover:text-gray-1f">
            <FaTwitter size={15} />
          </div>
        </Link>
        <Link href="">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-white duration-300 hover:bg-white hover:text-gray-1f">
            <FaInstagram size={15} />
          </div>
        </Link>
        <Link href="">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-white duration-300 hover:bg-white hover:text-gray-1f">
            <FaFacebookF size={15} />
          </div>
        </Link>
        <Link href="">
          <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-white duration-300 hover:bg-white hover:text-gray-1f">
            <FaTwitter size={15} />
          </div>
        </Link>
      </div>
      <div className="flex w-full items-center justify-center bg-gray-17 py-12">
        <Link href="">
          <span className="text-xl text-white hover:text-gray-200">CONTACT US</span>
        </Link>
      </div>
    </div>
  )
}
