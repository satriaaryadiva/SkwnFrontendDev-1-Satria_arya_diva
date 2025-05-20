export default function Footer() {
  return (
    <footer className="bg-neutral-100 py-10 px-6">
      <div className="text-center mb-4">🪑 Dekoor</div>
      <p className="text-sm text-center mb-6">
        Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture.
      </p>
      <div className="flex justify-between text-sm flex-wrap">
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Care guide</li>
            <li>Redeem warranty</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Social Media</h4>
          <ul>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>TikTok</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">About Us</h4>
          <ul>
            <li>Our Story</li>
            <li>Designer</li>
            <li>Craftmanship</li>
            <li>Sustainability</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
