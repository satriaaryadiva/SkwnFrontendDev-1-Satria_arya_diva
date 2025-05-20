import { PlayCircleIcon, Search, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between md:h-[709px] gap-10">
      {/* LEFT: Text Section */}
      <div className="md:w-2/3 md:pl-36 md:gap-12 flex flex-col gap-12 px-6 md:px-20 py-12 justify-center">
        <h1 className="text-3xl md:text-7xl font-bold text-[#2F241F] mb-6 leading-tight md:text-left text-center">
          The kind of <span className="text-[#a58272]">furniture</span><br />
          you have been looking for
        </h1>
        <div className="flex flex-col md:flex-row md:w-[712px] gap-4 w-full">
          <button className="bg-[#E5F0B6] md:text-2xl rounded-xl flex items-center justify-center px-4 py-4 md:px-9 md:py-[22px] text-[#553B33]">
            <Search className="mr-2 md:mr-4" /> Search Catalog
          </button>
          <button className="border border-[#553B33] md:text-2xl rounded-xl flex items-center justify-center px-4 py-4 text-[#553B33]">
            <PlayCircleIcon className="mr-2 md:mr-4" /> Watch Videos
          </button>
        </div>
      </div>

      {/* RIGHT: Image Section */}
      <div className="relative md:w-1/3 w-full">
        <Image
          src="/chair canva.png"
          alt="Pösht Sofa"
          width={709}
          height={709}
          priority
          className="w-full h-[260px] md:hidden  object-cover object-center rounded-none"
        />
 <Image
          src="/chair.png"
          alt="Pösht Sofa"
          width={709}
          height={709}
          priority
          className="w-full hidden md:block h-[260px] md:h-[709px] md:w-full object-cover object-center rounded-none"
        />
        {/* Info Card */}
        <div className="absolute bottom-4 left-4 rounded-xl p-4 w-64">
          <div className="text-sm text-[#2F241F] opacity-80 bg-slate-100 px-2 py-1 md:py-2 md:px-4 w-fit rounded mb-2">
            $329
          </div>
          <h2 className="text-lg font-semibold text-white mb-2">
            Pösht Sofa
          </h2>
          <button className="bg-[#2F241F] text-white text-xs flex items-center justify-between px-4 py-2 rounded-xl">
            View Details <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
