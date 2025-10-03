import NavBar from "../components/NavBar";

export default function Register() {
  return (
    <div>
      <NavBar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <form className="bg-white shadow-lg rounded-xl p-6 w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Créer un compte</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Nom complet</label>
            <input
              type="text"
              placeholder="Ton nom"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Ton email"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Mot de passe</label>
            <input
              type="password"
              placeholder="Ton mot de passe"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Confirmer mot de passe</label>
            <input
              type="password"
              placeholder="Confirme ton mot de passe"
              className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            S'inscrire
          </button>

          <p className="mt-4 text-sm text-gray-600 text-center">
            Déjà un compte ?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Se connecter
            </a>
          </p>
        </form>
      </div>
   </div>
  );
}