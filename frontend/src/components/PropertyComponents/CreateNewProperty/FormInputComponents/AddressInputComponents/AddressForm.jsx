import { useMemo, useState, useEffect, useRef } from "react";
import "./AddressForm.css";
import GoogleMaps from "./GoogleMaps";

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
  const prevInputsRef = useRef({ street, city, state, zipCode });
  const timerRef = useRef(null);

  useEffect(() => {
    const currentInputs = { street, city, state, zipCode };
    const fetchLocationData = (street, city, state, zipCode) => {
      const params = {
        access_key: import.meta.env.VITE_GEO_LOCATION_API_KEY,
        query: `${street}, ${city}, ${state} ${zipCode}`,
      };
      console.log("Fetching location data..."); // Debugging log
      console.log("Params:", params); // Debugging log
      fetch(
        `https://api.positionstack.com/v1/forward?access_key=${params.access_key}&query=${params.query}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (data && data.data && data.data.length > 0) {
            const location = data.data[0];
            setLat(location.latitude);
            setLng(location.longitude);
            console.log("Location data:", location); // Debugging log
          } else {
            console.error("No location data found");
          }
        })
        .catch((error) => {
          console.error("Error fetching location data:", error);
        });
    };

    // Check if inputs are different from previous inputs
    const inputsChanged =
      currentInputs.street !== prevInputsRef.current.street ||
      currentInputs.city !== prevInputsRef.current.city ||
      currentInputs.state !== prevInputsRef.current.state ||
      currentInputs.zipCode !== prevInputsRef.current.zipCode;

    console.log("Inputs changed:", inputsChanged); // Debugging log

    if (inputsChanged && street && city && state && zipCode) {
      // Clear the previous timer

      // Set a new timer to call the API after 1 second
      timerRef.current = setTimeout(() => {
        fetchLocationData(street, city, state, zipCode);

        // Update previous inputs after the API call
        prevInputsRef.current = currentInputs;
      }, 1000);
    }

    // Cleanup function to clear the timer
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [street, city, state, zipCode, setLat, setLng]);

  const center = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);
  return (
    <div className="address-form-container">
      <GoogleMaps lat={lat} lng={lng} center={center} />
      <div className="address-form">
        <div className="street-name input-container-top input-container">
          <label htmlFor="street-name" className="input-title">
            Street Name
          </label>
          <input
            className="input"
            type="text"
            id="street-name"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="city input-container-mid input-container">
          <label htmlFor="city" className="input-title">
            City
          </label>
          <input
            className="input"
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="state input-container-mid input-container">
          <label htmlFor="state" className="input-title">
            State
          </label>
          <input
            className="input"
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="zip-code input-container-bottom input-container">
          <label htmlFor="zip-code" className="input-title">
            Zip Code
          </label>
          <input
            className="input"
            type="text"
            id="zip-code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        <button type="button" onClick={() => console.log("Button clicked!")}>
          Click Me
        </button>
      </div>
    </div>
  );
};

export default AddressForm;
