'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function BestSeller() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=2')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <section className="px-6 py-10 bg-neutral-50">
      <h2 className="text-xl font-bold mb-4">This month’s best seller</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded shadow p-4">
            <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
            <p className="text-center mt-2">{product.title}</p>
            <p className="text-center text-sm text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
