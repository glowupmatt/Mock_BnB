import { useSelector } from "react-redux";
import { useModal } from "../../../../../context/Modal";
import OpenModalMenuItem from "../../../../Navigation/OpenModalMenuItem";
import ImageFormUpload from "./ImageFormUpload";
import "./PropertyImageUpload.css";

function PropertyImageUpload() {
  const importedPhotos = useSelector((state) => state.uploadImage.photoList);
  const closeMenu = useModal();

  return (
    <div className="new-image-form-container">
      <div className="title-container">
        <h3>Add Some photos of your property</h3>
        <p>
          You&apos;ll need 5 photos to get started. You can add more or make
          changes later.
        </p>
      </div>
      <div className="image-upload-container">
        <div className="camera-icon-container">
          {importedPhotos.length > 0 ? (
            <div className="uploaded-photo-display">
              {importedPhotos.map((photo, idx) => {
                return (
                  <div key={idx} className="uploaded-photo-container">
                    <img
                      src={photo.image}
                      alt="property"
                      className="uploaded-photo"
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <img
              className="camera-icon-img"
              src="/camera-icon.svg"
              alt="camera"
            />
          )}
        </div>
        <div className="modal-button-container">
          <OpenModalMenuItem
            modalComponent={<ImageFormUpload />}
            itemText="Add photos"
            onItemClick={closeMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default PropertyImageUpload;
