import { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginFormModal.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  return (
    <>
      <img
        className="login-modal-image"
        src="/images/logo.svg"
        alt="MockBnb Logo"
      />
      <h1 className="login-modal-title">Log In to MockBnB</h1>
      <form className="login-form-modal" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username" className="label"></label>
          <input
            className="login-form-input"
            id="username"
            type="text"
            value={credential}
            placeholder="Username or Email"
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password"></label>
          <input
            className="login-form-input"
            placeholder="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errors.credential && <p>{errors.credential}</p>}
        <button className="login-button-modal" type="submit">
          Log In
        </button>
      </form>
    </>
  );
}

export default LoginFormModal;
