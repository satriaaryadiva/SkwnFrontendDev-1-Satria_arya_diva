import { Mail } from "lucide-react";

export default function Subscribe() {
  return (
    <section className=" px-4  bg-[#FCFAFA] py-9  text-center">
    <div className="flex flex-col justify-center text-[#2F241F] gap-3">
     <h1 className="text-sm/5  tracking-widest uppercase  text-[#2F241F] "> Limited Deal </h1>
      <h3 className="text-lg/7 font-bold text-[#2F241F]">Become a member and get 10% off your first purchase</h3>
      </div>
        <div className="flex justify-center text-[#2F241F]   mt-4"> 
    
          <input
            type="email"
            placeholder="Enter your email "
            className="border border-white bg-white  placeholder-[#2F241F] text-[#2F241F]  rounded-l px-4 py-2 w-64"
          />
          <button className="bg-lime-200  text-white px-4  py-4 rounded-r">
             <Mail size={16} className="text-[#2F241F] " />
          </button>
            </div>
    </section>
  );
}
