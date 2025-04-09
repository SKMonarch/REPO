
import { useEffect, useState } from "react";
import axios from "axios";
import "./weapons.css";
const Weapon = (props) =>{
    const [weapons,setWeapons] = useState([])

    useEffect(() => {
        
        axios.get("https://valorant-api.com/v1/weapons").then(response => {
          setWeapons(response.data.data)
        })
        
    },[])
    return <>
            <h1>Armas de Valorant</h1>
            <div className="weapon-grid">
                {weapons.map((weapon) =>(
                    <div className="weapon-card">
                        <h3>{weapon.displayName}</h3>
                        <img src={weapon.displayIcon}></img>
                    </div>
                ) )
                }
            </div>
           
    </>
}

export default Weapon;