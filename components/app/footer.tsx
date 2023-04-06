import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={`flex w-full flex-col`}>
      <div className="flex w-full justify-center gap-4 bg-gray-1f py-10">
        <Link href="mailto:ku@gmail.com">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white duration-300 hover:bg-white hover:text-gray-1f">
            <AiOutlineMail size={16} />
          </div>
        </Link>
        <Link href="https://www.instagram.com">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white duration-300 hover:bg-white hover:text-gray-1f">
            <FaInstagram size={16} />
          </div>
        </Link>
        <Link href="https://facebook.com">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white duration-300 hover:bg-white hover:text-gray-1f">
            <FaFacebookF size={16} />
          </div>
        </Link>
        <Link href="https://twitter.com">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white text-white duration-300 hover:bg-white hover:text-gray-1f">
            <FaTwitter size={16} />
          </div>
        </Link>
      </div>
      <div className="flex w-full items-center justify-center bg-gray-17 py-12">
        <Link href="/contactUs">
          <span className="text-xl text-white hover:text-gray-200">CONTACT US</span>
        </Link>
      </div>
    </footer>
  )
}
