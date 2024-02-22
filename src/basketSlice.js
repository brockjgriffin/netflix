import { createSlice } from "@reduxjs/toolkit";



export const basketSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: localStorage.getItem("wishlist")
        ? JSON.parse(localStorage.getItem("wishlist"))
        : [],
    totalWishes:0,
  },
  reducers: {
    add(state,action) {
      const check = state.wishlist.find(item => item.id === action.payload.id)
    
          state.wishlist.push(action.payload)
          localStorage.setItem('wishlist', JSON.stringify(state.wishlist))
    },

    remove(state,action) {
      const nextCartItems = state.wishlist.filter(
        (cartItem) => cartItem.id !== action.payload.id
      )
      state.wishlist = nextCartItems
      state.totalWishes -= 1
      
      
    },
    
}
});

export const { add, remove } = basketSlice.actions;

export const selectBasket = (state) => state.wishlist.wishlist
export const totalBasket = (state) => state.wishlist.totalWishes

export default basketSlice.reducer;


