"use client";

import Avatar from "./Avatar";
import Date from "./Date";
import SelectedDate from "./SelectedDate";
import { GoArrowRight } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="flex justify-between pt-5 pb-8 px-7 border-b relative">
      <Date />
      <section className="flex gap-6">
        <SelectedDate />
        <Avatar />
      </section>
      <div className="h-6 w-6 rounded-full flex items-center justify-center border absolute -right-3 top-9 bg-white cursor-pointer hover:shadow-lg hover:scale-125 duration-150"><GoArrowRight /></div>
    </nav>
  )
}

export default Navbar