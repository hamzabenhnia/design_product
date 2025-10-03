import NavBar from "../components/NavBar";
import ProductList from "../components/ProductListe";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h2 className="text-center mt-6 text-2xl font-bold">Nos Produits</h2>
      <ProductList />
    </div>
  );
}
