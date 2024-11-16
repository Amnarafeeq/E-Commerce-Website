import Image from "next/image";
import React from "react";

const FurniturePage = () => {
  return (
    <main>
      <div className="py-5 ">
        <Image
          width="1150"
          height="100"
          src="/Images/image-19.jpg"
          className=" mt-6  w-screen"
          alt=""
        />
      </div>
      <h1 className="text-2xl font-bold border-b-4 border-dashed border-customOrange p-2 mt-6">
        Deals on furniture
      </h1>
      <section className="flex justify-between my-12 max-[440px]:py-3 max-[440px]:gap-y-10 flex-wrap max-sm:py-5 max-sm:gap-y-20 text-sm ">
        {/* div 1 */}
        <div className="w-56 h-80 max-[440px]:w-32  max-sm:w-40 max-sm:h-64 flex flex-col gap-4 items-center  justify-center ">
          <Image width={190} height={100} src="/Images/image-20.png" alt="" />
          <p className="ml-3 px-2 font-semibold max-[440px]:ml-1 max-[440px]:text-xs">
            UHUD CRAFTS Beautiful Antique Wooden Fold-able Side Table
          </p>
          <div className="flex gap-x-16 max-[440px]:gap-x-6 max-[440px]:text-xs max-sm:gap-x-10 ">
            <p>₹599.00</p>
            <p className="text-red-600">-40% off</p>
          </div>
        </div>
        {/* div 2 */}
        <div className="w-56 h-80  max-[440px]:w-32  max-sm:w-40 max-sm:h-64 flex flex-col gap-4 items-center  justify-center ">
          <Image width={190} height={100} src="/Images/image-21.png" alt="" />
          <p className="ml-3 px-1 font-semibold max-[440px]:ml-1 max-[440px]:text-xs">
            STAR WORK C Shaped End Table, Slim Couch Side Tables Slide Under
            Sofa Bed
          </p>
          <div className="flex gap-x-20 max-[440px]:gap-x-6 max-[440px]:text-xs max-sm:gap-x-10">
            <p>₹1,599.00</p>
            <p className="text-red-600">-40% off</p>
          </div>
        </div>
        {/* div 3 */}
        <div className="w-56 h-80  max-[440px]:w-32  max-sm:w-40 max-sm:h-64 flex flex-col gap-4 items-center  justify-center ">
          <Image width={190} height={100} src="/Images/image-22.png" alt="" />
          <p className="ml-3 px-1 font-semibold max-[440px]:ml-1 max-[440px]:text-xs">
            Furniture Kart wrought iron Single Seater Swing Chair with Stand
          </p>
          <div className="flex gap-x-16 max-[440px]:gap-x-6 max-[440px]:text-xs max-sm:gap-x-10">
            <p>₹9,499.00</p>
            <p className="text-red-600">-36% off</p>
          </div>
        </div>
        {/* div 4 */}
        <div className="w-56 h-80  max-[440px]:w-32  max-sm:w-40 max-sm:h-64 flex flex-col gap-4 items-center  justify-center ">
          <Image width={190} height={100} src="/Images/image-23.png" alt="" />
          <p className="ml-4 px-1 font-semibold max-[440px]:ml-1 max-[440px]:text-xs ">
            Lukzer Engineered Wood Coffee Center Tea Table 3 Tier Rack Sofa Side
            Table
          </p>
          <div className="flex gap-x-12 max-[440px]:gap-x-6 max-[440px]:text-xs max-sm:gap-x-10">
            <p>₹2,599.00</p>
            <p className="text-red-600">-30% off</p>
          </div>
        </div>
        {/* div 5 */}
        <div className="w-56 h-80  max-[440px]:w-32  max-sm:w-40 max-sm:h-64 flex flex-col gap-4 items-center  justify-center ">
          <Image width={190} height={100} src="/Images/image-24.png" alt="" />
          <p className="ml-5 px-4  font-semibold max-[440px]:ml-0 max-[440px]:text-xs max-sm:ml-2 max-sm:px-2">
            Kusum Handicrafts Wooden 6 Seater Sofa Set for Living Room | 3+2+1
            Seater Sofa
          </p>
          <div className="flex gap-x-12 max-[440px]:gap-x-6 max-[440px]:text-xs max-sm:gap-x-10">
            <p>₹31,599.00</p>
            <p className="text-red-600">-26% off</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FurniturePage;
