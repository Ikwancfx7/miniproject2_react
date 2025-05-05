import React, {useState} from "react";
import { Link } from "react-router-dom";

function Navbar () {
    const [currentPage, setPage] = useState("Home");
    
    return (
        <>
        <header className="flex flex-row justify-between px-20 bg-slate-50">
           <div className="flex flex-row gap-5 py-3">
                <Link 
                    to={'/'}
                    onClick={()=>setPage('Home')}
                    className={`px-8 py-2 rounded-4xl text-slate-900 hover:cursor-pointer
                        ${currentPage === 'Home' ? "font-bold": "font-normal"}`
                    }
                >
                    <p>Dashboard</p>
                </Link>
           </div>
            <div className="flex flex-row gap-5 py-3">
                <Link
                    to={'/login'} 
                    className={` px-8 py-2 rounded-4xl text-slate-50 hover:cursor-pointer hover:bg-slate-500
                        ${currentPage === 'login' ? "bg-slate-500": "bg-slate-400 hover:bg-slate-500"}`
                    }>
                    <p>Login</p>
                </Link>
                <Link 
                    to={'/daftar'}  
                    onClick={()=>setPage('daftar')}
                    className={`bg-slate-400 px-8 py-2 rounded-4xl text-slate-50 hover:cursor-pointer hover:bg-slate-500
                        ${currentPage === 'daftar' ? "bg-slate-500" : "bg-slate-400 hover:bg-slate-500"}`
                    }>
                    <p>Daftar</p>
                </Link>

            </div>
        
              
                
         
          
         
        </header>
        </>
    );
};

export default Navbar;