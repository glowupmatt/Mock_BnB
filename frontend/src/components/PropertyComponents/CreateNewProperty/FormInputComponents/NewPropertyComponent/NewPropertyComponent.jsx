import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { csrfFetch } from "../../../../..//store/csrf";
import { useNavigate } from "react-router-dom";
import AddressForm from "./AddressInputComponents/AddressForm";
import PropertyDescription from "./PropertyDescription/PropertyDescription";
import PrevPageButton from "../FormButtons/PrevPageButton";
import NextPageButton from "../FormButtons/NextPageButton";
import {
  addPageNumber,
  resetPageNumber,
} from "../../../../../store/FormPageNumber/pageNumberReducer";
import "../../CreateNewProperty.css";

function NewPropertyComponent({
  setNewProperty,
  updateProperty,
  setUpdateProperty,
  update = false,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.session.user);

  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);
  const [isDisabled, setIsDisabled] = useState(true);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  //ADDRESS FORM
  const [street, setStreet] = useState(update ? updateProperty.address : "");
  const [city, setCity] = useState(update ? updateProperty.city : "");
  const [state, setState] = useState(update ? updateProperty.state : "");
  const [zipCode, setZipCode] = useState(update ? updateProperty.zipCode : "");
  const [country, setCountry] = useState(
    update ? updateProperty.country : "United States"
  );
  const [lat, setLat] = useState(update ? updateProperty.lat : 37.422169);
  const [lng, setLng] = useState(update ? updateProperty.lng : -122.0840575);

  // PROPERTY FORM
  const [propertyName, setPropertyName] = useState(
    update ? updateProperty.name : ""
  );
  const [propertyDescription, setPropertyDescription] = useState(
    update ? updateProperty.description : ""
  );
  const [propertyPrice, setPropertyPrice] = useState(
    update ? updateProperty.price : ""
  );
  const [propertyImage, setPropertyImage] = useState(
    update ? updateProperty.previewImage : ""
  );

  const propertyId = update ? updateProperty.id : "";
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

    async function updateProperty() {
      const response = await csrfFetch(`/api/spots/${propertyId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(property),
      });

      const data = await response.json();
      setUpdateProperty(data);
    }
    try {
      if (update) {
        updateProperty();
      } else {
        createProperty();
      }
    } catch (error) {
      console.log(error);
    } finally {
      if (update) {
        dispatch(resetPageNumber());
        navigate(`/spots/${propertyId}`);
      }
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
