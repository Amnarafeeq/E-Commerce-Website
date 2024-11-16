import Image from "next/image";
import React from "react";

const TodayDeals = () => {
  return (
    <main>
      <h1 className="text-2xl font-bold border-b-4 border-dashed border-customOrange p-2">
        Today's hot deals
      </h1>
      <section className="flex justify-between mt-8 flex-wrap max-sm:py-5 max-[440px]:gap-y-10 max-sm:gap-y-20">
        {/* div 1 */}
        <div className="w-56 h-80 max-[440px]:w-28 max-[440px]:h-auto  max-sm:w-40 max-sm:h-64 flex flex-col gap-4 items-center  justify-center ">
          <Image width={170} height={100} src="/Images/image-8.png" alt="" />
          <p className="ml-3 px-2 max-[440px]:ml-1 max-[440px]:text-xs">
            ZEBRONICS Zeb-Reaper 2.4GHz Wireless Gaming Mouse
          </p>
          <div className="flex gap-x-16 max-[440px]:gap-x-4 max-[440px]:text-xs text-sm max-sm:gap-x-10 ">
            <p>₹1,599.00</p>
            <p className="text-red-600">-40% off</p>
          </div>
        </div>
        {/* div 2 */}
        <div className="w-56 h-80 max-[440px]:w-28 max-[440px]:h-auto max-sm:w-40 max-sm:h-64 flex flex-col gap-4 items-center  justify-center ">
          <Image width={170} height={100} src="/Images/image-9.png" alt="" />
          <p className="ml-3 px-1 max-[440px]:ml-1 max-[440px]:text-xs">
            Zebronics Zeb-Transformer-k USB Gaming Keyboard | RGB LED lighting
          </p>
          <div className="flex gap-x-20 max-[440px]:gap-x-4 max-[440px]:text-xs text-sm max-sm:gap-x-10">
            <p>₹999.00</p>
            <p className="text-red-600">-36% off</p>
          </div>
        </div>
        {/* div 3 */}
        <div className="w-56 h-80 max-[440px]:w-28 max-[440px]:h-auto max-sm:w-40 max-sm:h-64 flex flex-col gap-4 items-center  justify-center ">
          <Image width={170} height={100} src="/Images/image-10.png" alt="" />
          <p className="ml-3 px-1 max-[440px]:ml-1 max-[440px]:text-xs">
            TP-Link Powered USB Hub with 7 Data Smart Charging hub
          </p>
          <div className="flex gap-x-16 max-[440px]:gap-x-4 max-[440px]:text-xs text-sm max-sm:gap-x-10">
            <p>₹3,569.00</p>
            <p className="text-red-600">-33% off</p>
          </div>
        </div>
        {/* div 4 */}
        <div className="w-56 h-80 max-[440px]:w-28 max-[440px]:h-auto max-sm:w-40 max-sm:h-64 flex flex-col gap-4 items-center  justify-center ">
          <Image width={170} height={100} src="/Images/image-11.png" alt="" />
          <p className="ml-4 px-1 max-[440px]:ml-1 max-[440px]:text-xs ">
            Scarters Mouse Pad, Deskmat Extended for Work from
            Home/Office/Gaming
          </p>
          <div className="flex gap-x-12 max-[440px]:gap-x-4 max-[440px]:text-xs text-sm max-sm:gap-x-10">
            <p>₹1,599.00</p>
            <p className="text-red-600">-30% off</p>
          </div>
        </div>
        {/* div 5 */}
        <div className="w-56 h-80 max-[440px]:w-28 max-[440px]:h-auto max-sm:w-40 max-sm:h-64 flex flex-col gap-4 items-center  justify-center ">
          <Image width={170} height={100} src="/Images/image-12.png" alt="" />
          <p className="ml-5 px-4 max-[440px]:ml-1 max-[440px]:text-xs max-sm:ml-2 max-sm:px-2">
            HyperX Streamer Starter Pack (HBNDL0001), Black
          </p>
          <div className="flex gap-x-12 max-[440px]:gap-x-1 max-[440px]:text-xs text-sm max-sm:gap-x-10">
            <p>₹11,235.00</p>
            <p className="text-red-600">-26% off</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TodayDeals;
