import Navbar from "../components/Navbar";
import Landing from "../components/Landing";

function LandingPage () {
    return (
        <div className="h-screen">
            <div className="bg-white">
                <Navbar/>
            </div>
            <div className="bg-slate-100 h-screen py-10 px-20 gradient-1">
                <Landing/>
            </div>
        </div>
    )
}

export default LandingPage;