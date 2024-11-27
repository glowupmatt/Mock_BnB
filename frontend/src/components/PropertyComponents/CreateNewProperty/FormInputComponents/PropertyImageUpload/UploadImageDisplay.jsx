import UploadWidget from "../UploadWidget/UploadWidget";
import { FaPlus } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "./ImageFormUpload.css";

function UploadImageDisplay({ importedPhotos, closeModal, handleOnUpload }) {
  return (
    <div className="upload-photo-modal-content">
      <div className="info-control-container">
        <button className="exit-button" type="button" onClick={closeModal}>
          <FaTimes />
        </button>

        <div className="uploaded-photo-info-container">
          <p className="uploaded-photo-text">Uploaded Photos</p>
          <p className="uploaded-photo-count">
            {importedPhotos.length} photo
            {importedPhotos.length > 1 ? "s" : ""} selected
          </p>
        </div>
        <div className="upload-photo-controls">
          <UploadWidget onUpload={handleOnUpload}>
            <FaPlus className="plus-icon" width={50} />
          </UploadWidget>
        </div>
      </div>
      <div className="uploaded-photos-container">
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
    </div>
  );
}

export default UploadImageDisplay;
