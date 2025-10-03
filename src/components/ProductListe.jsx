import CardProduct from "./CardProduct";

const products = [
  { id: 1, name: "T-shirt", price: 25, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Hoodie", price: 45, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Cap", price: 15, image: "https://via.placeholder.com/150" },
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <CardProduct key={product.id} product={product} />
      ))}
    </div>
  );
}