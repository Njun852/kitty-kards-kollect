import { createRoot } from "react-dom/client";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import { RouterProvider, createBrowserRouter, redirect } from "react-router";
import App, { appLoader } from "./App.jsx";
import Feed from "./routes/feed/Feed.jsx";
import Collection from "./routes/collection/Collection.jsx";
import PetStore from "./routes/petstore/PetStore.jsx";
import Login, { loginAction, loginLoader } from "./routes/login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: appLoader,
    Component: App,
    children: [
      { path: "feed", Component: Feed,},
      { path: "collection", Component: Collection },
      { path: "store", Component: PetStore },
    ],
  },
  {
    path: "login",
    action: loginAction,
    loader: loginLoader,
    Component: Login,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
