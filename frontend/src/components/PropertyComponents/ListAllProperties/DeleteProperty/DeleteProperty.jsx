import { csrfFetch } from "../../../../store/csrf";
import { useModal } from "../../../../context/Modal";

function DeleteProperty({ propertyId, setChange }) {
  const { closeModal } = useModal();
  async function deleteProperty() {
    try {
      await csrfFetch(`/api/spots/${propertyId}`, {
        method: "DELETE",
      });
      setChange((prev) => !prev);
      closeModal();
      console.log("Property Deleted");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="delete-button-container">
      <p>Are You Sure You Want To Delete This Property?</p>
      <button onClick={deleteProperty} className="delete-property-button">
        Delete
      </button>
      <button onClick={closeModal} className="cancel-delete-button">
        Cancel
      </button>
    </div>
  );
}

export default DeleteProperty;
