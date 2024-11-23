import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AddressForm from "./FormInputComponents/AddressInputComponents/AddressForm";
import PropertyDescription from "./FormInputComponents/PropertyDescription/PropertyDescription";
import "./CreateNewProperty.css";

function CreateNewProperty() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  //PAGE NUMBER
  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);

  //ADDRESS FORM
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [lat, setLat] = useState(47.5879077);
  const [lng, setLng] = useState(-122.037603);

  // PROPERTY FORM
  const [propertyName, setPropertyName] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [propertyImage, setPropertyImage] = useState("");

  return (
    <section className="form-container">
      <form className="form-component">
        {pageNumber === 1 && (
          <AddressForm
            lat={lat}
            setLat={setLat}
            lng={lng}
            setLng={setLng}
            street={street}
            setStreet={setStreet}
            city={city}
            setCity={setCity}
            state={state}
            setState={setState}
            zipCode={zipCode}
            setZipCode={setZipCode}
          />
        )}

        {pageNumber === 2 && (
          <PropertyDescription
            propertyName={propertyName}
            setPropertyName={setPropertyName}
            propertyDescription={propertyDescription}
            setPropertyDescription={setPropertyDescription}
            propertyPrice={propertyPrice}
            setPropertyPrice={setPropertyPrice}
            propertyImage={propertyImage}
            setPropertyImage={setPropertyImage}
            pageNumber={pageNumber}
          />
        )}
      </form>
    </section>
  );
}

export default CreateNewProperty;
