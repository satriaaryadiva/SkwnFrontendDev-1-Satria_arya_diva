import Image from "next/image";

export default function Categories() {
  const data = [
    {
      id: 1,
      name: "Bedroom",
      image: "categories/categori1.jpg",
      width: 148,
      height: 523,
    },
    {
      id: 2,
      name: "Living Room",
      image: "categories/categori2.jpg",
      width: 148,
      height: 523,
    },
    {
      id: 3,
      name: "Home Office",
      image: "categories/categori3.jpg",
      width: 472,
      height: 523,
    },
  ];

  return (
    <section className="flex  flex-col md:flex-row md:m-auto md:gap-[48px] md:w-full md:justify-between items-center justify-center px-4 py-6 md:py-12 md:px-0  md:h-[683px] gap-8">
      {/* Right Side - Images */}
      <div className="flex flex-col items-center md:w-1/2">
        <div className="hidden md:flex gap-2">
          {data.map((item) => (
            <div key={item.id} className="flex  flex-col items-center">
              <Image
                src={`/${item.image}`}
                alt={item.name}
                width={item.width}
                height={item.height}
                className="rounded-lg  h-full object-cover"
              />
               
            </div>
          ))}
        </div>

        {/* Mobile-only image */}
        <div className="flex md:hidden justify-center mt-4">
          <Image
            src="/image.png"
            alt="Poesht Sofa"
            width={380}
            height={260}
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Left Side - Text & List */}
      <div className="flex flex-col  items-center md:items-start text-[#2F241F] md:w-1/2 gap-4 text-center md:text-left">
        <h2 className="text-sm md:text-base font-normal">Categories</h2>
        <h2 className="text-xl md:text-3xl font-bold max-w-[80%]">
          Furniture Sets Recommendations
        </h2>

        <ul className="flex flex-col  font-bold gap-2 w-full mt-4">
          <li className="bg-[#FCFAFA] p-4 rounded text-black font-bold">Bedroom</li>
          <li className="bg-[#E5F0B6] p-4 rounded md:w-[433px] font-normal md:py-5 md:px-6 text-black">
            <strong>Living Room</strong>
            <p className="text-sm mt-1 ">
              Enjoy a great living room aesthetics with your family. Designs created for increased comfortability.
            </p>
          </li>
          <li className="bg-[#FCFAFA] p-4 rounded text-black">Home Office</li>
          <li className="bg-[#FCFAFA] p-4 rounded text-black">Gaming Room</li>
        </ul>
      </div>
    </section>
  );
}
