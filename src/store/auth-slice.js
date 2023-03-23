import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:{name:''},
    reducers:{
        login(state,action){
            
            state.name = action.payload.name;
            console.log(action.payload.name);
        }
    }
});

export default authSlice;
export const authActions = authSlice.actions;