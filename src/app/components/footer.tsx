import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between text-white bg-gray-600 p-10 flex-wrap items-center max-sm:justify-center">
      <div>
        <h1 className="text-3xl ">
          <span className="font-bold">shop</span>cart
        </h1>
      </div>
      <div>
        <ul className="flex gap-x-3 text-xl">
          <li className="hover:underline">
            <Link href="#">About us</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">Contact</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">Help</Link>
          </li>
        </ul>
      </div>
      <div>
        <select name="language" className="bg-gray-600 text-xl">
          <option value="lang">English</option>
          <option value="lang">Urdu</option>
          <option value="lang">French</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
