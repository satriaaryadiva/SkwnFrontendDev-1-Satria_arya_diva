import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductHighlight from "@/components/ProductHighlight";
import Features from "@/components/Features";
import Brands from "@/components/Brands";
import Categories from "@/components/Categories";


import Subscribe from "@/components/Subcribe";
import Footer from "@/components/Footer";
import BestSeller from "@/components/BestSeller";
export default function Home() {
  return (
    <main className="font-inter bg-white text-gray-800">
      <Navbar />
      <Hero />
      <ProductHighlight />
      <Features />
      <Brands />
      <Categories />
      <BestSeller />
      <Subscribe />
      <Footer />
    </main>
  );
}
