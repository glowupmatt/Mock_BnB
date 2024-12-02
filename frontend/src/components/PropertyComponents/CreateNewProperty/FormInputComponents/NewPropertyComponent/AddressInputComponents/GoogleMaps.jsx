import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import "./GoogleMaps.css";

function GoogleMaps({ lat, lng, center }) {
  const zoom = 17;
  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <div className="new-spot-google-maps-container">
        <Map
          mapId={import.meta.env.VITE_GOOGLE_MAPS_MAP_STYLE}
          center={center}
          zoom={zoom}
          gestureHandling={"none"}
          disableDefaultUI={true}
        >
          <AdvancedMarker position={{ lat: Number(lat), lng: Number(lng) }} />
        </Map>
      </div>
    </APIProvider>
  );
}

export default GoogleMaps;
