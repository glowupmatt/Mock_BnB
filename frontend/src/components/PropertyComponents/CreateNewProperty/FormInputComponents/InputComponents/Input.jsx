import "./Input.css";

function Input({ classNameInput, label, title, value, setValue }) {
  return (
    <div className={classNameInput}>
      <label htmlFor={label} className="input-title">
        {title}
      </label>
      <input
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
