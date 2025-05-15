import Navbar from "../components/Navbar";
import Landing from "../components/Landing";

function LandingPage ({currentPage, setCurrentPage}) {
    return (
        <div className="min-h-screen gradient-1">
            <div>
                <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage('landing')}/>
            </div>
            <div className="py-15 md:py-10 ">
                <Landing/>
            </div>
        </div>
    )
}

export default LandingPage;