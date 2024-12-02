import { useEffect, useState } from "react";
// import { csrfFetch } from "../../../../../store/csrf";

function EditPhotos({ property }) {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    setPhotos(property.SpotImages);
  }, [property.SpotImages]);

  console.log(photos, "photos");
  return <div>EditPhotos</div>;
}

export default EditPhotos;
