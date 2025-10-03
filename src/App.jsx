import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/LogIn";
import Register from "./pages/Register";
import Description from "./pages/Description";
import DesignPage from "./pages/DesignPage";

export default function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/description" element={<Description />} />
      <Route path="/design" element={<DesignPage />} />
    </Routes>
    </div>
  );
}
