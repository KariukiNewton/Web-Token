import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

function Register() {
    const [value, setValue] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const { data } = await axios.post("http://localhost:4000/register", {
                ...value,
            });
            toast.success("Registration successful!");
        } catch (err) {
            console.log(err);
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <div className="container">
            <h2>Register Account</h2>
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
                    Already have an account? <Link to="/login">Login</Link>
                </span>
            </form>

            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Register;
