import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import A from "./A";
interface Footer {
  className: string;
}

export const Footer = ({ className }: Footer) => {
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="bg-gray-1f w-full flex justify-center py-10 gap-4">
        <A href="" className="">
          <div className="border-2 border-white w-9 h-9 rounded-full flex items-center justify-center text-white hover:text-gray-1f hover:bg-white duration-300">
            <FaTwitter size={15} />
          </div>
        </A>
        <A href="" className="">
          <div className="border-2 border-white w-9 h-9 rounded-full flex items-center justify-center text-white hover:text-gray-1f hover:bg-white duration-300">
            <FaInstagram size={15} />
          </div>
        </A>
        <A href="" className="">
          <div className="border-2 border-white w-9 h-9 rounded-full flex items-center justify-center text-white hover:text-gray-1f hover:bg-white duration-300">
            <FaFacebookF size={15} />
          </div>
        </A>
        <A href="" className="">
          <div className="border-2 border-white w-9 h-9 rounded-full flex items-center justify-center text-white hover:text-gray-1f hover:bg-white duration-300">
            <FaTwitter size={15} />
          </div>
        </A>
      </div>
      <div className="bg-gray-17 flex justify-center items-center w-full py-12">
        <A href="" className="text-xl text-white hover:text-gray-200">
          CONTACT US
        </A>
      </div>
    </div>
  );
};
