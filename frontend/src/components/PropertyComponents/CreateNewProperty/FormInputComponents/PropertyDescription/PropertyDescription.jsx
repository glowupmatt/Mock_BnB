import Input from "../InputComponents/Input";
import { useState } from "react";
import "./PropertyDescription.css";

function PropertyDescription({
  propertyName,
  setPropertyName,
  propertyDescription,
  setPropertyDescription,
  propertyPrice,
  setPropertyPrice,
  propertyImage,
  setPropertyImage,
}) {
  const [propertyImageUrl, setPropertyImageUrl] = useState(
    "/upload-image-white.png"
  );
  const handleMouseEnter = () => {
    setPropertyImageUrl("/upload-image-red.png");
  };
  const handleMouseLeave = () => {
    setPropertyImageUrl("/upload-image-white.png");
  };
  return (
    <>
      <div className="property-form-container">
        <div className="form-title-container">
          <h2 className="page-title">Share Some Details Of Your Property</h2>
          <div className="property-description-form">
            <Input
              classNameInput="input-container-top"
              label="property-name"
              title="Property Name"
              value={propertyName}
              setValue={setPropertyName}
            />
            <Input
              classNameInput="input-container-mid"
              label="property-description"
              title="Property Description"
              value={propertyDescription}
              setValue={setPropertyDescription}
            />
            <Input
              classNameInput="input-container-mid"
              label="property-price"
              title="Property Price"
              value={propertyPrice}
              setValue={setPropertyPrice}
            />
            <Input
              classNameInput="input-container-bottom"
              label="property-image"
              title="Property Image"
              value={propertyImage}
              setValue={setPropertyImage}
            />
          </div>
        </div>
        {propertyImage === "" ? (
          <div
            className="property-image-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              className="property-image"
              src={propertyImageUrl}
              alt="property"
            />
          </div>
        ) : (
          <img src={propertyImage} alt="property" />
        )}
      </div>
    </>
  );
}

export default PropertyDescription;
