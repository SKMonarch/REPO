import { useNavigate } from "react-router-dom";

const WeaponsCardShop = ({ skin, reducirCash }) => {
  const navigate = useNavigate();

  const RAREZAS_PRECIOS = {
    "0cebb8be-46d7-c12a-d306-e9907bfc5a25": 875,
    "60bca009-4182-7998-dee7-b8a2558dc369": 1275,
    "e046854e-406c-37f4-6607-19a9ba8426fc": 1775,
    "3eacf00d-4f09-926d-129a-8c594f0ec074": 2475,
    "12683d76-48d7-84a3-4e09-6985794f0445": 3575,
  };

  const precioRareza = (uuid) => {
    return RAREZAS_PRECIOS[uuid] ?? 500;
  };

  const comprar = () => {
    const precio = precioRareza(skin.contentTierUuid);

    
    let skinsGuardadas = JSON.parse(localStorage.getItem("skins")) || [];

    
    if (skinsGuardadas.includes(skin.uuid)) {
      alert("¡Ya compraste esta skin!");
      return;
    }

    const success = reducirCash(precio);
    if (success) {
      alert("¡Compra realizada!");

      
      skinsGuardadas.push(skin.uuid);
      localStorage.setItem("skins", JSON.stringify(skinsGuardadas));
    } else {
      alert("Saldo insuficiente");
    }
    console.log(skinsGuardadas);
  };

  return (
    <div className="weapon-card">
      <img src={skin.displayIcon} alt={skin.displayName} />
      <h3>{skin.displayName}</h3>
      <button onClick={comprar}>COMPRAR</button>
      <h4>{precioRareza(skin.contentTierUuid)}</h4>
    </div>
  );
};

export default WeaponsCardShop;
