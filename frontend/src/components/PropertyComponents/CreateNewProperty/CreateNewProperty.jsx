import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NewPropertyComponent from "./FormInputComponents/NewPropertyComponent/NewPropertyComponent";
import AddMorePhotosForm from "./AddMorePhotosComponents/AddMorePhotosForm";

function CreateNewProperty() {
  const [newProperty, setNewProperty] = useState({});
  const navigate = useNavigate();
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  const pageNumber = useSelector((state) => state.pageNumber.pageNumber);

  return (
    <section className="form-container">
      {pageNumber < 3 && (
        <NewPropertyComponent setNewProperty={setNewProperty} />
      )}

      {pageNumber === 3 && (
        <AddMorePhotosForm
          newProperty={newProperty}
          setNewProperty={setNewProperty}
        />
      )}
    </section>
  );
}

export default CreateNewProperty;
