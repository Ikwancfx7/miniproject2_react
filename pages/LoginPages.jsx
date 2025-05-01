import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/loginForm";

function LoginPages () {
    const [currentPage, setPage] = useState("login")
    return (
        <>
            <Navbar currentPage={currentPage} setPage={setPage}/>
            {currentPage === "login" && <LoginForm currentPage={currentPage} setPage={setPage}/>}
            {currentPage === "daftar" && <RegisterForm currentPage={currentPage} setPage={setPage}/>}
        </>
    );
};

export default LoginPages;