import { FaTimes } from "react-icons/fa";
import UploadWidget from "../PropertyDescription/UploadWidget/UploadWidget";
import "./ImageFormUpload.css";

function NoUploadImageComponent({ handleOnUpload, closeModal }) {
  return (
    <div className="input-container-photo-upload">
      <button className="exit-button" type="button" onClick={closeModal}>
        <FaTimes />
      </button>
      <UploadWidget onUpload={handleOnUpload}>
        <div className="content-container">
          <div>
            <img
              className="photos-upload"
              src="/photos-upload.svg"
              alt="image upload"
            />
          </div>
          <h4 className="text-button">Click to Upload Photos</h4>
        </div>
      </UploadWidget>
    </div>
  );
}

export default NoUploadImageComponent;
