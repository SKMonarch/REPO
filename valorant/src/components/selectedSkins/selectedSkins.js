
const SelectedSkins = ({skinsFiltradas,skinSeleccionada,setSkinSeleccionada,nameForRarezaUuid}) =>{
  const transacciones = JSON.parse(localStorage.getItem("transacciones")) || [];
  const skinDefault = (skin) => {

    if (skin.displayName.includes("Standard") || skin.displayName.includes("Meele")){
      return null;
    }
    return skin;
    
    const isSkinInTransactions = (skinUuid) => {
    return transacciones.some(trans => trans.skinUuid === skinUuid);
    }


    
}

return <>
    <div className="skins-gallery">
    {skinsFiltradas.map((skin, index) => (
      <div key={index} className={`skin-card 
            ${skinSeleccionada?.uuid === skin.uuid ? "selected" : ""}
            ${isSkinInTransactions(skin.uuid) ? "owned" : ""}
          `} onClick={() => setSkinSeleccionada(skinDefault(skin))} >
        <img src={skin.displayIcon} alt={skin.displayName} />
        <p>{skin.displayName}</p>
        <p className="rareza-skin">{nameForRarezaUuid(skin.contentTierUuid)}</p>
      </div>
    ))}
  </div>
  </>

}

export default SelectedSkins;