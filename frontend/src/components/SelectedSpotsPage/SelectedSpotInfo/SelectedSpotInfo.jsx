import "./SelectedSpotInfo.css";

function SelectedSpotInfo({ spot }) {
  return (
    <div className="spot-info-container">
      <div className="spot-location-container">
        <h3 className="spot-title">{spot.name}</h3>
        <p>{spot.city}</p>
      </div>
      <div className="spot-owner-desc-container">
        <div className="spot-owner-container">
          <img src="/review-icon.svg" className="review-icons" />
          <p>
            Hosted By {spot.Owner.firstName} {spot.Owner.lastName}
          </p>
        </div>
        <div>
          <p>{spot.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SelectedSpotInfo;
