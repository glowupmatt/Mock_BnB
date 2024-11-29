import "./Input.css";
import StarRating from "./StarRating";

function Input({
  classNameInput,
  label,
  title,
  value,
  setValue,
  disableCtl,
  inputType = "input",
  dataType = "text",
}) {
  if (inputType === "textarea") {
    return (
      <div className={`${classNameInput} input-container`}>
        <label htmlFor={label} className="input-title">
          {title}
        </label>
        <textarea
          disabled={disableCtl}
          className="input"
          id={label}
          minLength={30}
          value={value}
          onChange={(e) => {
            setValue(() => {
              return e.target.value;
            });
          }}
        />
      </div>
    );
  }

  if (inputType === "number") {
    return (
      <div className={`${classNameInput} input-container`}>
        <label htmlFor={label} className="input-title">
          {title}
        </label>
        <StarRating value={value} onChange={setValue} />
      </div>
    );
  }

  return (
    <div className={`${classNameInput} input-container`}>
      <label htmlFor={label} className="input-title">
        {title}
      </label>
      <input
        disabled={disableCtl}
        className="input"
        type={dataType}
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
