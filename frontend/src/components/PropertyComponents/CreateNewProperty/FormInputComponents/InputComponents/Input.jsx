import "./Input.css";

function Input({ classNameInput, label, title, value, setValue, disableCtl }) {
  return (
    <div className={`${classNameInput} input-container`}>
      <label htmlFor={label} className="input-title">
        {title}
      </label>
      <input
        disabled={disableCtl}
        className="input"
        type="text"
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default Input;
