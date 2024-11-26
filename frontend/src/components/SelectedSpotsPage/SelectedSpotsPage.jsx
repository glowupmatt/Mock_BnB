import { useParams } from "react-router-dom";

function SelectedSpotsPage() {
  const { spotId } = useParams();
  console.log(spotId);

  return <div>SelectedSpotsPage</div>;
}

export default SelectedSpotsPage;
