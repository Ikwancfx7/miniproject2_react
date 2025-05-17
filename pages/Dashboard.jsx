import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

function Dashboard ({currentPage, setCurrentPage}) {

    return (
        <>
            <div className="w-full min-h-screen gradient-2 text-slate-950">
                <div className="bg-slate-200">
                    <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage('dashboard')}/>
                </div>
                <div className="container mx-auto px-10">
                    <Breadcrumb />
                </div>
                <div className="container mx-auto px-10 pb-10">
                    <Outlet />
                </div>
            </div>
        </> 
    )
}

export default Dashboard;