import Input from "../../InputComponents/Input";
import { useState } from "react";
import UploadWidget from "../../UploadWidget/UploadWidget";
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

  const [error, updateError] = useState();
  const handleMouseEnter = () => {
    setPropertyImageUrl("/upload-image-red.png");
  };
  const handleMouseLeave = () => {
    setPropertyImageUrl("/upload-image-white.png");
  };

  function handleOnUpload(error, result, widget) {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    setPropertyImage(result?.info?.secure_url);
  }

  return (
    <>
      <div className="property-form-container">
        <div className="form-title-container">
          <h2 className="page-title">Share Some Details Of Your Property</h2>
          <div className="property-description-form">
            <Input
              disableCtl={false}
              classNameInput="input-container-top"
              label="property-name"
              title="Create a title for your property"
              value={propertyName}
              setValue={setPropertyName}
            />
            <Input
              disableCtl={false}
              inputType="textarea"
              classNameInput="input-container-mid"
              label="property-description"
              title="Catch guests' attention with description title that highlights what makes your place special"
              value={propertyDescription}
              setValue={setPropertyDescription}
            />
            <Input
              disableCtl={false}
              classNameInput="input-container-mid"
              label="property-price"
              title="Property Price in USD"
              value={propertyPrice}
              setValue={setPropertyPrice}
            />
            <UploadWidget
              onUpload={handleOnUpload}
              style={{ width: "100%", height: "100%" }}
            >
              <Input
                disableCtl={true}
                classNameInput="input-container-bottom"
                label="property-image"
                title="Property Image Main Image"
                value={propertyImage}
                setValue={setPropertyImage}
              />
            </UploadWidget>
          </div>
        </div>
        {propertyImage === "" ? (
          <UploadWidget onUpload={handleOnUpload}>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="property-image-container"
            >
              <img
                className="property-image"
                src={propertyImageUrl}
                alt="property"
              />
            </div>
          </UploadWidget>
        ) : (
          <>
            {error && <p>{error}</p>}
            <UploadWidget onUpload={handleOnUpload}>
              <div className="property-image-container">
                <img
                  className="property-image"
                  src={propertyImage}
                  alt="property"
                />
              </div>
            </UploadWidget>
          </>
        )}
      </div>
    </>
  );
}

export default PropertyDescription;
