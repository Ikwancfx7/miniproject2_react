import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

function LoginPages ({currentPage, setCurrentPage}) {
    return (
        <>
        <div className='w-full min-h-screen'>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage('login')}/>
            <LoginForm/>
        </div>
        </>
    );
};

export default LoginPages;