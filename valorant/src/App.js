import logo from "./logo.svg";
import "./App.css";
import Weapon from "./components/weapon/weapons";
import Tienda from "./components/tienda/tienda";
import WeaponDetail from "./weaponDetails/weaponDetail";
import Cash from "./cash/cash";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const [cash, setCash] = useState(5000);

  const reducirCash = (precio) => {
    if (precio <= cash) {
      setCash(cash - precio);
      return true;
    } else {
      return false;
    }
  };
  return (
    <BrowserRouter>
      <nav className="bg-gray-800 p-4 text-white flex gap-4">
        <Link to="/" className="hover:underline">
          Inicio
        </Link>
        <Link to="/tienda" className="hover:underline">
          Tienda
        </Link>
        <Link to="/armeria" className="hover:underline">
          Armeria
        </Link>

        <div>
          <Cash cash={cash} />
        </div>
      </nav>

      <Routes>
        <Route path="/tienda" element={<Tienda reducirCash={reducirCash} />}  />
        <Route path="/armeria" element={<Weapon />} />
        <Route path="/weapon/:id" element={<WeaponDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
