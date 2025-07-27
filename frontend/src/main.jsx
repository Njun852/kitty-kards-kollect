import { createRoot } from "react-dom/client";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import { RouterProvider, createBrowserRouter, redirect } from "react-router";
import App, {appLoader } from "./App.jsx";
import Login, { loginAction, loginLoader } from "./routes/login/Login.jsx";
import Dashboard, { dashboardLoader } from "./routes/dashboard/Dashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        loader: appLoader,
        Component: App,
    },
    {
        path: "login",
        action: loginAction,
        loader: loginLoader,
        Component: Login,
    },
    { path: "dashboard", Component: Dashboard, loader: dashboardLoader},
]);
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
