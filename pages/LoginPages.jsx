// import React, { useState } from "react";
import Navbar from "../components/Navbar";
import LoginForm from "../components/loginForm";

function LoginPages () {
    
    return (
        <>
            <Navbar/>
            <LoginForm/>
            {/* {currentPage === "login" && <LoginForm currentPage={currentPage} setPage={setPage}/>}
            {currentPage === "daftar" && <RegisterForm currentPage={currentPage} setPage={setPage}/>} */}
        </>
    );
};

export default LoginPages;