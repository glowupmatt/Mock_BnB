import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { csrfFetch } from "../../../../..//store/csrf";
import AddressForm from "./AddressInputComponents/AddressForm";
import PropertyDescription from "./PropertyDescription/PropertyDescription";
import PrevPageButton from "../FormButtons/PrevPageButton";
import NextPageButton from "../FormButtons/NextPageButton";
import { addPageNumber } from "../../../../../store/FormPageNumber/pageNumberReducer";
import "../../CreateNewProperty.css";

function NewPropertyComponent({ setNewProperty }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);

  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);
  const [isDisabled, setIsDisabled] = useState(true);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  //ADDRESS FORM
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("United States");
  const [lat, setLat] = useState(37.422169);
  const [lng, setLng] = useState(-122.0840575);

  // PROPERTY FORM
  const [propertyName, setPropertyName] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [propertyImage, setPropertyImage] = useState("");

  useEffect(() => {
    if (
      propertyName === "" ||
      propertyDescription === "" ||
      propertyPrice === "" ||
      propertyImage === ""
    ) {
      setSubmitDisabled(true);
    } else {
      setSubmitDisabled(false);
    }
  }, [
    street,
    city,
    state,
    zipCode,
    propertyName,
    propertyDescription,
    propertyPrice,
    propertyImage,
  ]);

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
      zipCode,
      name: propertyName,
      description: propertyDescription,
      price: propertyPrice,
      previewImage: propertyImage,
    };

    async function createProperty() {
      const response = await csrfFetch("/api/spots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(property),
      });

      const data = await response.json();
      setNewProperty(data);
    }

    try {
      createProperty();
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(addPageNumber(pageNumber));
    }
  };

  return (
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
            <button
              className="create-property-submit-button"
              type="submit"
              disabled={submitDisabled}
            >
              Next Page
            </button>
          </>
        )}
      </div>
    </form>
  );
}

export default NewPropertyComponent;
