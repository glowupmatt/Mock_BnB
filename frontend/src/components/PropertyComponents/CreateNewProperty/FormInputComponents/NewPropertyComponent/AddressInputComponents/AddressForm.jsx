import { useMemo, useEffect } from "react";
import "./AddressForm.css";
import GoogleMaps from "./GoogleMaps";
import useLocationHook from "../../../../../../hooks/useLocationHook";
import Input from "../../InputComponents/Input";
const AddressForm = ({
  street,
  setStreet,
  city,
  setCity,
  state,
  setState,
  zipCode,
  setZipCode,
  country,
  setCountry,
  lat,
  setLat,
  lng,
  setLng,
  setIsDisabled,
}) => {
  useEffect(() => {
    if (street && city && state && zipCode) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [street, city, state, zipCode, setIsDisabled]);

  const center = useMemo(
    () => ({ lat: Number(lat), lng: Number(lng) }),
    [lat, lng]
  );
  useLocationHook(street, city, state, zipCode, setLat, setLng);
  return (
    <section className="address-form-container">
      <h2 className="address-form-container-title">
        Share The Address Of Your Property
      </h2>
      <div className="address-info-container">
        <GoogleMaps lat={Number(lat)} lng={Number(lng)} center={center} />
        <div className="address-form">
          <Input
            classNameInput="street-name input-container-top"
            label="street-name"
            title="Street Name"
            value={street}
            setValue={setStreet}
          />
          <Input
            classNameInput="city input-container-mid"
            label="city"
            title="City"
            value={city}
            setValue={setCity}
          />
          <Input
            classNameInput="state input-container-mid"
            label="state"
            title="State"
            value={state}
            setValue={setState}
          />
          <Input
            classNameInput="country input-container-mid"
            label="country"
            title="Country"
            value={country}
            setValue={setCountry}
          />
          <Input
            classNameInput="zip-code input-container-bottom"
            label="zip-code"
            title="Zip Code"
            value={zipCode}
            setValue={setZipCode}
          />
        </div>
      </div>
    </section>
  );
};

export default AddressForm;
