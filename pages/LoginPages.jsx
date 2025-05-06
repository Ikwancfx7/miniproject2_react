import Navbar from "../components/Navbar";
import LoginForm from "../components/loginForm";

function LoginPages ({currentPage, setCurrentPage}) {
    return (
        <>
        <div className='w-full h-screen bg-slate-300'>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage('login')}/>
            <LoginForm/>
        </div>
        </>
    );
};

export default LoginPages;