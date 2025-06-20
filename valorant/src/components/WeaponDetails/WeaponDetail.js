import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./weapons.css";
import WeaponCardDetails from "../WeaponCardDetails/WeaponCardDetails";
import SelectedSkins from "../SelectedSkins/SelectedSkins";
/*
const RAREZAS = {
  "0cebb8be-46d7-c12a-d306-e9907bfc5a25": "Select Edition",
  "60bca009-4182-7998-dee7-b8a2558dc369": "Deluxe Edition",
  "e046854e-406c-37f4-6607-19a9ba8426fc": "Premium Edition",
  "3eacf00d-4f09-926d-129a-8c594f0ec074": "Ultra Edition",
  "12683d76-48d7-84a3-4e09-6985794f0445": "Exclusive Edition",
};
*/

const RAREZAS_UUIDS = [ 
  "0cebb8be-46d7-c12a-d306-e9907bfc5a25",
  "60bca009-4182-7998-dee7-b8a2558dc369",
  "e046854e-406c-37f4-6607-19a9ba8426fc",
  "3eacf00d-4f09-926d-129a-8c594f0ec074",
  "12683d76-48d7-84a3-4e09-6985794f0445"
]

const WeaponDetail = () => {
  const { id } = useParams();
  const [weapon, setWeapon] = useState(null);
  const [nombreFiltro, setNombreFiltro] = useState("");
  const [rarezaFiltro, setRarezaFiltro] = useState("");
  const [skinSeleccionada, setSkinSeleccionada] = useState(null);

  const nameForRarezaUuid = (uuid) => {
    if (uuid === "0cebb8be-46d7-c12a-d306-e9907bfc5a25") {
      return "Select Edition"
    }
    else if (uuid === "60bca009-4182-7998-dee7-b8a2558dc369") {
      return "Deluxe Edition"
    }
    else if (uuid === "e046854e-406c-37f4-6607-19a9ba8426fc") {
      return "Premium Edition"
    }
    else if (uuid === "3eacf00d-4f09-926d-129a-8c594f0ec074") {
      return "Ultra Edition"
    }
    else if (uuid === "12683d76-48d7-84a3-4e09-6985794f0445"){
      return "Exclusive Edition"
    }
  }

  useEffect(() => {
    axios.get(`https://valorant-api.com/v1/weapons/${id}`).then((response) => {
      setWeapon(response.data.data);
      
      
    });
  }, [id]);

  if (!weapon) return <p>Cargando...</p>;
  let skinsGuardadas = JSON.parse(localStorage.getItem("skins")) || [];
  let esComprado = skinSeleccionada && skinsGuardadas.includes(skinSeleccionada.uuid);

  const skinsFiltradas = weapon.skins.filter((skin) => !skin.displayName.toLowerCase().includes("random") &&
    skin.displayName.toLowerCase().includes(nombreFiltro.toLowerCase()) &&
    (rarezaFiltro === "" || skin.contentTierUuid === rarezaFiltro)
  );

  return (
    <div className="weapon-detail">
   
     <WeaponCardDetails key={weapon.uuid} weapon={weapon} skinSeleccionada={skinSeleccionada}  esComprado={esComprado}/>

  
  

      <h3>Skins disponibles:</h3>

      <div className="filtros-skins">
        <input type="text" placeholder="Buscar por nombre..." value={nombreFiltro} onChange={(e) => setNombreFiltro(e.target.value)} />
        
        <select
          value={rarezaFiltro} onChange={(e) => setRarezaFiltro(e.target.value)} >
          <option value="">Todas las rarezas</option>
          
          {
          RAREZAS_UUIDS.map( nuid =>  <option key={nuid} value={nuid}>
              {nameForRarezaUuid(nuid)}
            </option>
           )
          } 
          
        </select>


        <select>
          <option value="">Propietario</option>
        </select>
      </div>

      <SelectedSkins weapon={weapon} skinsFiltradas={skinsFiltradas} skinSeleccionada={skinSeleccionada} setSkinSeleccionada={setSkinSeleccionada} nameForRarezaUuid={nameForRarezaUuid} />
    </div>
  );
};

export default WeaponDetail;
