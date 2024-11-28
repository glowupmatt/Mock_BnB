import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import ImageGrid from "./SelectedSpotImageDisplay/ImageGrid";
import "./SelectedSpotImageDisplay/ImageGrid.css";
import GoogleMaps from "../PropertyComponents/CreateNewProperty/FormInputComponents/NewPropertyComponent/AddressInputComponents/GoogleMaps";
import SelectedSpotInfo from "./SelectedSpotInfo/SelectedSpotInfo";
import ReviewsMainComponent from "./SelectedSpotReviews/ReviewsMainComponent";

function SelectedSpotsPage() {
  const { spotId } = useParams();
  const [spot, setSpot] = useState();
  const [spotImages, setSpotImages] = useState([]);
  useEffect(() => {
    const fetchSpot = async () => {
      const response = await fetch(`/api/spots/${spotId}`);
      const data = await response.json();
      setSpot(data);
      setSpotImages(data.SpotImages || []);
    };
    fetchSpot();
    console.log(spot);
  }, [spotId]);

  useEffect(() => {
    if (spotImages.length < 5) {
      const additionalImages = Array(5 - spotImages.length).fill({
        url: "/no-image-avaliable-icon.svg",
      });
      setSpotImages((prev) => [...prev, ...additionalImages]);
    } else if (spotImages.length > 5) {
      const filteredImages = spotImages.filter(
        (image) => image.url !== "/no-image-avaliable-icon.svg"
      );
      setSpotImages(filteredImages.slice(0, 5));
    }
  }, [spotImages]);

  const center = useMemo(
    () => (spot ? { lat: spot.lat, lng: spot.lng } : { lat: 0, lng: 0 }),
    [spot]
  );
  if (!spot) return null;
  return (
    <section>
      <div className="image-track">
        <ImageGrid spotImages={spotImages} />
      </div>
      <div className="spot-details-container">
        <SelectedSpotInfo spot={spot} />
        <div className="google-map-container">
          <GoogleMaps lat={spot.lat} lng={spot.lng} center={center} />
        </div>
        <div className="reviews-container">
          <ReviewsMainComponent spot={spot} />
        </div>
      </div>
    </section>
  );
}

export default SelectedSpotsPage;
