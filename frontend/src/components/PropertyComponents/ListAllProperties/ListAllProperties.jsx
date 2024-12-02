import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SpotsCard from "../../LandingPageFeed/SpotsCard/SpotsCard";
import "./ListAllProperties.css";
import { useModal } from "../../../context/Modal";
import OpenModalMenuItem from "../../Navigation/OpenModalMenuItem";
import DeleteProperty from "./DeleteProperty/DeleteProperty";

function ListAllProperties() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.session.user);
  const { closeMenu } = useModal();
  const [userProperties, setUserProperties] = useState();
  const [change, setChange] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {}, [change]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/api/user/properties`);
      const data = await res.json();
      setUserProperties(data);
    }
    fetchData();
  }, [user, change]);

  if (!user) return null;
  return (
    <>
      <div className="manage-container">
        <div className="text-container">
          <p className="manage-spot-title">Manage Spots</p>
          <Link
            className="create-new-prop-button"
            to={`/${user.id}/new-property`}
          >
            Click to add a new Spot
          </Link>
        </div>
        {userProperties && userProperties.length > 0 ? (
          <div className="spots-parent-container">
            {userProperties.map((property) => (
              <div key={property.id} className="update-delete-card-container">
                <SpotsCard key={property.id} spot={property} />
                <div className="button-container">
                  <Link to={`/${property.id}/edit`} className="button-class">
                    Update
                  </Link>
                  <div className="delete-modal-styles">
                    <OpenModalMenuItem
                      onModalClose={closeMenu}
                      modalComponent={
                        <DeleteProperty
                          propertyId={property.id}
                          setChange={setChange}
                        />
                      }
                      itemText="Delete"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No properties found.</p>
        )}
      </div>
    </>
  );
}

export default ListAllProperties;
