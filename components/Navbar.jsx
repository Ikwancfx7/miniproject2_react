import React from "react";

function Navbar ({currentPage, setPage}) {
    
    return (
        <>
        <header className="flex flex-row justify-center gap-5 py-3 bg-slate-50">
            <div
                onClick={()=>setPage('login')}
                className={` px-8 py-2 rounded-4xl text-slate-50 hover:cursor-pointer hover:bg-slate-500
                    ${currentPage === 'login' ? "bg-slate-500": "bg-slate-400 hover:bg-slate-500"}`
                }>
                <p>Login</p>
            </div>
            <div 
                onClick={()=>setPage('daftar')}
                className={`bg-slate-400 px-8 py-2 rounded-4xl text-slate-50 hover:cursor-pointer hover:bg-slate-500
                    ${currentPage === 'daftar' ? "bg-slate-500" : "bg-slate-400 hover:bg-slate-500"}`
                }>
                <p>Daftar</p>
            </div>
        </header>
        </>
    );
};

export default Navbar;