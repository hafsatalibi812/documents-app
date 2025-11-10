import React from "react";
import "../styles/DocumentCard.css"; 
import { useNavigate } from "react-router-dom";


function DocumentCard({ icon, title, description, route }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <button className="document-card" onClick={handleClick}>
    <div className="card-content">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
    </button>
  );
}
export default DocumentCard;
