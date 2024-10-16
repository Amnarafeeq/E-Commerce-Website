import Image from "next/image";
import React from "react";
import { CiStar } from "react-icons/ci";

const ReviewPage = () => {
  return (
    <main>
      <h1 className="text-2xl font-bold border-b-4 border-dashed border-customOrange p-2 mt-6">
        Review your purchase
      </h1>
      <section className="flex gap-6 justify-between max-sm:flex-col max-sm:w-auto  py-12">
        <div className="w-[50%] h-96 border-4 rounded-xl flex justify-between gap-x-6 items-center max-lg:h-auto max-sm:gap-y-4 max-lg:gap-y-6 max-sm:flex-col max-sm:w-auto max-sm:py-5 max-lg:flex-col">
          <div className="flex-1">
            <Image
              width="330"
              height="100"
              src="/Images/image-25.png"
              className="max-sm:w-60"
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col gap-2 max-lg:items-center max-lg:px-10">
            <p className="font-bold text-xl pr-4 pb-4 max-sm:text-sm max-lg:text-center">
              2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi,
              128GB)
            </p>
            <p>you bought it at the best price</p>
            <p className="font-bold text-xl max-sm:text-sm">₹99,900.00</p>
            <div className="flex text-4xl text-customOrange gap-2 mt-2 max-sm:text-sm max-lg:pb-4">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <span className="text-sm ">0 rating</span>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-96 border-4 rounded-xl flex justify-between gap-x-6 items-center max-lg:h-auto max-sm:gap-y-4 max-lg:gap-y-6 max-sm:flex-col max-sm:w-auto max-sm:py-5 max-lg:flex-col">
          <div className="flex-1">
            <Image
              width="330"
              height="100"
              src="/Images/image-26.png"
              className="max-sm:w-60"
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col gap-2 max-lg:items-center max-lg:px-10">
            <p className="font-bold text-xl pr-4 pb-4 max-sm:text-sm max-lg:text-center">
              iPhone 14 Pro Max with Apple M1 chip (6.7-inch/17.0 cm, 128GB)
            </p>
            <p>you bought it at the best price</p>
            <p className="font-bold text-xl max-sm:text-sm">₹1,39,900.00</p>
            <div className="flex text-4xl text-customOrange gap-2 mt-2 max-sm:text-sm max-lg:pb-4">
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <CiStar />
              <span className="text-sm ">0 rating</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReviewPage;
