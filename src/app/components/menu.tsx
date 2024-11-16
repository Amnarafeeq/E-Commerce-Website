"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="xl:hidden mt-2" onClick={toggleMenu}>
        {isOpen ? (
          <RxCross1 className="h-6 w-6  cursor-pointer" />
        ) : (
          <FaBars className="h-6 w-6 cursor-pointer " />
        )}
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-customOrange text-black z-50  transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out w-1/3 max-[660px]:w-[55%]  xl:hidden`}
      >
        <ul className="flex flex-col font-medium space-y-3 mt-12 ml-4">
          <li className="hover:underline ">
            <Link href="#">Fresh</Link>
          </li>
          <hr className="w-1/2 " />
          <li className="hover:underline">
            <Link href="#">Women Clothing</Link>
          </li>
          <hr className="w-1/2" />
          <li className="hover:underline">
            <Link href="#">Today’s Deals</Link>
          </li>
          <hr className="w-1/2" />
          <li className="hover:underline">
            <Link href="#">Health</Link>
          </li>
          <hr className="w-1/2" />
          <li className="hover:underline">
            <Link href="#">Mobiles</Link>
          </li>
          <hr className="w-1/2" />
          <li className="hover:underline">
            <Link href="#">Beauty</Link>
          </li>
          <hr className="w-1/2" />
          <li className="hover:underline">
            <Link href="#">Gift Cards</Link>
          </li>
          <hr className="w-1/2" />
          <li className="hover:underline">
            <Link href="#">Kitchen</Link>
          </li>
          <hr className="w-1/2" />
          <li className="hover:underline">
            <Link href="#">Men Clothing</Link>
          </li>
          <hr className="w-1/2" />
          <li className="hover:underline">
            <Link href="#">Bed Room</Link>
          </li>
          <hr className="w-1/2" />
          <li className="hover:underline">
            <Link href="#">Kids Clothing</Link>
          </li>
          <hr className="w-1/2" />
          <li className="hover:underline">
            <Link href="#">Sport</Link>
          </li>
          <hr className="w-1/2" />
          <li className="hover:underline">
            <Link href="#">Pet Corner</Link>
          </li>
          <hr className="w-1/2" />
          <li className="hover:underline">
            <Link href="#">Bags</Link>
          </li>
          <hr className="w-1/2" />
          <li className="hover:underline">
            <Link href="#">Books</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MenuBar;

// ImCross FaBars
