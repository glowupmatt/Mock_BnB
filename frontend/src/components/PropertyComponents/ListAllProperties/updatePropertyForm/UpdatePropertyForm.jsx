import { useState } from "react";
import { useSelector } from "react-redux";
import NewPropertyComponent from "../../CreateNewProperty/FormInputComponents/NewPropertyComponent/NewPropertyComponent";
import EditPhotos from "./updatePropertyPhotos/EditPhotos";

function UpdatePropertyForm({ property }) {
  const [updateProperty, setUpdateProperty] = useState(property);
  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);
  return (
    <div>
      {pageNumber < 3 && (
        <NewPropertyComponent
          updateProperty={updateProperty}
          setUpdateProperty={setUpdateProperty}
          update={true}
        />
      )}

      {pageNumber === 3 && <EditPhotos property={property} />}
    </div>
  );
}

export default UpdatePropertyForm;
