import { useMemo, useEffect, useState } from "react";
import "./AddressForm.css";
import GoogleMaps from "./GoogleMaps";
import NextPageButton from "../FormButtons/NextPageButton";
import useLocationHook from "../../../../../hooks/useLocationHook";
import Input from "../InputComponents/Input";
const AddressForm = ({
  street,
  setStreet,
  city,
  setCity,
  state,
  setState,
  zipCode,
  setZipCode,
  lat,
  setLat,
  lng,
  setLng,
}) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (street && city && state && zipCode) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [street, city, state, zipCode]);

  const center = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);
  useLocationHook(street, city, state, zipCode, setLat, setLng);
  return (
    <section className="address-form-container">
      <GoogleMaps lat={lat} lng={lng} center={center} />
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
          classNameInput="zip-code input-container-bottom"
          label="zip-code"
          title="Zip Code"
          value={zipCode}
          setValue={setZipCode}
        />
      </div>
      <NextPageButton isDisabled={isDisabled} />
    </section>
  );
};

export default AddressForm;
