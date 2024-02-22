import React from "react";
import "./Login.css";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
import SignUp from './SignUp';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCred);
      const user = userCred.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="login">
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
        alt=""
      />
      <div className="login-box">
        <h2>Sign In</h2>
        <form type='submit' action="">
          <div className="login-boxForm">
            <input
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type='email'
              className="input"
            />
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              type="password"
              className="input"
              
            />
            <div onClick={signIn} className="button">
              <h4>Sign In</h4>
            </div>
            <div className="footer">
              <h4>Don't have an account?</h4>
              <Link className="signUpLink" to="/signUp">
                <h4 className="signUp">Sign Up</h4>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
