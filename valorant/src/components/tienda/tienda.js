import { useEffect, useState } from "react";
import axios from "axios";
const Tienda = (props) => {
    const [weapons,setWeapons] = useState([])

    useEffect(() => {
        
        axios.get("https://valorant-api.com/v1/weapons").then(response => {
          const allWeapons =response.data.data;

          const randomWeapons = [...allWeapons].sort(() => 0.5 - Math.random());
          const shopWeapons = randomWeapons.slice(0, 5);
          setWeapons(shopWeapons);
        })
        
        
    },[])
    return <>
            <h1>Armas de Valorant</h1>
            <div className="weapon-grid">
                {weapons.map((weapon) =>(
                    <div className="weapon-card">
                        <h3>{weapon.skins[8].displayName}</h3>
                        <img src={weapon.skins[8].displayIcon}></img>
                    </div>
                ) )
                }
            </div>
           
    </>
    
    
    return <>
    </>
}

export default Tienda;