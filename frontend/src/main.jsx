import { createRoot } from "react-dom/client";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import { RouterProvider, createBrowserRouter, redirect } from "react-router";
import App from "./App.jsx";
import Login from "./pages/login/Login.jsx";

async function loginLoader({ params }) {}
const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        loader: ({ params }) => {
            const isLoggedIn = true;
            if (!isLoggedIn) {
                return redirect("/login");
            }
            return { isLoggedIn };
        },
        action: async ({request})=>{
            let formData = await request.formData();
            let username = formData.get("username")
            let password = formData.get("password")
            return {username, password}
        }
    },
    {
        path: "login",
        Component: Login,
        loader: ({ params }) => {
            const isLoggedIn = false;
            if (isLoggedIn) {
                return redirect("/");
            }
            return { isLoggedIn };
        },
    },
]);
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
