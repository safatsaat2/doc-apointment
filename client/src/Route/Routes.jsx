import { createBrowserRouter } from "react-router-dom";
import HomePage from "../../src/pages/HomePage"
import Login from "../../src/pages/Login"
import Register from "../../src/pages/Register"

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
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