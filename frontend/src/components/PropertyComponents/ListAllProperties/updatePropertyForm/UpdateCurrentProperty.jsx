import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdatePropertyForm from "./UpdatePropertyForm";

function UpdateCurrentProperty() {
  const { propertyId } = useParams();
  const [property, setProperty] = useState();
  useEffect(() => {
    async function fetchProperty() {
      const res = await fetch(`/api/spots/${propertyId}`);
      const data = await res.json();
      setProperty(data);
    }
    fetchProperty();
  }, [propertyId]);
  if (!property) return <>No Current Property</>;
  console.log({ ...property });
  return (
    <div>
      <UpdatePropertyForm property={property} />
    </div>
  );
}

export default UpdateCurrentProperty;
