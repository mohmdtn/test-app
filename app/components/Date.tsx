import Image from "next/image";

const Date = () => {
  return (
    <section className="flex">
      <div className="flex items-center">
        <Image src={"/icons/clock.svg"} width={24} height={24} alt="clock logo" />
        <p className="text-lg text-gray-700 pr-3">ساعت <span className="font-iransans">13:31</span></p>
      </div>
      <div className="flex items-center mr-8">
        <Image src={"/icons/calendar.svg"} width={24} height={24} alt="calendar logo" />
        <p className="text-lg text-gray-700 pr-3">پنجشنبه، <span className="font-iransans">27</span> مرداد <span className="font-iransans">1402</span></p>
      </div>
    </section>
  );
};

export default Date;
