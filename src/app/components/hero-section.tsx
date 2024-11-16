import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <main className="my-12 max-[440px]:my-8">
      <h2 className=" ml-[28rem] text-2xl border-b-4 border-dashed font-bold border-customOrange max-xl:ml-0 max-xl:text-center max">
        hot deals for you
      </h2>

      <section className="flex justify-between  items-center max-sm:gap-y-10 max-xl:flex-col max-xl:gap-y-14 ">
        <div className="w-[400px] h-[400px] max-[440px]:w-auto max-[440px]:h-auto max-xl:w-auto max-xl:h-auto">
          <h1 className="text-6xl mx-auto text-center max-[440px]:text-4xl max-[440px]:p-4 p-6 max-sm:text-5xl  max-lg:text-center max-xl:p-4 max-xl:mt-10   leading-[4rem]">
            We picked some
            <span className="text-customOrange font-bold">
              {" "}
              cool things
            </span>{" "}
            for you!<span className="font-bold">*</span>
          </h1>
        </div>

        <div className="w-[750px]  h-[760]  flex flex-wrap gap-y-3 justify-between max-sm:w-auto max-sm:items-center max-sm:gap-y-20 max-sm:justify-between max-md:px-3 max-xl:justify-evenly max-xl:w-auto">
          {/* div 1 */}
          <div className="w-56 h-80 max-[440px]:w-28 max-[440px]:h-auto max-sm:w-40 max-sm:h-64 flex flex-col gap-4 max-[440px]:gap-2 items-center  justify-center ">
            <Image width={170} height={100} src="/Images/image-1.png" alt="" />
            <p className="ml-7 px-3  max-[440px]:ml-1 max-[440px]:text-xs">
              Inalsa Air Fryer Fry- Light-1400W
            </p>
            <div className="flex gap-x-12 text-sm max-[440px]:text-xs max-[440px]:gap-x-3">
              <p>₹4,627.00</p>
              <p className="text-red-600">-40% off</p>
            </div>
          </div>
          {/* div 2 */}
          <div className="w-56 h-80 max-[440px]:w-28 max-[440px]:h-auto max-sm:w-40 max-sm:h-64  flex flex-col gap-4 max-[440px]:gap-2 items-center  justify-center ">
            <Image width={170} height={100} src="/Images/image-2.png" alt="" />
            <p className="ml-7 px-3 max-[440px]:ml-1 max-[440px]:text-xs">
              Oneplus Bullets Z2 Bluetooth Wireless
            </p>
            <div className="flex gap-x-12 text-sm max-[440px]:text-xs max-[440px]:gap-x-3">
              <p>₹1,699.00</p>
              <p className="text-red-600">-26% off</p>
            </div>
          </div>
          {/* div 3 */}
          <div className="w-56 h-80 max-[440px]:w-28 max-[440px]:h-auto max-sm:w-40 max-sm:h-64 flex flex-col gap-4 max-[440px]:gap-2 items-center  justify-center  ">
            <Image width={170} height={100} src="/Images/image-3.png" alt="" />
            <p className="ml-7 px-3 max-[440px]:ml-1 max-[440px]:text-xs">
              New Fastrack Reflex Play|AMOLED Display
            </p>
            <div className="flex gap-x-12 text-sm max-[440px]:text-xs max-[440px]:gap-x-2">
              <p>₹5,699.00</p>
              <p className="text-red-600">-23% off</p>
            </div>
          </div>
          {/* div 4 */}
          <div className="w-56 h-80 max-[440px]:w-28 max-[440px]:h-auto max-sm:w-40 max-sm:h-64 flex flex-col gap-4 max-[440px]:gap-2 items-center  justify-center  ">
            <Image width={170} height={100} src="/Images/image-4.png" alt="" />
            <p className="ml-7 px-3 max-[440px]:ml-1 max-[440px]:text-xs">
              Apple iPhone 13 (128GB) - Green
            </p>
            <div className="flex gap-x-12 text-sm max-[440px]:text-xs max-[440px]:gap-x-2">
              <p>₹66,900.00</p>
              <p className="text-red-600">-16% off</p>
            </div>
          </div>
          {/* div 5 */}
          <div className="w-56 h-80 max-[440px]:w-28 max-[440px]:h-auto max-sm:w-40 max-sm:h-64 flex flex-col gap-4 max-[440px]:gap-2 items-center  justify-center  ">
            <Image width={170} height={100} src="/Images/image-5.png" alt="" />
            <p className="ml-7 max-[440px]:ml-1 max-[440px]:text-xs ">
              Samsung Galaxy Tab S8+ - Wifi Only, Graphite
            </p>
            <div className="flex gap-x-12 text-sm max-[440px]:text-xs max-[440px]:gap-x-2">
              <p>₹74,998.00</p>
              <p className="text-red-600">-13% off</p>
            </div>
          </div>
          {/* div 6 */}
          <div className="w-56 h-80 max-[440px]:w-28 max-[440px]:h-auto max-sm:w-40 max-sm:h-64 flex flex-col gap-4 max-[440px]:gap-2 items-center  justify-center  ">
            <Image width={170} height={100} src="/Images/image-6.png" alt="" />
            <p className="ml-7  max-[440px]:ml-1 max-[440px]:text-xs ">
              Kodak Mini Shot 3 Retro - Yellow, Bluetooth{" "}
            </p>
            <div className="flex gap-x-12 text-sm max-[440px]:text-xs max-[440px]:gap-x-2">
              <p>₹65,231.00</p>
              <p className="text-red-600">-18% off</p>
            </div>
          </div>
        </div>
      </section>
      <Image
        width="1200"
        height="100"
        src="/Images/image-7.png"
        className="py-10 max-2xl:m-auto w-screen"
        alt=""
      />
    </main>
  );
};

export default HeroSection;
