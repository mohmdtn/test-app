import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { SiteContext } from "../context/siteContext";
import DeleteConfirm from "./DeleteConfirm";

interface TableRecordProps {
  title: string;
  code: string;
  accNumber: string;
  accShaba: string;
  cart: number;
  portalStatus: boolean;
  cartStatus: boolean;
  active?: boolean;
  id: string;
}

const TableRecord: React.FC<TableRecordProps> = ({ title, code, accNumber, accShaba, cart, portalStatus, cartStatus, active, id }) => {
  const [isSelected, setIsSelected] = useState(active);
  const { setSelectedItem, setConfirmModal } = React.useContext(SiteContext);

  const deleteHandel = () => {
    setConfirmModal(true)
  }

  useEffect(() => {
    setIsSelected(active)
  }, [active])

  useEffect(() => {
    if (isSelected) {
      setSelectedItem(old => [...old, id])
    }
    else {
      setSelectedItem((prev => prev.filter((item) => item !== id) ))
    }
  }, [isSelected])

  return (
    <>
      <DeleteConfirm id={id} />
      <tr>
        <td className="flex gap-2 sticky right-0 bg-white">
          <div className={`h-5 cursor-pointer w-5 border rounded-[4px] flex items-center justify-center ${isSelected && "border-blue-600 bg-sky-200 text-blue-600"}`} onClick={() => setIsSelected((prev) => !prev)}>
            {isSelected && <FiCheck />}
          </div>
          {title.length > 20 ? `${title.substring(0, 20)}...` : title}
        </td>
        <td className="font-iransans dir-left">{code}</td>
        <td className="font-iransans dir-left">{accNumber}</td>
        <td className="font-iransans dir-left">{accShaba.length > 22 ? `${accShaba.substring(0, 22)}...` : accShaba}</td>
        <td className="font-iransans dir-left">{cart.toString().replace(/(.{4})/g, "$1-").slice(0, -1)}</td>
        <td>{portalStatus ? "متصل" : "غیر متصل"}</td>
        <td>{cartStatus ? "متصل" : "غیر متصل"}</td>
        <td className="w-32 flex justify-between sticky left-0 bg-white">
          <button><Image src={"icons/resize.svg"} width={20} height={20} alt="resize icon" /></button>
          <button><Image src={"icons/pen.svg"} width={20} height={20} alt="edit icon" /></button>
          <button onClick={deleteHandel}><Image src={"icons/trash.svg"} width={20} height={20} alt="trash icon" /></button>
        </td>
      </tr>
    </>
  );
};

export default TableRecord;
