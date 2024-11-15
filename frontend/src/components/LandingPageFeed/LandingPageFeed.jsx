import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/apiCalls";
import SpotsCard from "./SpotsCard/SpotsCard";
import "./LandingPageFeed.css";

function LandingPageFeed() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const spots = data?.Spots || [];
  return (
    <div>
      <ul className="spots-parent-container">
        {spots.length > 0 ? (
          spots.map((item) => <SpotsCard key={item.id} spot={item} />)
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </div>
  );
}

export default LandingPageFeed;
