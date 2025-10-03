import NavBar from "../components/NavBar";

export default function Login() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form className="bg-white shadow-lg rounded-xl p-6 w-80">
          <h2 className="text-xl font-bold mb-4">Connexion</h2>
          <input type="email" placeholder="Email" className="w-full border rounded-lg p-2 mb-3"/>
          <input type="password" placeholder="Mot de passe" className="w-full border rounded-lg p-2 mb-3"/>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}