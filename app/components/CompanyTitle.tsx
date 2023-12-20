import Image from "next/image";
import { SiApple } from "react-icons/si";

const CompanyTitle = () => {
  return (
    <div className="bg-gray-50 rounded-lg text-black flex justify-between items-center px-4 py-3 mb-4">
      <div className="flex">
        <div className="bg-white rounded-md w-8 h-8 flex items-center justify-center">
          <SiApple size={22} />
        </div>
        <h2 className="pr-4 text-xl">شرکت اپل</h2>
      </div>
      <Image src={"/icons/change.svg"} width={24} height={24} alt="change icon" />
    </div>
  );
};

export default CompanyTitle;
