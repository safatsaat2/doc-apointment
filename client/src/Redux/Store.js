import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./Features/alerSlice";
import { userSlice } from "./Features/userSlice";


export default configureStore({
    reducer:{
        alerts: alertSlice.reducer,
        user: userSlice.reducer,
    }
})