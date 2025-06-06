const WeaponCardDetails = ({ weapon, skinSeleccionada, esComprado }) =>{



    return(
    <>
        <h2>{weapon.displayName}</h2>
        <img src={skinSeleccionada?.displayIcon || weapon.displayIcon} alt={weapon.displayName} className="main-weapon-img"/>
        <div>
          { esComprado ?<> 🛒</> :<></>}
        </div>
        <div className="stats-weapon">
          <table>
            <tbody>
              <tr><th>Stat</th><th>Valor</th></tr>
              <tr><td>Fire Rate</td><td>{weapon.weaponStats?.fireRate ?? "N/A"}</td></tr>
              <tr><td>Mag Size</td><td>{weapon.weaponStats?.magazineSize ?? "N/A"}</td></tr>
              <tr><td>Reload (s)</td><td>{weapon.weaponStats?.reloadTimeSeconds ?? "N/A"}</td></tr>
              <tr><td>Wall Pen</td><td>{weapon.weaponStats?.wallPenetration?.split("::")[1] ?? "N/A"}</td></tr>
              <tr><td>Cost</td><td>{weapon.shopData?.cost ?? "N/A"} créditos</td></tr>
            </tbody>
          </table>
        </div>
    </>
    );
}

export default WeaponCardDetails;