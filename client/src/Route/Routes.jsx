import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../src/pages/HomePage"
import Login from "../../src/pages/Login"
import Register from "../../src/pages/Register"
import ProtectedRoute from "../componants/ProtectedRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute><HomePage /></ProtectedRoute>
    },
    {
        path: "login",
        element: <Login/>
    },
    {
        path: "register",
        element: <Register />
    }
])