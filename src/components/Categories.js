import Image from "next/image";

export default function Categories() {
  return (
    <section className="py-8 px-6   h-[619px]  gap-6  flex flex-col items-center justify-center">
      <h2 className="text-sm   mb-4 text-center">Categories</h2>
      <h2 className=" text-xl/7 text-center text-wrap font-bold w-1/2  flex justify-center  mb-2">Furniture Sets Recommendations</h2>
      <div>
      <ul className="   mt-4 items-stretch gap-0   p-6 rounded-lg font-bold  ">
        <li className=" bg-[#FCFAFA]   font-bold text-black p-4 rounded">Bedroom</li>
        <li className="bg-[#E5F0B6] p-4 font-normal rounded">
          <strong>Living Room</strong><br /> <p className="text-sm">Enjoy a great living room aesthetics with your family  Designs created for increased comfortability</p>
        </li>
        <li className="bg-[#FCFAFA] p-4 rounded">Home Office</li>
        <li className="bg-[#FCFAFA] p-4 rounded">Gaming Room</li>
      </ul>

          <div className="flex justify-center py-1 px-2.5 mt-4">
            <Image src="/image.png" alt="Poesht Sofa" width={380} height={260} />
          </div>
      </div>
    </section>
  );
}
