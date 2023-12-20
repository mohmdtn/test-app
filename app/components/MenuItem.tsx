"use client";
import Image from 'next/image'
import { useEffect, useState } from 'react';

import { HiChevronDown } from "react-icons/hi2";

interface MenuItemProps {
  icon: String;
  name: String;
  subMenu?: boolean;
  active?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({icon, name, subMenu, active}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (active && active === "first")
      setIsMenuOpen(true)
  }, [active])

  return (
    <section>
      <section className='flex justify-between items-center p-4 rounded-lg hover:bg-gray-50 cursor-pointer' onClick={() => setIsMenuOpen(prev => !prev)}>
        <div className="flex">
          <Image src={`/icons/${icon}.svg`} width={24} height={24} alt='menu icon' />
          <h2 className="pr-3 text-xl text-gray-700">{name}</h2>
        </div>
        <HiChevronDown size={22} className={`text-gray-500 duration-300 ${isMenuOpen && "rotate-180"}`} />
      </section>
      {subMenu && isMenuOpen && (
        <section className="mr-7 border-r">
          <h3 className={`pr-3 text-xl duration-150 cursor-pointer hover:pr-5 ${active ==="first" && "text-blue-600"}`}>تعریف حساب بانکی</h3>
          <h3 className="p-3 pr-3 text-xl text-gray-700 duration-150 cursor-pointer hover:pr-5">آپشن 1</h3>
          <h3 className="pr-3 text-xl text-gray-700 duration-150 cursor-pointer hover:pr-5">آپشن 2</h3>
        </section>
      )}
    </section>
  )
}

export default MenuItem
