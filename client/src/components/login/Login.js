import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.scss";
import apis from "../../api/index";
import CloseIcon from "@material-ui/icons/Close";
import {
  closeLogin,
  openSignup,
  userLoggedIn,
} from "../../redux/clickNavbarItems/actions";

function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const dispatch = useDispatch();

  const handleLoginEmail = async (event) => {
    const email = event.target.value;
    setLoginEmail(email);
  };
  const handleLoginPassword = async (event) => {
    const password = event.target.value;
    setLoginPassword(password);
  };

  const handleLoginData = async (event) => {
    const payload = {
      email: loginEmail,
      password: loginPassword,
    };
    await apis
      .loginUser(payload)
      .then((res) => {
        window.alert(res.data.message);
        setLoginEmail("");
        setLoginPassword("");
        //localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        dispatch(userLoggedIn());
      })
      .catch((err) => {
        window.alert(err.response.data.errors.body);
      });
  };

  return (
    <div className="userForm">
      <CloseIcon onClick={() => dispatch(closeLogin())} />
      <h2>Login</h2>
      <div className="userLogin">
        <input
          type="text"
          value={loginEmail}
          onChange={handleLoginEmail}
          placeholder="Email"
        />
        <input
          type="password"
          value={loginPassword}
          onChange={handleLoginPassword}
          placeholder="Password"
        />
        <p>
          Don't have an account?{" "}
          <span onClick={() => dispatch(openSignup())}>Sign Up</span>
        </p>
        <button onClick={handleLoginData}>Login</button>
      </div>
    </div>
  );
}

export default Login;
