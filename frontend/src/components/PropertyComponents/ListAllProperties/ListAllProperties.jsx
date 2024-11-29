import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SpotsCard from "../../LandingPageFeed/SpotsCard/SpotsCard";

function ListAllProperties() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.session.user);
  const [userProperties, setUserProperties] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/user/properties`);
      const data = await res.json();
      setUserProperties(data);
    }
    fetchData();
  }, [user]);
  console.log("userProperties", userProperties);
  return (
    <div className="spots-parent-container">
      {userProperties.map((property) => (
        <SpotsCard key={property.id} spot={property} />
      ))}
    </div>
  );
}

export default ListAllProperties;
