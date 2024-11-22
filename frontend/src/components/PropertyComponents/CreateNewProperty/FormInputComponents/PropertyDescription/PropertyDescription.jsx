import Input from "../InputComponents/Input";
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
  return (
    <section className="property-form-container">
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
      {propertyImage === "" ? (
        <div className="property-image-container">
          <img
            className="property-image"
            src="https://a0.muscache.com/im/pictures/miso/Hosting-53274539/original/1c0f22ac-4df7-4463-a915-c66bab72eaf0.jpeg?im_w=1440&im_q=highq"
            alt="property"
          />
        </div>
      ) : (
        <img src={propertyImage} alt="property" />
      )}
    </section>
  );
}

export default PropertyDescription;
