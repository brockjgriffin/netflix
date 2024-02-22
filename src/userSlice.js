import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        
    },

    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },

        logout: (state, action) => {
            state.user = action.payload
        },

    },
});

export const {login, logout, add, remove} = userSlice.actions;

export const selectUser = (state) => state.user.user

export default userSlice.reducer
