import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Dashboard ({currentPage, setCurrentPage}) {

    return (
        <>
            <div className="w-full min-h-screen gradient-2 text-slate-950">
                <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage('dashboard')}/>
                <div className="container mx-auto px-10">
                    <Outlet />
                </div>
            </div>
        </> 
    )
}

export default Dashboard;