import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto } from "../../../../../store/uploadImage/uploadImageReducer";
import { useModal } from "../../../../../context/Modal";
import OpenModalMenuItem from "../../../../Navigation/OpenModalMenuItem";
import ImageFormUpload from "./ImageFormUpload";

import "./PropertyImageUpload.css";

function PropertyImageUpload() {
  const dispatch = useDispatch();
  const importedPhotos = useSelector((state) => state.uploadImage.photoList);
  const [error, updateError] = useState(null);
  const closeMenu = useModal();
  useEffect(() => {
    console.log(
      "importedPhotos changed on PropertyImageUpload",
      importedPhotos
    );
  }, [importedPhotos]);

  const handleOnUpload = (error, result, widget) => {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    console.log(result, "result");
    dispatch(addPhoto({ image: result.info.secure_url }));
  };

  return (
    <div>
      <h3>Add Some photos of your property</h3>
      <p>
        You&apos;ll need 5 photos to get started. You can add more or make
        changes later.
      </p>
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
            modalComponent={<ImageFormUpload handleOnUpload={handleOnUpload} />}
            itemText="Add photos"
            onItemClick={closeMenu}
          />
        </div>
      </div>
    </div>
  );
}

export default PropertyImageUpload;
