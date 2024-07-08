import { configureStore } from "@reduxjs/toolkit";

import LanguageRedecer from './LanguageSlice'

const store = configureStore({
    reducer:{
        Language: LanguageRedecer
    }
})

export default store;