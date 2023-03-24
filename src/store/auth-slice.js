import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{user:''},
    reducers:{
        login(state,action){
            
            state.user = action?.payload?.user;
            console.log(action.payload.user);
        }
    }
});

export default authSlice;
export const authActions = authSlice.actions;