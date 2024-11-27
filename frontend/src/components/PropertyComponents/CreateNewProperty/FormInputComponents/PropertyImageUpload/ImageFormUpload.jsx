import "./ImageFormUpload.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useModal } from "../../../../../context/Modal";
import NoUploadImageComponent from "./NoUploadImageComponent";
import UploadImageDisplay from "./UploadImageDisplay";

function ImageFormUpload(handleOnUpload) {
  const { closeModal } = useModal();
  const importedPhotos = useSelector((state) => state.uploadImage.photoList);

  useEffect(() => {
    console.log("importedPhotos changed:", importedPhotos);
  }, [importedPhotos]);
  return (
    <>
      {importedPhotos.length > 0 ? (
        <UploadImageDisplay
          importedPhotos={importedPhotos}
          closeModal={closeModal}
          handleOnUpload={handleOnUpload}
        />
      ) : (
        <NoUploadImageComponent
          handleOnUpload={handleOnUpload}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default ImageFormUpload;
