import React from "react";
import Image from "next/image";
import { SiteContext } from "../context/siteContext";

import Dialog from "@mui/material/Dialog";
import { LiaTimesSolid } from "react-icons/lia";
import { MenuItem, Select } from "@mui/material";

const DeleteConfirm = () => {
  const {isModalOpen, setIsModalOpen, setFilter, filter, filterdData, clearFilter } = React.useContext(SiteContext);

  return (
    <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <section className="bg-white rounded-2xl w-96 shadow-lg">
        <h3></h3>

        {/* modal footer */}
        <section className="p-7 border-t flex justify-between gap-2">
          <button className="border p-3 w-1/2 flex justify-center items-center rounded-lg bg-blue-600 text-white" onClick={filterHandle}>تایید</button>
          <button className="border p-3 w-1/2 flex justify-center items-center rounded-lg text-gray-700 border-gray-300" onClick={() => setIsModalOpen(false)}>انصراف</button>
        </section>
      </section>
    </Dialog>
  );
};

export default DeleteConfirm;
