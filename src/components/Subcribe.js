import { Mail } from "lucide-react";

export default function Subscribe() {
  return (
    <section className=" px-4  flex flex-row md:flex-col  md:px-36  md:py-20 items-center md:items-start justify-between bg-[#FCFAFA] py-9  md:gap-11 md:text-left">
    <div className="flex flex-col  md:justify-start justify-center text-[#2F241F] gap-3 md:gap-10 ">
     <h1 className="text-sm/5  tracking-widest uppercase  text-[#2F241F] md:text-2xl "> Limited Deal </h1>
      <h3 className="text-lg/7 font-bold text-[#2F241F] text-wrap md:text-6xl">Become a member and get 10% off your first purchase</h3>
      </div>
        <div className="flex justify-center md:justify-start md:w-1/2 md:items-start text-[#2F241F]   mt-4">
          <input
            type="email"
            placeholder="Enter your email "
            className="border border-white bg-white   md:w-1/2 placeholder-[#2F241F] text-[#2F241F]  rounded-l px-4 py-2 w-64 md:py-6 md:px-9"
          />
          <button className="bg-lime-200 rounded-r-2xl text-white px-4  py-4  md:p-7">
             <Mail size={16} className="text-[#2F241F] " />
          </button>
            </div>
    </section>
  );
}
