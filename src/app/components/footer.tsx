import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between text-white bg-gray-600 p-10 max-[440px]:p-7 max-sm:flex-col flex-wrap items-center max-sm:justify-center max-sm:gap-y-5 ">
      <div>
        <h1 className="text-3xl max-[440px]:text-2xl">
          <span className="font-bold">shop</span>cart
        </h1>
      </div>
      <div>
        <ul className="flex gap-x-3 text-xl max-[440px]:text-lg max-[440px]:my-4 max-[440px]:gap-x-5">
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
        <select
          name="language"
          className="bg-gray-600 text-xl max-[440px]:text-lg"
        >
          <option value="lang">English</option>
          <option value="lang">Urdu</option>
          <option value="lang">French</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
