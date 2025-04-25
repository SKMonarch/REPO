const WeaponsCard = ({ weapon }) => {
    return (
        <div className="weapon-card">
            <h3>{weapon.displayName}</h3>
            <img src={weapon.displayIcon} alt={weapon.displayName} />
            <ul>
                <li>{weapon.damageRanges}</li>
            </ul>
        </div>
    );
};


export default WeaponsCard;