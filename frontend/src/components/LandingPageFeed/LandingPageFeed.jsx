import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/apiCalls";

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
      <ul>
        {spots.length > 0 ? (
          spots.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <li>No data available</li>
        )}
      </ul>
    </div>
  );
}

export default LandingPageFeed;
