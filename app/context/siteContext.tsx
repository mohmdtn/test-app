"use client";

import React, { ReactNode, useState } from "react";
import { data } from "@/app/data";

export const SiteContext = React.createContext<any>(null);

export const SiteProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] =  useState({portal: true, cart: true});
  const [initialData, setInitialData] = useState(data);
  const [selectedItem, setSelectedItem] = useState([]);
  const [confirmModal, setConfirmModal] = useState(false);
  const [deleteMultiModal, setDeleteMultiModal] = useState(false);

  const filterdData = () => {
    setInitialData(data);
    setInitialData(prev => prev.filter((item) => item.portalStatus === filter.portal).filter((item) => item.cartStatus === filter.cart));
  }

  const clearFilter = () => {
    setInitialData(data);
  }

  const deleteItem = (id: string) => {
    setInitialData(prev => prev.filter(item => item.id !== id))
  }

  const search = (input: string) => {
    setInitialData(data)
    if (!input) {
      setInitialData(data)
    }
    setInitialData((prev) => {
      return prev.filter((item) => {
        return item.title.toLocaleLowerCase().startsWith(input.toLocaleLowerCase()) ||
        item.code.toLocaleLowerCase().startsWith(input.toLocaleLowerCase()) ||
        item.accShaba.toLocaleLowerCase().startsWith(input.toLocaleLowerCase()) ||
        item.accNumber.toLocaleLowerCase().startsWith(input.toLocaleLowerCase()) ||
        item.cart.toString().toLocaleLowerCase().startsWith(input.toLocaleLowerCase())
      })
    })
  }

  const deleteMulti = () => {
    selectedItem.map(a => setInitialData(prev => prev.filter(b => b.id !== a)))
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
    confirmModal,
    setConfirmModal,
    deleteItem,
    search,
    deleteMultiModal,
    setDeleteMultiModal,
    deleteMulti
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
};

