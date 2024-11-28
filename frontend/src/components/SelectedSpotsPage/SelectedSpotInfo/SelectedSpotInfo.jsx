function SelectedSpotInfo({ spot }) {
  return (
    <>
      <div>
        <h3>{spot.name}</h3>
        <p>{spot.city}</p>
      </div>
      <div>
        <div>
          {spot.Owner.firstName} {spot.Owner.lastName}
        </div>
        <div>
          <p>{spot.description}</p>
        </div>
      </div>
    </>
  );
}

export default SelectedSpotInfo;
