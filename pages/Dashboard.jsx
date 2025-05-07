import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import ListUser from "../components/ListUser";
// import SingleUser from "../components/SingleUser";
// import { useLocation } from "react-router-dom";

function Dashboard ({currentPage, setCurrentPage}) {
    // const location = useLocation();
    // const isUser = location.pathname.startsWith('/single-user');

    return (
        <>
            <div className="w-full h-screen bg-slate-50 text-slate-950">
                <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage('Home')}/>
                <div className="container mx-auto">
                    <Outlet />
                </div>
            </div>
        </> 
    )
}

export default Dashboard;