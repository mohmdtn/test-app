import Image from "next/image";

const Support = () => {
  return (
    <section className="border-t">
      <div className="flex p-3">
        <Image src={"/icons/guid.svg"} width={24} height={24} alt="guid" />
        <h2 className="pr-3 text-xl text-gray-700">راهنما</h2>
      </div>
      <div className="flex justify-between p-3">
        <div className="flex">
          <Image src={"/icons/message.svg"} width={24} height={24} alt="guid" />
          <h2 className="pr-3 text-xl text-gray-700">پشتیبانی</h2>
        </div>
        <h4 className="text-sm text-gray-700 font-iransans">ورژن 1.0.4</h4>
      </div>
    </section>
  );
};

export default Support;
