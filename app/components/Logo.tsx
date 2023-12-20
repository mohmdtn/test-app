import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex px-3 py-5">
      <Image src={"/pictures/logo.svg"} width={32} height={32} alt="logo" />
      <h1 className="font-bold text-3xl pr-3">ثمینا</h1>
    </div>
  );
};

export default Logo;
