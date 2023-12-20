"use client";

import React from "react";
import MenuItem from "./MenuItem";

const menuItems = [
  { name: "داشبورد", icon: "menu" },
  { name: "طرف حساب", icon: "users" },
  { name: "کالا و خدمات", icon: "box" },
  { name: "انبارداری", icon: "home" },
  { name: "فروش", icon: "cart" },
  { name: "خزانه داری", icon: "coins", subMenu: true, active: "first" },
  { name: "حسابداری", icon: "calculater" },
  { name: "تنظیمات", icon: "setting" },
];

function Menu() {
  return (
    <section className="">
      {menuItems.map((item, index) => <MenuItem key={index} name={item.name} icon={item.icon} subMenu={item.subMenu} active={item.active} />)}
    </section>
  );
}

export default Menu;
