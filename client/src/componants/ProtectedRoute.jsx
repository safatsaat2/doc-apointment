// import { useDispatch, useSelector } from "react-redux";
import {  Navigate } from "react-router-dom";
// import { hideLoading, showLoading } from "../Redux/Features/alerSlice";
// import axios from "axios";
// import { setUser } from "../Redux/Features/userSlice";
// import { useEffect } from "react";
 
const ProtectedRoute = ({children}) => {
    // const dispatch = useDispatch()
    // const {user} = useSelector(state => state.user)
    // // Get User

    // const getUser = async() => {
    //     try {

    //         const res = await axios.post("http://localhost:8080/user/getUserData", {
    //             token: localStorage.getItem("token")
    //         },
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`
    //             }
    //         }
    //         )

    //         if(res.data.success){
    //             dispatch(setUser(res.data.data))
    //         }
    //         else{
    //             <Navigate to="/login" />
    //         }
    //     } catch (error) {

    //         console.log(error)
    //     }
    // };

    // useEffect(()=>{
    //     if(!user){
    //         getUser()
    //     }
    // },[user])

    if(localStorage.getItem("token")){
        return children
    }
    else{
        return <Navigate to='/login' />
    }
};

export default ProtectedRoute;