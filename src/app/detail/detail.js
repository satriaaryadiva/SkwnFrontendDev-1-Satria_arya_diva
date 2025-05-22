'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { getFurnitureProducts } from '../../lib/api'


export default function Detail () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getFurnitureProducts()
        setProducts(data)
      } catch (error) {
        console.error('Gagal mengambil data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Furniture</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition-all">
              <Image src={product.thumbnail} alt={product.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-2 truncate">{product.description}</p>
                <p className="text-lg font-bold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
