
const SelectedSkins = ({skinsFiltradas,skinSeleccionada,setSkinSeleccionada,nameForRarezaUuid}) =>{

  const skinDefault = (skin) => {

    if (skin.displayName.includes("Standard") || skin.displayName.includes("Meele")){
      return null;
    }
    return skin;
    


    
}

return <>
    <div className="skins-gallery">
    {skinsFiltradas.map((skin, index) => (
      <div key={index} className={`skin-card 
            ${skinSeleccionada?.uuid === skin.uuid ? "selected" : ""}
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