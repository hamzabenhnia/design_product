import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyShop</h1>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/design" className="hover:text-blue-400">Design</Link></li>
        <li><Link to="/login" className="hover:text-blue-400">Login</Link></li>
        <li><Link to="/register" className="hover:text-blue-400">Register</Link></li>
      </ul>
    </nav>
  );
}