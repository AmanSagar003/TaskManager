import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    email: "",
    password: "",
    gender: "",
    address: "",
    mobNo: "",
    submit: ""
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            return { ...state, ...action.payload };
        },
        
    }
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
