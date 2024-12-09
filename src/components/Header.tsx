import { BsPerson } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <div className="bg-white relative h-24 w-screen flex justify-center items-center">
            <span className="absolute top-4 left-4 flex items-center">
                <Image
                    src="/logo.png"
                    alt="Furniro Logo"
                    width={96}
                    height={96}
                    priority
                />
                <span className="font-sans font-extrabold text-5xl ml-4">Furniro</span>
            </span>
            <span>
                <nav className="hidden md:flex gap-x-20 text-black font-semibold absolute top-16 left-[460px]">
                    <Link href="/" passHref>
                        Home
                    </Link>
                    <Link href="./shop" passHref>
                        Shop
                    </Link>
                    <Link href="./blog">
                        Blog
                    </Link>
                    <Link href="./contact" passHref>
                        Contact
                    </Link>
                </nav>
            </span>
            <span className="flex absolute right-[120px] text-2xl top-16 gap-x-12">
                <BsPerson />
                <FiSearch />
                <FaRegHeart />
                <AiOutlineShoppingCart />
            </span>
        </div>
    );
};

export default Header;
