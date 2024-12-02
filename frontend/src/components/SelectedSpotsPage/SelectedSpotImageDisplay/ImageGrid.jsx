import "./ImageGrid.css";

function ImageGrid({ spotImages }) {
  return (
    <div className="image-display-container">
      {spotImages.map((image, index) => {
        return (
          <div
            key={index}
            className={`${
              index === 0
                ? "selected-image-container first-image"
                : "selected-image-container"
            } ${
              image.url === "/no-image-avaliable-icon.svg" ? "no-image" : ""
            }`}
          >
            <img className={`selected-image`} src={image.url} alt="spot" />
            {image.url === "/no-image-avaliable-icon.svg" && (
              <p>No Current Image</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ImageGrid;
