import RegisterForm from "../components/RegisterForm";
import Navbar from "../components/Navbar";

function RegisterPages({currentPage, setCurrentPage}) {
    return (
        <div className='w-full min-h-screen pb-20'>
            <div className="bg-slate-200">
                <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage('register')}/>
            </div>
            <RegisterForm/>
        </div>
        )
}

export default RegisterPages;