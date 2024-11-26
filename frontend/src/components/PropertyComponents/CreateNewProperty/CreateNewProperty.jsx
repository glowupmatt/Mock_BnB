import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { csrfFetch } from "../../../store/csrf";
import AddressForm from "./FormInputComponents/AddressInputComponents/AddressForm";
import PropertyDescription from "./FormInputComponents/PropertyDescription/PropertyDescription";
import PrevPageButton from "./FormInputComponents/FormButtons/PrevPageButton";
import "./CreateNewProperty.css";
import NextPageButton from "./FormInputComponents/FormButtons/NextPageButton";

function CreateNewProperty() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    console.log(user.id);
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  //PAGE NUMBER
  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);
  const [isDisabled, setIsDisabled] = useState(true);

  //ADDRESS FORM
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("United States");
  const [lat, setLat] = useState(47.5879077);
  const [lng, setLng] = useState(-122.037603);

  // PROPERTY FORM
  const [propertyName, setPropertyName] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [propertyImage, setPropertyImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const property = {
      ownerId: user.id,
      address: street,
      city,
      state,
      country,
      lat,
      lng,
      name: propertyName,
      description: propertyDescription,
      price: propertyPrice,
      previewImage: propertyImage,
    };
    console.log(property);

    async function createProperty() {
      const response = await csrfFetch("/api/spots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(property),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate(`/${user.id}/current-properties`);
      }
    }
    try {
      createProperty();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="form-container">
      <form className="form-component" onSubmit={handleSubmit}>
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
            country={country}
            setCountry={setCountry}
            zipCode={zipCode}
            setZipCode={setZipCode}
            setIsDisabled={setIsDisabled}
            isDisabled={isDisabled}
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
        <div className="submit-button-container">
          {pageNumber === 1 ? (
            <NextPageButton isDisabled={isDisabled} />
          ) : (
            <>
              <PrevPageButton />
              <input className="create-property-submit-button" type="submit" />
            </>
          )}
        </div>
      </form>
    </section>
  );
}

export default CreateNewProperty;
