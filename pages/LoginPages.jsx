import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

function LoginPages ({currentPage, setCurrentPage}) {
    return (
        <>
        <div className='w-full min-h-screen'>
            <div className="bg-slate-200">
                <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage('login')}/>
            </div>
            <LoginForm/>
        </div>
        </>
    );
};

export default LoginPages;