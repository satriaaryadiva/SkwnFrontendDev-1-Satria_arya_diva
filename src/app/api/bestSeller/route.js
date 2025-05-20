import { NextResponse } from 'next/server';

const products = [
  { id: 1, name: ' und Chair', image: '/bestseller/image1.png', price: 350 },
  { id: 2, name: ' ', image: '/bestseller/image2.png', price: 120 },
  { id: 3, name: ' Sofa und', image: '/bestseller/image3.png', price: 750 },
  { id: 4, name: ' ', image: '/bestseller/image4.jpg', price: 850 },
  { id: 5, name: ' ', image: '/bestseller/image5.png', price: 200 },
   
];

export async function GET(request) {
  try {
    const url = new URL(request.url);
    const idParam = url.searchParams.get('id');

    if (idParam !== null) {
      const id = Number(idParam);

      if (!Number.isInteger(id) || id <= 0) {
        return NextResponse.json(
          { error: 'Invalid id parameter, must be a positive integer' },
          { status: 400 }
        );
      }

      const product = products.find((p) => p.id === id);

      if (!product) {
        return NextResponse.json(
          { error: 'Product not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(product);
    }

    // Return all products jika tidak ada id parameter
    return NextResponse.json(products);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
