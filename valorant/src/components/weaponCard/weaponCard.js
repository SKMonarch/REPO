import { useNavigate } from "react-router-dom";

const WeaponsCard = ({ weapon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/weapon/${weapon.uuid}`);
  };

  return (
    <div className="weapon-card" onClick={handleClick}>
      <img src={weapon.displayIcon} alt={weapon.displayName} />
      <h3>{weapon.displayName}</h3>
    </div>
  );
};

export default WeaponsCard;
