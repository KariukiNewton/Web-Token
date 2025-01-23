import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Login() {
    const [value, setValue] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

    };

    return (
        <div className="container">
            <h2>Login Account</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}>
                    </input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={(e) => setValue({ ...value, [e.target.name]: e.target.value })}>
                    </input>
                </div>
                <button type="submit">Submit</button>
                <span>
                    Create account? <Link to="/register">Register</Link>
                </span>
            </form>

            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Login;