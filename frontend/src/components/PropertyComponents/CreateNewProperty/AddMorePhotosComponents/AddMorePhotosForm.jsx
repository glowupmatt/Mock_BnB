import { useState, useEffect } from "react";
import { csrfFetch } from "../../../../store/csrf";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropertyImageUpload from "../FormInputComponents/PropertyImageUpload/PropertyImageUpload";
import PrevPageButton from "../FormInputComponents/FormButtons/PrevPageButton";
import { resetPageNumber } from "../../../../store/FormPageNumber/pageNumberReducer";

function AddMorePhotosForm({ newProperty, setNewProperty }) {
  const navigate = useNavigate();
  const importedPhotos = useSelector((state) => state.uploadImage.photoList);
  const [uploadedPhotosButton, setUploadedPhotosButton] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (importedPhotos.length >= 5) {
      setUploadedPhotosButton(false);
    }
  }, [importedPhotos, newProperty]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const propertyId = newProperty.id;

    importedPhotos.forEach((photo) => {
      const formData = {
        spotId: propertyId,
        url: photo.image,
        preview: false,
      };
      async function addPhotos() {
        await csrfFetch(`/api/spots/${propertyId}/images`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }

      try {
        addPhotos();
      } catch (error) {
        console.log(error);
      } finally {
        setNewProperty({});
        dispatch(resetPageNumber());
        navigate(`/spots/${propertyId}`);
      }
    });
  };

  return (
    <form className="form-component" onSubmit={handleSubmit}>
      <>
        <PropertyImageUpload />
        <div className="upload-image-submit-button-container">
          <PrevPageButton />
          <button
            className="create-property-submit-button"
            type="submit"
            disabled={uploadedPhotosButton}
          >
            Submit
          </button>
        </div>
      </>
    </form>
  );
}

export default AddMorePhotosForm;
