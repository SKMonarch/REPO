import { useEffect, useState } from "react";
import axios from "axios";
import WeaponsCardShop from "../weaponCardShop/weaponCardShop";

const Tienda = ({ cash, reducirCash }) => {
    const [weapons,setWeapons] = useState([])
    

    useEffect(() => {
        
        axios.get("https://valorant-api.com/v1/weapons").then(response => {
          const allWeapons =response.data.data;

          /*random indice, pillar ya las 5  */
          const randomWeapons = [...allWeapons].sort(() => 0.5 - Math.random()).slice(0, 5);
          
          const weaponsSkins = randomWeapons.map(weapon => {
            const validSkins = weapon.skins.filter(skin =>skin.displayIcon &&
                !skin.displayName.toLowerCase().includes("random") &&
                !skin.displayName.toLowerCase().includes("standard")
            );
                const randomSkin = validSkins[Math.floor(Math.random() * validSkins.length)];
                return { ...weapon, skin: randomSkin };
            });

            setWeapons(weaponsSkins);
            
          
        })
       

    },[])
    return <>
            <h1>Armas de Valorant</h1>
            <div className="weapon-grid">
                
                {weapons.map((weapon) =>(
                   <WeaponsCardShop key={weapon.uuid} weapon={weapon} skin={weapon.skin} reducirCash={reducirCash} />
                ) )
                }
            </div>
           
    </>
    /*localstorage */
    /*
                //cada vez qie se compre 
    localStorage.setItem("money",50000) 
                
                const mymoney = (props) => {
                    const inicial = 50000
                    }
                
    */
    
}

export default Tienda;