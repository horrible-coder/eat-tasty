import React, { useState } from "react";
import "./Signup.scss";
import apis from "../../api/index";
import { closeSignup, openLogin } from "../../redux/clickNavbarItems/actions";
import { useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";

function Signup() {
  const [signupEmail, setSignupEmail] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const dispatch = useDispatch();

  const handleSignupEmail = async (event) => {
    const email = event.target.value;
    setSignupEmail(email);
  };
  const handleSignupUsername = async (event) => {
    const username = event.target.value;
    setSignupUsername(username);
  };
  const handleSignupPassword = async (event) => {
    const password = event.target.value;
    setSignupPassword(password);
  };

  const handleSignupData = async (event) => {
    const payload = {
      email: signupEmail,
      username: signupUsername,
      password: signupPassword,
    };
    //console.log(payload);
    await apis
      .createUser(payload)
      .then((res) => {
        window.alert(res.data.message);
        setSignupEmail("");
        setSignupUsername("");
        setSignupPassword("");
        dispatch(openLogin());
      })
      .catch((err) => {
        window.alert(err.response.data.errors.body);
      });
  };

  return (
    <div className="userForm">
      <CloseIcon onClick={() => dispatch(closeSignup())} />
      <h2>Sign Up</h2>
      <div className="userSignup">
        <input
          type="text"
          value={signupEmail}
          onChange={handleSignupEmail}
          placeholder="Email"
        />
        <input
          type="text"
          value={signupUsername}
          onChange={handleSignupUsername}
          placeholder="Username"
        />
        <input
          type="password"
          value={signupPassword}
          onChange={handleSignupPassword}
          placeholder="Password"
        />
        <p>
          Have an account?{" "}
          <span onClick={() => dispatch(openLogin())}>Login</span>
        </p>
        <button onClick={handleSignupData}>Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
