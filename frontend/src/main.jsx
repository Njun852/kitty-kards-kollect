import { createRoot } from "react-dom/client";
import "./index.css";
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.jsx";
import Login from "./pages/login/Login.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="login" element={<Login/>}/>
        </Routes>
    </BrowserRouter>
);
