import { useState } from "react";
import AddressForm from "./FormInputComponents/AddressInputComponents/AddressForm";

import "./CreateNewProperty.css";

function CreateNewProperty() {
  //ADDRESS FORM
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [lat, setLat] = useState(47.5879077);
  const [lng, setLng] = useState(-122.037603);

  //PROPERTY FORM
  // const [propertyName, setPropertyName] = useState("");
  // const [propertyDescription, setPropertyDescription] = useState("");
  // const [propertyPrice, setPropertyPrice] = useState("");

  // //PROPERTY IMAGE
  // const [propertyImage, setPropertyImage] = useState("");

  return (
    <section>
      <form>
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
        <input type="submit" />
      </form>
    </section>
  );
}

export default CreateNewProperty;
