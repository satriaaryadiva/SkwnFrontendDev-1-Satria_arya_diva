import { ArrowLeft, ArrowRightToLine, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function ProductHighlight() {
  return (
    <section className="relative w-full">
      {/* Gambar sofa */}
      <Image
        src="/chair canva.png"
        alt="Pösht Sofa"
        width={380} 
        height={260}
        priority
        objectFit="cover"
        objectPosition="left"
        className="w-full h-[260px] object-cover object-left rounded-none"
      />

      {/* Label Highlight */}
      <p className="absolute top-6 left-4 text-xs text-white tracking-widest uppercase">
        Highlighted Product
      </p>

      {/* Harga */}
      <div className="absolute top-25  left-5    flex  flex-col gap-2  w-36   justify-center h-[121px]  text-black   text-center    shadow-lime-500">
        <div className="flex items-center  w-16 h-9 justify-center rounded-xl   js    bg-slate-100   text-center  px-4 py-2 ">
        <h2 className=" text-sm  relative  text-[#2F241F] px-4 py-2   text-left font-normal">$329</h2>
        </div>

      {/* Nama produk + tombol */}
      <div className="  bottom-6 w-36 h-[40px]  gap-2 flex-col flex    text-white">
        <h2 className="text-2xl  text-left justify-start  ">Pösht Sofa</h2>
        <button className="bg-[#2F241F] text-white text-xs   justify-between flex  flex-row text-wrap text-left px-6 py-2 rounded-xl  shadow">
            View Details    <ChevronRight size={16} className=" text-right "/>  
        </button>
      </div>
      </div>
    </section>
  );
}
