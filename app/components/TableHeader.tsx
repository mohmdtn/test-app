import Image from 'next/image';
import React, { useState } from 'react';
import { SiteContext } from '../context/siteContext';
import DeleteMultiItem from './DeleteMultiItem';

const TableHeader = () => {
  const { setIsModalOpen, selectedItem, search, setDeleteMultiModal } = React.useContext(SiteContext);

  return (
    <>
      <DeleteMultiItem />
      <section className="flex justify-between">
        {/* Search Inputs */}
        <div className="flex gap-2">
          <div className="relative flex items-center">
            <input type="text" className="h-11 w-64 rounded-lg border bg-white pr-10 focus:outline-none focus:shadow-md text-gray-600" placeholder="جستجو" onChange={(e) => search(e.target.value)}/>
            <Image src={"/icons/search.svg"} width={16} height={16} alt="search icon" className="absolute right-4" />
          </div>
          <div className="h-10 w-10 border rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md duration-150" onClick={() => setIsModalOpen(true)}>
            <Image src={"/icons/option.svg"} width={20} height={20} alt="options icon" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <div className="h-10 w-10 border rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md duration-150">
            <Image src={"/icons/printer.svg"} width={20} height={20} alt="printer icon" />
          </div>
          <div className="h-10 w-10 border rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md duration-150">
            <Image src={"/icons/exel.svg"} width={20} height={20} alt="exel icon" />
          </div>
          <div className={`h-10 w-10 border rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md duration-150 ${selectedItem.length > 1 && "bg-red-100 border-red-600"}`} onClick={() => setDeleteMultiModal(true)}>
            <Image src={"/icons/trash.svg"} width={20} height={20} alt="trash icon" />
          </div>
          <div className="h-10 px-3 bg-blue-600 rounded-lg flex justify-center items-center cursor-pointer hover:shadow-md duration-150">
            <Image src={"/icons/add.svg"} width={20} height={20} alt="add icon" />
            <p className="text-white text-base pr-2">حساب جدید</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default TableHeader