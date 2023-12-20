import React from "react";
import { SiteContext } from "../context/siteContext";
import Dialog from "@mui/material/Dialog";
import toast from "react-hot-toast";

const DeleteMultiItem = () => {
  const { deleteMultiModal, setDeleteMultiModal, deleteMulti } = React.useContext(SiteContext);

  const deleteHandle = () => {
    deleteMulti();
    setDeleteMultiModal(false)
    toast.success("آیتم ها با موفقیت حذف شدند.");
  }

  return (
    <Dialog open={deleteMultiModal} onClose={() => setDeleteMultiModal(false)}>
      <section className="bg-white rounded-2xl w-96 shadow-lg p-7">
        <h3 className="text-2xl text-center">آیا از حذف این آیتم ها مطما هستید؟</h3>

        {/* modal footer */}
        <section className="pt-7 flex justify-between gap-2">
          <button className="border p-3 w-1/2 flex justify-center items-center rounded-lg bg-red-500 text-white" onClick={deleteHandle}>حذف همه</button>
          <button className="border p-3 w-1/2 flex justify-center items-center rounded-lg text-gray-700 border-gray-300" onClick={() => setDeleteMultiModal(false)}>انصراف</button>
        </section>
      </section>
    </Dialog>
  );
};

export default DeleteMultiItem;
