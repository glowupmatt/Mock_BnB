import "./ImageFormUpload.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useModal } from "../../../../../context/Modal";
import { addPhoto } from "../../../../../store/uploadImage/uploadImageReducer";
import NoUploadImageComponent from "./NoUploadImageComponent";
import UploadImageDisplay from "./UploadImageDisplay";

function ImageFormUpload() {
  // eslint-disable-next-line no-unused-vars
  const [error, updateError] = useState(null);

  const dispatch = useDispatch();
  const handleOnUpload = (error, result, widget) => {
    if (error) {
      updateError(error);
      widget.close({
        quiet: true,
      });
      return;
    }

    dispatch(addPhoto({ image: result.info.secure_url }));
  };

  const { closeModal } = useModal();
  const importedPhotos = useSelector((state) => state.uploadImage.photoList);

  useEffect(() => {}, [importedPhotos]);
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
