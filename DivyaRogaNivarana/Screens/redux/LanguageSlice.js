import { createSlice } from "@reduxjs/toolkit";

export const LanguageSlice = createSlice({
    name:'language',
    initialState:{
        data:'ENGLISH'
    },
    reducers:{
        changeLanguage(state,action){
            state.data=action.payload
        }
    }
    
})
export const {changeLanguage}=LanguageSlice.actions
export default LanguageSlice.reducer