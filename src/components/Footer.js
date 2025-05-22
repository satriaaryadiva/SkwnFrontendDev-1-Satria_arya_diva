import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-between px-6 md:px-28 py-10 gap-10 text-sm">
      {/* Bagian Kiri: Logo + Deskripsi + Copyright */}
      <div className="flex flex-col gap-6 max-w-md">
        <div className="flex items-center gap-3">
          <Image src="/decooricon.png" alt="Dekoor" width={28} height={28} />
          <h1 className="text-2xl md:text-3xl font-bold text-[#2F241F]">Dekoor</h1>
        </div>
        <p className="text-[#667085] leading-relaxed">
          Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture. Always pay attention to details and give clear communication for the customers. Priority of our design is comfortability.
        </p>
        <span className="text-[#667085] font-semibold">© 2023 Dekoor. All rights reserved.</span>
      </div>

      {/* Bagian Kanan: Tiga Kolom */}
      <div className="flex items-center  md:grid md:grid-cols-3  grid-flow-col g *: text-center justify-center gap-12 text-[#667085]">
        <div>
          <h4 className="font-semibold text-black  ">Support</h4>
          <ul className="space-y-4">
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Care guide</li>
            <li>Redeem warranty</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold  text-black mb-4">Social Media</h4>
          <ul className="space-y-4">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>TikTok</li>
          </ul>
        </div>

        <div className="hidden md:block">
          <h4 className= " font-semibold text-black mb-4">About Us</h4>
          <ul className="space-y-4">
            <li>Our story</li>
            <li>Designer</li>
            <li>Craftmanship</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>
       <div className="md:hidden w-full items-center  text-center justify-center ">
          <h4 className=" font-semibold text-black mb-4">About Us</h4>
          <ul className="space-y-4">
            <li>Our story</li>
            <li>Designer</li>
            <li>Craftmanship</li>
            <li>Sustainability</li>
          </ul>
        </div>
    </footer>
  );
}
