import React from "react";
import { SiteContext } from "../context/siteContext";
import Dialog from "@mui/material/Dialog";
import toast from "react-hot-toast";

interface DeleteConfirmProps {
  id?: string;
}

const DeleteConfirm: React.FC<DeleteConfirmProps> = ({id}) => {
  const { confirmModal, setConfirmModal, deleteItem } = React.useContext(SiteContext);

  const deleteHandle = () => {
    deleteItem(id);
    setConfirmModal(false)
    toast.success("آیتم با موفقیت حذف شد.");
  }

  return (
    <Dialog open={confirmModal} onClose={() => setConfirmModal(false)}>
      <section className="bg-white rounded-2xl w-96 shadow-lg p-7">
        <h3 className="text-2xl text-center">آیا از حذف این آیتم مطما هستید؟</h3>

        {/* modal footer */}
        <section className="pt-7 flex justify-between gap-2">
          <button className="border p-3 w-1/2 flex justify-center items-center rounded-lg bg-red-500 text-white" onClick={deleteHandle}>حذف</button>
          <button className="border p-3 w-1/2 flex justify-center items-center rounded-lg text-gray-700 border-gray-300" onClick={() => setConfirmModal(false)}>انصراف</button>
        </section>
      </section>
    </Dialog>
  );
};

export default DeleteConfirm;
