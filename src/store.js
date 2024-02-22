import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import userReducer from "./userSlice";
import wishlistReducer from "./basketSlice";
import basketSlice from "./basketSlice";


const persistConfig = {
    key: 'root',
    storage
}

export const rootReducer = combineReducers({
    wishlist : wishlistReducer,
    user: userReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)




export const store = configureStore({
    reducer: persistedReducer
    
})
