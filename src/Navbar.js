import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { totalBasket } from "./basketSlice";

function Navbar() {
  const [show, handleShow] = useState(false);
  const [noShow, setnoShow] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const userr = useSelector(selectUser);
  const  {amount}  = useSelector(totalBasket);
  const data = JSON.stringify(localStorage.getItem('total'))


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signOut(auth);
      console.log(userCred);
      const user = userCred.user;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  });

  const transitionNavbar = () => {
    if (window.scrollY > 20) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  const noShowNavbar = () => {
    if (window.scrollY < 20) {
      setnoShow(true);
    } else {
      setnoShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", noShowNavbar);
    return () => window.removeEventListener("scroll", noShowNavbar);
  }, []);

  return (
    <div className={`Nav  ${noShow && "nav_none"}`}>
      <div className={`Navbar ${show && "nav_black"}`}>
        <div className="navbar-left">
          {userr? (
            <img
            onClick={() => navigate('/cart')}
            width="50px"
            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
            alt=""
          />
          ): (
            <img
            width="50px"
            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
            alt=""
          />
          )}
        </div>

       
        
        <div className="navbar-right">
        <div className="cartTotal">
            <p>{2}</p>
          </div>
          <SearchIcon className="searchIcon" />
          <ShoppingCartIcon className="cartIcon" />
          
          {userr ? (
            <>
              <img
            onClick={() => navigate("/profile")}
            width="45px"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
            </>
          ) : (
            <>
              <Link to='/login'>
                <button className="login-button"><h1 style={{ color: 'white', fontSize: '15px' }}>Login</h1></button>
              </Link>
            </>
          )}
         
          {userr && (
            <ArrowDropDownIcon
            className="dropdown-icon"
            onClick={() => setToggle(!toggle)}
          />
          )}
        </div>
        {!toggle && (
          <div className="navbar-right-popup">
            {userr && (
              <>
                <h4 onClick={() => auth.signOut()}>logout</h4>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
