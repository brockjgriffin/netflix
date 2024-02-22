import React from "react";
import { useEffect, useState } from "react";
import shopping from "./shopping";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./userSlice";
import Items from "./Items";
import "./Cart.css";
import { addToCart, remove, selectBasket } from "./basketSlice";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ClearIcon from '@mui/icons-material/Clear';
import axios from "axios";

function Cart({  isLargeRow, fetchUrl }) {
  const userr = useSelector(selectUser);
  const dispatch = useDispatch();
  const wishlist  = useSelector((state) => state.wishlist.wishlist);
  const [movie, setMovie] = useState([])
  const cartFromLocalStorage = JSON.parse(localStorage.getItem('wishlist'))

  const removeFromCart = (product) => {
    dispatch(remove(product))
  }

  

  return (
    <div className="cart">
      <div className="wishlistTop">
        <ChecklistIcon />
        <h2>Saved movies</h2>
        {
          wishlist.map((movies) => (
            <>
            
            
            </>
          ))
        }
      </div>
      
    </div>
  );
}

export default Cart;
