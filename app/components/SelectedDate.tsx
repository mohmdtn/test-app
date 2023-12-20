import Image from "next/image";
import { HiChevronDown } from "react-icons/hi2";

const SelectedDate = () => {
  return (
    <section className="flex p-3 rounded-lg bg-gray-50 justify-center items-center cursor-pointer">
      <Image src={"/icons/chart.svg"} width={24} height={24} alt="chart icon" />
      <h4 className="text-md font-bold text-black px-3">سال مالی <span className="font-iransans">1402</span></h4>
      <HiChevronDown size={19} className="text-gray-500" />
    </section>
  );
};

export default SelectedDate;
