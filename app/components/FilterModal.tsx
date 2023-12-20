import React from "react";
import Image from "next/image";
import { SiteContext } from "../context/siteContext";

import Dialog from "@mui/material/Dialog";
import { LiaTimesSolid } from "react-icons/lia";
import { MenuItem, Select } from "@mui/material";

const FilterModal = () => {
  const {isModalOpen, setIsModalOpen, setFilter, filter, filterdData, clearFilter } = React.useContext(SiteContext);

  const filterHandle = () => {
    filterdData();
    setIsModalOpen(false);
  }

  const clearFilterHandle = () => {
    clearFilter();
    setIsModalOpen(false);
  }


  return (
    <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <section className="bg-white rounded-2xl w-96 shadow-lg">

        {/* modal header */}
        <section className="flex items-center gap-3 p-7 border-b relative">
          <div className="h-12 w-12 border rounded-lg flex justify-center items-center">
            <Image src={"/icons/option.svg"} width={20} height={20} alt="options icon" />
          </div>
          <h3 className="text-xl font-bold">فیلتر ها</h3>

          <div className="absolute left-5 top-7 cursor-pointer" onClick={() => setIsModalOpen(false)}><LiaTimesSolid size={22} /></div>
        </section>

        {/* modal content */}
        <section className="p-7">
          <div>
            <h3 className="text-lg text-gray-700 mb-2">وضعیت کارتخوان</h3>
            <Select displayEmpty className="w-full text-right" onChange={(e) => setFilter({...filter, cart: e.target.value === 1 ? true : false})}>
              <MenuItem value={1}>فعال</MenuItem>
              <MenuItem value={0}>غیر فعال</MenuItem>
            </Select>
          </div>

          <div className="py-5">
            <h3 className="text-lg text-gray-700 mb-2">وضعیت درگاه</h3>
            <Select displayEmpty className="w-full text-right" onChange={(e) => setFilter({...filter, portal: e.target.value === 1 ? true : false})}>
              <MenuItem value={1} selected>فعال</MenuItem>
              <MenuItem value={0}>غیر فعال</MenuItem>
            </Select>
          </div>

          <div className="text-lg text-blue-700 cursor-pointer" onClick={clearFilterHandle}>حذف همه فیلترها</div>

        </section>


        {/* modal footer */}
        <section className="p-7 border-t flex justify-between gap-2">
          <button className="border p-3 w-1/2 flex justify-center items-center rounded-lg bg-blue-600 text-white" onClick={filterHandle}>تایید</button>
          <button className="border p-3 w-1/2 flex justify-center items-center rounded-lg text-gray-700 border-gray-300" onClick={() => setIsModalOpen(false)}>انصراف</button>
        </section>
      </section>
    </Dialog>
  );
};

export default FilterModal;
