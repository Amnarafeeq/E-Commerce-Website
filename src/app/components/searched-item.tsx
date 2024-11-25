import Image from "next/image";
import React from "react";

const SearchItems = () => {
  return (
    <main>
      <h1 className="text-2xl font-bold border-b-4 border-dashed border-customOrange p-2 mt-6">
        Your searched items
      </h1>
      <section className="flex justify-between  py-8 flex-wrap max-[440px]:justify-center max-[440px]:gap-x-3">
        <Image
          width="160"
          height="100"
          src="/Images/image-13.png"
          className="max-[440px]:w-32"
          alt=""
        />
        <Image
          width="160"
          height="100"
          src="/Images/image-14.png"
          className="max-[440px]:w-32 mt-4"
          alt=""
        />
        <Image
          width="160"
          height="100"
          src="/Images/image-15.png"
          className="max-[440px]:w-32 mt-4"
          alt=""
        />
        <Image
          width="160"
          height="100"
          src="/Images/image-16.png"
          className="max-[440px]:w-32 mt-4"
          alt=""
        />
        <Image
          width="160"
          height="100"
          src="/Images/image-17.png"
          className="max-[440px]:w-32 mt-4"
          alt=""
        />
        <Image
          width="160"
          height="100"
          src="/Images/image-18.png"
          className="max-[440px]:w-32 mt-4"
          alt=""
        />
      </section>
    </main>
  );
};

export default SearchItems;
