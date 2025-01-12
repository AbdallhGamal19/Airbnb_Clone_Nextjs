import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/airbnb.svg";
import SearchBar from "./SearchBar.tsx";
import Navbar from "./Navbar.tsx";
import { placeholder } from "../../../types/index.ts";

const Header = ({ placeholder }: placeholder) => {
  return (
    <header className="  shadow-md sticky top-0 z-[1000]  bg-white  py-5 w-full">
      <div className="container   grid grid-cols-3 ">
        <Link href="/" className="relative  flex items-center  h-10 my-auto ">
          <Image
            src={logo}
            fill
            alt="airbnb logo"
            className="object-contain object-left "
          />
        </Link>
        <SearchBar placeholder={placeholder} />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
