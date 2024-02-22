import "./App.css";
import { useEffect } from "react";
import Mainpage from "./Mainpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import Cart from "./Cart";
import { auth } from "./firebase";
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./userSlice";
import Profile from './Profile';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth)
        dispatch(
          login({
            uid:userAuth.uid,
            email: userAuth.email
          })
        )
      } else {
        dispatch(logout())
      }
    })
    return unsubsribe
  }, [dispatch])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Mainpage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/cart' element={<Cart />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
