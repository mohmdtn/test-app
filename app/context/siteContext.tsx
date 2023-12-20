"use client";

import React, { ReactNode, useState } from "react";
import { data } from "@/app/data";

export const SiteContext = React.createContext<any>(null);

export const SiteProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] =  useState({portal: true, cart: true});
  const [initialData, setInitialData] = useState(data);
  const [selectedItem, setSelectedItem] = useState([]);

  const filterdData = () => {
    setInitialData(data);
    setInitialData(prev => prev.filter((item) => item.portalStatus === filter.portal).filter((item) => item.cartStatus === filter.cart));
  }

  const clearFilter = () => {
    setInitialData(data);
  }

  const value = {
    isModalOpen,
    setIsModalOpen,
    filter,
    setFilter,
    initialData,
    filterdData,
    clearFilter,
    selectedItem,
    setSelectedItem,
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};
