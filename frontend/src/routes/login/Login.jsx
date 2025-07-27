import { useState } from "react";
import { useNavigate, useSubmit, Form, redirect, data } from "react-router";
import "./login.css";
import { commitSession, getSession } from "../../cookies/userSession";

export async function loginAction({ request }) {
    const form = await request.formData();
    const username = form.get("username");
    const password = form.get("password");
    console.log(username)
    localStorage.setItem("user_session", JSON.stringify({username, password}))
    return redirect("/")
}

export async function loginLoader({ request }) {
    const session = await getSession(request.headers.get("Cookie"));
    console.log(session.has("user_session") + " waaa");
    return data(
        { error: session.get("error") },
        { headers: { "Set-Cookie": await commitSession(session) } }
    );
}

function Login() {
    const [showPassword, useShowPassword] = useState(false);
    const navigate = useNavigate();
    const togglePassword = () => {
        useShowPassword((prev) => !prev);
    };
    return (
        <div className="wrapper login">
            <div className="brand">
                <img src="./public/logo.png" />
                <h1>
                    KittyKards <span>Kollect</span>
                </h1>
            </div>
            <Form className="login-form" method="POST">
                <h2>Login</h2>
                <input type="text" placeholder="Username" name="username" />
                <div className="password-wrapper">
                    <input
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                    />
                    <i
                        className={
                            showPassword ? "fa fa-eye" : "fa fa-eye-slash"
                        }
                        aria-hidden="true"
                        onClick={togglePassword}
                    ></i>
                </div>
                <div className="other-options">
                    <div>
                        <input
                            type="checkbox"
                            name="remember-me"
                            id="remember-me"
                        />
                        <label htmlFor="remember-me">Remember Me?</label>
                    </div>
                    <span>Forgot Password?</span>
                </div>
                <button>Login</button>
            </Form>
            <p>
                Don't have an account? <span>Register</span>
            </p>
        </div>
    );
}

export default Login;
