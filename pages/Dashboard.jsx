import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Dashboard ({currentPage, setCurrentPage}) {

    return (
        <>
            <div className="w-full h-screen bg-slate-50 text-slate-950">
                <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage('Home')}/>
                <div className="container mx-auto px-10">
                    <Outlet />
                </div>
            </div>
        </> 
    )
}

export default Dashboard;