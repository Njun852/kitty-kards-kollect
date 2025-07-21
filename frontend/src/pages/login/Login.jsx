import { useState } from "react";
import { useNavigate } from "react-router";
import "./login.css";
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
            <form className="login-form">
                <h2>Login</h2>
                <input type="text" placeholder="Username" />
                <div className="password-wrapper">
                    <input
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
                <button onClick={()=>navigate("/")}>Login</button>
            </form>
            <p>
                Don't have an account? <span>Register</span>
            </p>
        </div>
    );
}

export default Login;
