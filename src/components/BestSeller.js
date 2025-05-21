"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import axios from "axios";

export default function BestSeller() {
  const [products, setProducts] = useState([]);

  const [sliderRef, instanceRef] = useKeenSlider({
  loop: true,
  mode: " free-snap",   
  slides: {
    perView: 3,
    spacing: 16,
  },
  breakpoints: {
    "(max-width: 1024px)": {
      slides: { perView: 3, spacing: 12 },
    },
    "(max-width: 640px)": {
      slides: { perView: 2, spacing: 8 }, // ubah dari 1 jadi 2
    },
  },
});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/bestSeller");
        if (res.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        setProducts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-[#2A1E1A]  mt-14 py-10 px-6 text-white relative">
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-gray-400 text-sm font-medium">Categories</p>
          <h2 className="text-2xl font-semibold p-2  text-wrap">This months best seller</h2>
        </div>
        <button className="bg-lime-100 text-nowrap text-black px-4 py-2 rounded-xl  h-10  w-24  text-xs font-normal">
          SEE MORE
        </button>
      </div>

      <div className="relative">
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-[#D3E76A] rounded-full w-13 h-13 flex items-center justify-center cursor-pointer shadow-md"
          aria-label="Previous slide"
        >
          <ChevronLeft className="text-black" />
        </button>

        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-[#D3E76A] rounded-full w-13 h-13 flex items-center justify-center cursor-pointer shadow-md"
          aria-label="Next slide"
        >
          <ChevronRight className="text-black" />
        </button>

        <div ref={sliderRef} className="keen-slider">
          {products.length === 0 && (
            <p className="text-white text-center py-10">Loading products...</p>
          )}

          {products.map((product) => (
            <div
              key={product.id}
              className="keen-slider__slide rounded-2xl overflow-hidden bg-white text-black"
            >
              <div className="relative w-full h-64  ">
                {product.image ? (
                  <Image
                    src={
                      product.image.startsWith("/")
                        ? product.image
                        : "/" + product.image
                    }
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover",  objectFit: "cover" }}
                    sizes="(max-width: 640px) 100vw, 50vw ,(max-height: 256px) 50vw"
                    priority={false}
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No image available
                  </div>
                )}
                <div className="relative flex  items-baseline-last left-0 w-full h-full    ">
                  <div className="flex items-center  absolute bottom-12 left-4  w-16 h-9 justify-center rounded-xl  bg-slate-100 opacity-80   text-center  px-4 py-2 ">
                    <h2 className=" text-sm  relative  text-[#2F241F] px-4 py-2   text-left font-normal">${product.price.toLocaleString("en-US")}</h2>
                  </div>
                </div>

                <h3 className="text-white backdrop-opacity-100 absolute bottom-4 left-6  bg-none text-lg font-medium">
                  {product.name.length > 16
                    ? product.name.slice(0, 16) + ""
                    : product.name}
                </h3>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
