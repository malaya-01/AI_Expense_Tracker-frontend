import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

type InitialState = {
    value: AuthState;
}

type AuthState = {
    _id: string;
    firstName: string;
    lastName: string;
    mobile: string;
    email: string;
}

const initialState = {
    value: {
        _id: '',
        firstName: '',
        lastName: '',
        mobile: '',
        email: ''
    } as AuthState,
};

export const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUserDetails: (state, action)=>{
            state.value = action.payload
        }
    },
})

export const {setUserDetails} = auth.actions;
export default auth.reducer