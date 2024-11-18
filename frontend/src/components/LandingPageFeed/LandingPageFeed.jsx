import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSpots } from "../../store/fetchRequests/fetchAllSpots";
import SpotsCard from "./SpotsCard/SpotsCard";
import "./LandingPageFeed.css";

function LandingPageFeed() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.fetchAllSpots);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(fetchAllSpots(pageNumber));
  }, [dispatch, pageNumber]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const spots = data?.Spots || [];
  return (
    <>
      <ul className="spots-parent-container">
        {spots.length > 0 ? (
          spots.map((item) => <SpotsCard key={item.id} spot={item} />)
        ) : (
          <li>No data available</li>
        )}
      </ul>
      <div className="home-pagination-container">
        {pageNumber === 1 ? null : (
          <button
            className="pagination-button"
            onClick={() => setPageNumber((prev) => prev - 1)}
          >
            View Pervious 10
          </button>
        )}
        <button
          className="pagination-button"
          onClick={() => setPageNumber((prev) => prev + 1)}
        >
          View 10 More
        </button>
      </div>
    </>
  );
}

export default LandingPageFeed;
