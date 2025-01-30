import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/login";
import Secret from "./Pages/Secret";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <>
            <ToastContainer></ToastContainer>
            <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/" element={<Secret></Secret>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;