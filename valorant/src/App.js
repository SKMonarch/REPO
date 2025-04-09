import logo from './logo.svg';
import './App.css';
import Weapon from './components/weapon/weapons';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Weapon />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
