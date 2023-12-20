import TableRecord from "./TableRecord";
import { FiMinus } from "react-icons/fi";
import { HiMiniArrowDown } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";
import React, { useState } from "react";
import Image from "next/image";
import FilterModal from "./FilterModal";
import { SiteContext } from "../context/siteContext";

const TableBody = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [dataNumb, setDataNum] = useState(5);
  const { initialData } = React.useContext(SiteContext);


  return (
    <>
    <FilterModal />
    <section className="border max-w-[calc(100vw-384px)] rounded-xl mt-4 data-table overflow-auto relative">
      {/* Table Header */}
      <table className="w-full overflow-scroll table-auto">
        <thead className="border-b">
          <tr className="overflow-hidden items-center">
            <th className="flex gap-2 sticky right-0">
              <div className={`h-5 cursor-pointer w-5 border rounded-[4px] flex items-center justify-center ${isSelected && "border-blue-600 bg-sky-200 text-blue-600"}`} onClick={() => setIsSelected((prev) => !prev)}>
                {isSelected && <FiMinus />}
              </div>
              <div>عنوان حساب</div>
              <div className="flex justify-center items-center"><HiMiniArrowDown /></div>
            </th>
            <th>کد حساب</th>
            <th>شماره حساب</th>
            <th>شماره شبا</th>
            <th>شماره کارت</th>
            <th>وضعیت درگاه بانک</th>
            <th>وضعیت کارتخوان</th>
            <th className="sticky left-0"></th>
          </tr>
        </thead>

        {/* Table Content */}
        <tbody>
          {initialData.slice(0, dataNumb).map((item: any) => <TableRecord key={item.id} id={item.id} title={item.title} code={item.code} accNumber={item.accNumber} accShaba={item.accShaba} cart={item.cart} portalStatus={item.portalStatus} cartStatus={item.cartStatus} active={isSelected} />)}
        </tbody>
      </table>

      {/* Table Footer */}
      <div className="w-[calc(100vw-384px)] flex justify-center p-4">
        <button className="flex gap-2 justify-center items-center text-gray-700" onClick={() => setDataNum(dataNumb + 2)}>
          <Image src={"/icons/refresh.svg"} width={20} height={20} alt="refresh icon" />
          مشاهده بیشتر
          <HiChevronDown size={16} />
        </button>
      </div>
      
    </section>
    </>
  );
};

export default TableBody;
