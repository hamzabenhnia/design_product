export default function CardProduct({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform p-4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-lg"/>
      <h3 className="mt-3 font-bold">{product.name}</h3>
      <p className="text-gray-600">{product.price} $</p>
      <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Voir détails
      </button>
    </div>
  );
}