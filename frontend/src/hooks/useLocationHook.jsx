import { useRef, useEffect } from "react";

const useLocationHook = (street, city, state, zipCode, setLat, setLng) => {
  const prevInputsRef = useRef({ street, city, state, zipCode });
  const timerRef = useRef(null);

  const fetchLocationData = (street, city, state, zipCode) => {
    const params = {
      access_key: import.meta.env.VITE_GEO_LOCATION_API_KEY,
      query: `${street}, ${city}, ${state} ${zipCode}`,
    };
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
        } else {
          console.error("No location data found");
        }
      })
      .catch((error) => {
        console.error("Error fetching location data:", error);
      });
  };

  useEffect(() => {
    const currentInputs = { street, city, state, zipCode };

    // Check if inputs are different from previous inputs
    const inputsChanged =
      currentInputs.street !== prevInputsRef.current.street ||
      currentInputs.city !== prevInputsRef.current.city ||
      currentInputs.state !== prevInputsRef.current.state ||
      currentInputs.zipCode !== prevInputsRef.current.zipCode;

    if (inputsChanged && street && city && state && zipCode) {
      // Clear the previous timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

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
};

export default useLocationHook;
