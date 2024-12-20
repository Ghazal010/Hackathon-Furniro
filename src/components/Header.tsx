import { BsPerson } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-white relative h-24 w-screen flex items-center justify-between px-4 md:px-8 lg:px-16 shadow-md">
            
            <div className="flex items-center">
                <Image
                    src="/logo.png"
                    alt="Furniro Logo"
                    width={48}
                    height={48}
                    priority
                />
                <span className="font-sans font-extrabold text-2xl md:text-3xl ml-4">Furniro</span>
            </div>

           
            <nav className="hidden md:flex gap-x-6 lg:gap-x-12 font-medium text-gray-700">
                <Link href="/" passHref>
                    Home
                </Link>
                <Link href="./shop" passHref>
                    Shop
                </Link>
                <Link href="./blog" passHref>
                    Blog
                </Link>
                <Link href="./contact" passHref>
                    Contact
                </Link>
            </nav>

            
            <div className="flex gap-x-4 md:gap-x-6 text-gray-600 text-xl md:text-2xl">
                <BsPerson className="cursor-pointer" />
                <FiSearch className="cursor-pointer" />
                <FaRegHeart className="cursor-pointer" />
                <AiOutlineShoppingCart className="cursor-pointer" />
            </div>

           
            <div className="md:hidden flex flex-col items-center space-y-2 absolute top-16 left-0 w-full bg-white shadow-lg p-4">
                <Link href="/" passHref>
                    Home
                </Link>
                <Link href="./shop" passHref>
                    Shop
                </Link>
                <Link href="./blog" passHref>
                    Blog
                </Link>
                <Link href="./contact" passHref>
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Header;
