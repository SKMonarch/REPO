import logo from './logo.svg';
import './App.css';
import Weapon from './components/weapon/weapons';
import Tienda from './components/tienda/tienda';
import WeaponDetail from './weaponDetails/weaponDetail';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
    <nav className="bg-gray-800 p-4 text-white flex gap-4">
        <Link to="/" className="hover:underline">Inicio</Link>
        <Link to="/tienda" className="hover:underline">Tienda</Link>
        <Link to="/armeria" className="hover:underline">Armeria</Link>
    </nav>
    <Routes>
      <Route path="/tienda" element={<Tienda />}/>
      <Route path="/armeria" element={<Weapon />}/>
      <Route path="/weapon/:id" element={<WeaponDetail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
