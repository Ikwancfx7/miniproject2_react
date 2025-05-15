import Navbar from "../components/Navbar";
import Landing from "../components/Landing";

function LandingPage ({currentPage, setCurrentPage}) {
    return (
        <div className="min-h-screen gradient-1">
            <div>
                <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage('landing')}/>
            </div>
            <div className="h-screen py-30 px-10 md:py-10 md:px-20 ">
                <Landing/>
            </div>
        </div>
    )
}

export default LandingPage;