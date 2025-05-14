import RegisterForm from "../components/RegisterForm";
import Navbar from "../components/Navbar";

function RegisterPages({currentPage, setCurrentPage}) {
    return (
        <div className='w-full min-h-screen pb-10'>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage('register')}/>
            <RegisterForm/>
        </div>
        )
}

export default RegisterPages;   