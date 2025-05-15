import { Link } from "react-router-dom";

function Navbar ({currentPage, isForgotPassword}) {
    const token = localStorage.getItem('token');
    const handleLogout = () => {
        localStorage.removeItem('token');
    }


    const Home = () => {
        return (
            <div className="flex items-center">
                <Link to={'/'} className="text-slate-950 text-lg md:text-3xl font-semibold md:font-bold">Home</Link>
            </div>
        )
    }

    if(token){
        return(
            <div className="bg-[rgba(4,144,1,0.2)] shadow">
                <header className="container mx-auto flex flex-row items-center justify-between px-5 lg:px-10 py-2">
                    <div className="flex flex-row text-xl lg:text-3xl">
                        <Link 
                            to={'/'}
                            className={`px-3 py-2 rounded-xl text-slate-900 hover:cursor-pointer 
                                ${currentPage === 'dashboard' ? "font-light md:font-semibold": "font-normal"}`
                            }
                        >
                            <p>Dashboard</p>
                        </Link>
                    </div>
                    <div className="flex flex-row">
                        <Link
                            to={'/login'} 
                            onClick={handleLogout}
                            className={`px-8 py-2 hover:cursor-pointer
                                ${currentPage === 'login' ? "text-red-900": "text-red-900 hover:text-red-700"}`
                            }>
                                <div className="flex flex-row gap-1 items-center text-lg font-semibold">
                                    <div>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 002 2h3a2 2 0 002-2V7a2 2 0 00-2-2h-3a2 2 0 00-2 2v1" />
                                        </svg>
                                    </div>
                                    <div>Logout</div>
                                </div>
                        </Link>
                    </div>
                </header>
            </div>
        )
    }

    return (
        <div>
            {isForgotPassword ? (
                <header>
                    <div className="flex flex-row justify-center px-20 py-4 bg-slate-100">
                        <p className="text-slate-950 text-2xl font-semibold">Change Password Request</p>
                    </div>
                </header>
            ):(
                <header className="container mx-auto flex flex-row justify-between px-6 md:px-20">
                    <Home />
                    <div className="flex flex-row gap-2 md:gap-5 py-4 text-[12px] md:text-[16px]">
                        <Link
                            to={'/login'}
                            className={`flex justify-center items-center w-15 h-7 md:w-24 md:h-10 rounded-sm md:rounded-lg hover:cursor-pointer
                                ${currentPage === 'login' ? "text-slate-50 bg-slate-700 shadow-lg/30" : "text-slate-950 border border-slate-950 hover:text-slate-50 hover:bg-slate-700"}`
                            }>
                            <p>Login</p>
                        </Link>
                        {currentPage !== 'landing' && 
                            <Link 
                                to={'/register'}
                                className={`flex justify-center items-center w-15 h-7 md:w-24 md:h-10 rounded-sm md:rounded-lg hover:cursor-pointer
                                    ${currentPage === 'register' ? "text-slate-50 bg-slate-700 shadow-lg/30" : "text-slate-950 border border-slate-950 hover:text-slate-50 hover:bg-slate-700"}`
                                }>
                                <p>Register</p>
                            </Link>
                        }
                        
                    </div>
                </header>
            )}
        </div>
    );
};

export default Navbar;