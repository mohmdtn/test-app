"use client";

import Image from "next/image";
import React from "react";
import { SiteContext } from "../context/siteContext";

const CreateAccount = () => {
  const {initialData} = React.useContext(SiteContext);
  return (
    <section className="flex justify-between">
      {/* Title */}
      <div>
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-black pl-2">تعریف حساب بانکی</h1>
          <div className="bg-gray-100 rounded-3xl text-base text-gray-700 px-2 flex h-6 justify-center items-center"><span className="font-iransans ml-1">{initialData.length}</span> حساب</div>
        </div>
        <h5 className="text-gray-600 text-lg mt-3">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.</h5>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-2">
        <div className="h-10 w-10 border rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md duration-150">
          <Image src={"/icons/pdf.svg"} width={18} height={18} alt="pdf icon" />
        </div>
        <div className="h-10 px-3 border rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md duration-150">
          <Image src={"/icons/video.svg"} width={18} height={18} alt="pdf icon" />
          <p className="text-gray-400 text-base pr-2">آموزش ویدویی</p>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
