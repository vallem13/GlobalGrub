import React, { useState, useEffect } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [frontendErrors, setFrontendErrors] = useState({});
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  useEffect(() => {
    const frontendErrors = {}

    const email_validation = email.split("").find((el) => el === "@")

    if (!email_validation) {
      frontendErrors.email = "Email required to log in."
    }
    if (!password) {
      frontendErrors.password = "Password is required to log in."
    }

    setFrontendErrors(frontendErrors)
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      closeModal()
    }
  };

  const demoUser = (e) => {
    e.preventDefault();
    return dispatch(login("demo@aa.io", "password"))
      .then(closeModal)
  }

  return (
    <div>
      <h1 className='log-in'>Log In</h1>
      <form className='log-in-container' onSubmit={handleSubmit}>
        {/* <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul> */}
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <div className='errors-and-login'>
          {frontendErrors.email && email.length > 0 && (
            <p className='on-submit-errors'>{frontendErrors.email}</p>
          )}
          {frontendErrors.password && password.length > 0 && (
            <p className='on-submit-errors'>{frontendErrors.password}</p>
          )}
          <p>
            {errors.map((error, idx) => (
              <p className='on-submit-errors' key={idx}>{error}</p>
            ))}
          </p>
        </div>
        <div className='login-and-demo-user'>
          <button disabled={Object.keys(errors).length > 0} className='log-in-submit' type="submit">Log In</button>
          <div>
            <button onClick={demoUser} className="demo-user-button">Demo User</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginFormModal;
