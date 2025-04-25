
import { useEffect, useState } from "react";
import axios from "axios";
import "./weapons.css";
import WeaponsCard from "../weaponCard/weaponCard";
const Weapon = (props) =>{
    const [weapons,setWeapons] = useState([])

    useEffect(() => {
        
        axios.get("https://valorant-api.com/v1/weapons").then(response => {
          setWeapons(response.data.data)
        })
        
    },[])


    const texto = "Odin"
    
    return <>
            <h1>Armas de Valorant</h1>
            <div className="weapon-grid">
                {weapons.map((weapon) =>(
                    <WeaponsCard key={weapon.uuid} weapon={weapon} />
                ) )
                }
            </div>
           
    </>
}

export default Weapon;