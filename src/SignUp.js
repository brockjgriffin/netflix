import React from "react";
import "./SignUp.css";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";


function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(
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
    <div className="signup">
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
        alt=""
      />
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form type='submit' action="">
          <div className="signup-boxForm">
          <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="First and last name"
              type='text'
              className="input"
            />
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
            <div onClick={signUp} className="button">
              <h4>Register</h4>
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

export default SignUp;
