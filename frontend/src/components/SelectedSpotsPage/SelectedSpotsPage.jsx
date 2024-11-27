import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function SelectedSpotsPage() {
  const { spotId } = useParams();
  const [spot, setSpot] = useState();
  useEffect(() => {
    const fetchSpot = async () => {
      const response = await fetch(`/api/spots/${spotId}`);
      const data = await response.json();
      setSpot(data);
    };
    fetchSpot();
  }, [spotId]);

  console.log(spot);

  return <div>SelectedSpotsPage</div>;
}

export default SelectedSpotsPage;
