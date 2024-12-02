import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { csrfFetch } from "../../../../store/csrf";
import AddressForm from "../../CreateNewProperty/FormInputComponents/NewPropertyComponent/AddressInputComponents/AddressForm";
import NextPageButton from "../../CreateNewProperty/FormInputComponents/FormButtons/NextPageButton";
import PrevPageButton from "../../CreateNewProperty/FormInputComponents/FormButtons/PrevPageButton";
// import EditPhotos from "./updatePropertyPhotos/EditPhotos";
import PropertyDescription from "../../CreateNewProperty/FormInputComponents/NewPropertyComponent/PropertyDescription/PropertyDescription";
import { resetPageNumber } from "../../../../store/FormPageNumber/pageNumberReducer";
import { useNavigate } from "react-router-dom";

function UpdatePropertyForm({ property }) {
  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);
  const propertyId = property.id;
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [isDisabled, setIsDisabled] = useState(true);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  //ADDRESS FORM
  const [street, setStreet] = useState(property.address);
  const [city, setCity] = useState(property.city);
  const [state, setState] = useState(property.state);
  const [zipCode, setZipCode] = useState(property.zipCode);
  const [country, setCountry] = useState(property.country);
  const [lat, setLat] = useState(property.lat);
  const [lng, setLng] = useState(property.lng);

  // PROPERTY FORM
  const [propertyName, setPropertyName] = useState(property.name);
  const [propertyDescription, setPropertyDescription] = useState(
    property.description
  );
  const [propertyPrice, setPropertyPrice] = useState(property.price);
  const [propertyImage, setPropertyImage] = useState(property.previewImage);

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

    async function updateProperty() {
      await csrfFetch(`/api/spots/${propertyId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(property),
      });
    }

    try {
      updateProperty();
      navigate(`/spots/${propertyId}`);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(resetPageNumber());
    }
  };

  if (!property) return null;

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
                Submit Changes
              </button>
            </>
          )}
        </div>
      </form>

      {/* {pageNumber === 3 && <EditPhotos property={property} />} */}
    </div>
  );
}

export default UpdatePropertyForm;
