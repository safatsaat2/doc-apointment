import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./Features/alerSlice";


export default configureStore({
    reducer:{
        alerts: alertSlice.reducer,
    }
})