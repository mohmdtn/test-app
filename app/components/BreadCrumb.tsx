import Image from "next/image";
import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi2";

const BreadCrumb = () => {
  return (
    <section className="flex items-center pb-7 pt-4">
      <Image src={"/icons/menu.svg"} className='h-5 w-5' width={20} height={20} alt='menu icon' />
      <div className="flex items-center">
        <HiOutlineChevronLeft className="text-gray-300 mx-4" />
        <h6 className="text-gray-600 text-lg">خزانه داری</h6>
        <HiOutlineChevronLeft className="text-gray-300 mx-4" />
        <h6 className="text-blue-700 text-lg">تعریف حساب بانکی</h6>
      </div>
    </section>
  );
};

export default BreadCrumb;
