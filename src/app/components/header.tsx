import Link from "next/link";
import React from "react";
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { HiUserCircle } from "react-icons/hi";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between border-b-2 border-gray-500 p-2">
        <div>
          <h1 className="text-3xl">
            <span className="font-bold ">shop</span>cart
          </h1>
        </div>
        <div className="flex items-center gap-2 ">
          <HiUserCircle className="text-2xl" />
          <h1>Sign In</h1>
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center px-3 py-2 rounded-2xl    bg-customOrange">
          <CiLocationOn className="text-xl" />
          <h1 className="text-sm">Pakistan, 110110</h1>
        </div>
        <div className="flex items-center  ">
          <input
            type="search"
            placeholder="Search"
            className="p-1 text-sm w-[622px] max-sm:w-auto max-md:w-auto max-lg:w-auto border-gray-400 border-2 border-r-0 rounded-l-2xl focus:outline-none "
          />
          <CiSearch className="border-2 border-l-0 rounded-r-2xl text-[32px] border-gray-400 " />
        </div>
      </div>
      <nav>
        <ul className="flex justify-between mt-3 text-sm max-sm:hidden max-md:flex-wrap max-md:gap-2 max-lg:flex-wrap max-lg:gap-3 max-lg:justify-evenly">
          <li className="hover:underline">
            {" "}
            <Link href="#">Fresh</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Women Clothing</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Today’s Deals</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Health</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Mobiles</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Beauty</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Gift Cards</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Kitchen</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Men Clothing</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Bed Room</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Kids Clothing</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Sport</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Pet Corner</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Bags</Link>
          </li>
          <li className="hover:underline">
            {" "}
            <Link href="#">Books</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
