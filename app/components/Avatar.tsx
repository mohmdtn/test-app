import Image from "next/image";
import Badge from '@mui/material/Badge';

const Avatar = () => {
  return (
    <section className="flex justify-between">
      <Image src={"/icons/phone.svg"} width={24} height={24} alt="phone icon" />
      <div className="flex relative mx-4">
        <Image src={"/icons/bell.svg"} width={24} height={24} alt="bell icon" />
        <span className="w-2 h-2 rounded-full bg-red-600 absolute right-[3px] top-3" />
      </div>
      <Image src={"/pictures/avatar.svg"} width={43} height={43} alt="user picture" />
    </section>
  );
};

export default Avatar;
