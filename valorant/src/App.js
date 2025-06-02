import logo from "./logo.svg";
import "./App.css";
import Weapon from "./components/weapon/weapons";
import Tienda from "./components/tienda/tienda";
import WeaponDetail from "./weaponDetails/weaponDetail";
import Cash from "./cash/cash";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  const [cash, setCash] = useState(() => {
    const transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
    const storedCash = transacciones.reduce((cashTotal, monto) => {
      return  cashTotal + monto;
    }, 5000)
    
        
    
    /*localStorage.getItem("cash");
    return storedCash ? parseInt(storedCash) : 5000;*/
    return storedCash;
  });

  useEffect(() => {
    localStorage.setItem("cash", cash);
  }, [cash]);

  const registrarTransaccion = (monto) => {
    const transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
    transacciones.push(monto);
    localStorage.setItem("transacciones", JSON.stringify(transacciones));
    console.log("Transacciones actualizadas:", transacciones);
  };

  const reducirCash = (precio) => {
    if (precio <= cash) {
      const nuevoCash = cash - precio;
      setCash(nuevoCash);
      registrarTransaccion(-precio);
      return true;
    } else {
      return false;
    }
  };

  const aumentarCash = (cantidad) => {
    const nuevoCash = cash + cantidad;
    setCash(nuevoCash);
    registrarTransaccion(cantidad);
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

        <div className="ml-auto flex items-center gap-3">
          <button
            className="boton-cash"
            onClick={() => aumentarCash(5000)}
          >
            Añadir $5000
          </button>
          <Cash cash={cash} />
        </div>
      </nav>

      <Routes>
        <Route path="/tienda" element={<Tienda reducirCash={reducirCash} />} />
        <Route path="/armeria" element={<Weapon />} />
        <Route path="/weapon/:id" element={<WeaponDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
