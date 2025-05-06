import Navbar from "../components/Navbar";

function Dashboard ({currentPage, setCurrentPage}) {
    return (
        <>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage('Home')}/>
            <h1>Home</h1>
        </> 
    )
}

export default Dashboard;