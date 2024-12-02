import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import { FaPlus } from "react-icons/fa";
import ImageGrid from "./SelectedSpotImageDisplay/ImageGrid";
import "./SelectedSpotImageDisplay/ImageGrid.css";
import GoogleMaps from "../PropertyComponents/CreateNewProperty/FormInputComponents/NewPropertyComponent/AddressInputComponents/GoogleMaps";
import SelectedSpotInfo from "./SelectedSpotInfo/SelectedSpotInfo";
import ReviewsMainComponent from "./SelectedSpotReviews/ReviewsMainComponent";
import OpenModalMenuItem from "../Navigation/OpenModalMenuItem";
import AddReviewComponent from "./AddReviewComponents/AddReviewComponent";

function SelectedSpotsPage() {
  const { spotId } = useParams();
  const [spot, setSpot] = useState();
  const [spotImages, setSpotImages] = useState([]);
  const [changed, setChanged] = useState(false);

  const [review, setReview] = useState();

  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    const fetchSpot = async () => {
      const response = await fetch(`/api/spots/${spotId}`);
      const data = await response.json();
      setSpot(data);
      setSpotImages(data.SpotImages || []);
    };
    fetchSpot();
  }, [spotId, user, changed, review]);

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

  const closeMenu = useModal();
  const center = useMemo(
    () => (spot ? { lat: spot.lat, lng: spot.lng } : { lat: 0, lng: 0 }),
    [spot]
  );
  if (!spot) return null;

  const userHasReview = spot.Reviews.some(
    (review) => review.userId === user?.id
  );

  return (
    <section className="selected-spot-body-container">
      <div className="image-track">
        <ImageGrid spotImages={spotImages} />
      </div>
      <div className="spot-details-container">
        <SelectedSpotInfo spot={spot} />
        <div className="google-map-container">
          <GoogleMaps lat={spot.lat} lng={spot.lng} center={center} />
        </div>
        <div className="reviews-container">
          <ReviewsMainComponent spot={spot} setChanged={setChanged} />
        </div>
      </div>
      <div className="add-review-button-container">
        {user && user.id !== spot.ownerId && !userHasReview ? (
          <div className="add-review-button">
            <OpenModalMenuItem
              modalComponent={
                <AddReviewComponent spot={spot} setReview={setReview} />
              }
              itemText="Add Review"
              onItemClick={closeMenu}
            />
            <FaPlus />
          </div>
        ) : null}
      </div>
    </section>
  );
}

export default SelectedSpotsPage;
