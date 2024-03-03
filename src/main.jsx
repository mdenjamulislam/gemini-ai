import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./layouts/Home.jsx";
import Root from "./layouts/Root.jsx";
import AiWithText from "./components/AiWithText.jsx";
import Login from "./layouts/Login.jsx";
import About from "./layouts/About.jsx";
import Register from "./layouts/Register.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import PrivateRoute from "./private/PrivateRoute.jsx";
import Contact from "./layouts/Contact.jsx";
import Feature from "./layouts/Feature.jsx";
import TextFromTextImage from "./components/TextFromTextImage.jsx";
import ChatWithAi from "./components/ChatWithAi.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/text-ai",
                element: <PrivateRoute><AiWithText /></PrivateRoute>,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/feature",
                element: <Feature/>
            },
            {
                path: "/image-ai",
                element: <TextFromTextImage/>
            },
            {
                path: "/chat-with-ai",
                element: <ChatWithAi/>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router}></RouterProvider>
        </AuthProvider>
    </React.StrictMode>
);
