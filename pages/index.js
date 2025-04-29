
import Head from 'next/head'
import ProductCard from '../components/ProductCard'

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
  return { props: { products } }
}

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Product Listing Page</title>
      </Head>
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </main>
    </div>
  )
}
