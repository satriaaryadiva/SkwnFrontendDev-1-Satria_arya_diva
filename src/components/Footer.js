import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-6 py-10 px-6 text-sm">
      <div className="flex items-center gap-2 font-bold">
        <Image src="/decooricon.png" alt="Dekoor" width={28} height={28} />
        <h1 className="text-2xl">Dekoor</h1>
      </div>

      <p className="text-center max-w-md text-sm leading-relaxed">
        Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture. Always pay attention to details and give clear communication for the customers. Priority of our design is comfortability.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-10 mt-6 w-full max-w-4xl text-center sm:text-left">
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-2">
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Care guide</li>
            <li>Redeem warranty</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Social Media</h4>
          <ul className="space-y-2">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>TikTok</li>
          </ul>
        </div>
      </div>

      {/* Bagian About Us di tengah */}
      <div className="mt-10 text-center">
        <h4 className="font-semibold mb-2">About Us</h4>
        <ul className="space-y-2">
          <li>Our story</li>
          <li>Designer</li>
          <li>Craftmanship</li>
          <li>Sustainability</li>
        </ul>
      </div>
    </footer>
  );
}
