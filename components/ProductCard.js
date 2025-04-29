
export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
      <h2 className="font-semibold text-lg">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
    </div>
  )
}
