import "./SpotsCard.css";

function SpotsCard({ spot }) {
  return (
    <div className="spot-card">
      <div className="spot-data-container">
        <div className="spot-image-container">
          <img className="spot-image" src={spot.previewImage} alt={spot.name} />
        </div>
        <div className="spot-info-container">
          <h3 className="spot-name">{spot.name}</h3>
          <p className="spot-location">
            {spot.city}, {spot.country}
          </p>

          <p className="spot-price">${spot.price} night</p>
        </div>
      </div>
    </div>
  );
}

export default SpotsCard;
