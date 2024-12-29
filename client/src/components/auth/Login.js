import React, { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import { Redirect } from "react-router-dom";
import config from "../../config";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    setNameError("");
    setEmailError("");
    setPasswordError("");
    console.log(name, email, password);
    try {
      const res = await fetch(`${config.BACKEND_BASE_URL}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      console.log(data);
      if (data.errors) {
        setEmailError(data.errors.email);
        setNameError(data.errors.name);
        setPasswordError(data.errors.password);
      }
      if (data.user) {
        setUser(data.user);
      }
    } catch (e) {
      console.log(e);
    }
  };
  if (user) {
    console.log("Thisssssssssssssssssssss");
    return <Redirect to="/" />;
  }
  return (
    <div style={{width:"20em",margin:"0 auto"}} className="row">
      <h4>Log In</h4>
      <form className="col s12" onSubmit={submitHandler}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              className="validate"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="email error red-text">{emailError}</div>
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              className="validate"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="password error red-text">{passwordError}</div>
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className="btn">Log In</button>
      </form>
    </div>
  );
};

export default Login;
