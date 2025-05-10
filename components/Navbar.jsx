import { Link } from "react-router-dom";

function Navbar ({currentPage}) {
    const token = localStorage.getItem('token');
    const handleLogout = () => {
        localStorage.removeItem('token');
    }

    if(token){
        return(
            <div className="bg-slate-200 shadow">
                <header className="container mx-auto flex flex-row items-center justify-between px-5 lg:px-10 text-lg lg:text-2xl py-2">
                    <div className="flex flex-row">
                        <Link 
                            to={'/'}
                            className={`px-3 py-2 rounded-xl text-slate-900 hover:cursor-pointer 
                                ${currentPage === 'Home' ? "font-bold": "font-normal"}`
                            }
                        >
                            <p>Dashboard</p>
                        </Link>
                    </div>
                    <div className="flex flex-row">
                        <Link
                            to={'/login'} 
                            onClick={handleLogout}
                            className={` px-8 py-2 hover:cursor-pointer
                                ${currentPage === 'login' ? "text-red-900": "text-red-900 hover:text-red-400"}`
                            }>
                            <p>Log Out</p>
                        </Link>
                    </div>
                </header>
            </div>
        )
    }

    return (
        <>
        <header className="flex flex-row justify-center px-20">
            <div className="flex flex-row gap-5 py-4">
                <Link
                    to={'/login'}
                    className={` px-8 py-1 rounded-4xl text-slate-50 hover:cursor-pointer
                        ${currentPage === 'login' ? "bg-slate-500": "bg-slate-400 hover:bg-slate-500"}`
                    }>
                    <p>Login</p>
                </Link>
                <Link 
                    to={'/daftar'}
                    className={`px-8 py-1 rounded-4xl text-slate-50 hover:cursor-pointer
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