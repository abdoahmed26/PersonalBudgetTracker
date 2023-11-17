import { createSlice } from "@reduxjs/toolkit";

export const updateSlice = createSlice({
    initialState :[],
    name : "update",
    reducers : {
        updateIn:(state,action)=>{
            state.push(action.payload);
        },
        deleteUpdate:()=>{
            return [];
        }
    }
})
export const {updateIn,deleteUpdate} = updateSlice.actions;
export default updateSlice.reducer;