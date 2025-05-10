import RegisterForm from "../components/RegisterForm";
import Navbar from "../components/Navbar";

function RegisterPages({currentPage, setCurrentPage}) {
    return (
        <div className='w-full h-screen bg-slate-100'>
            <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage('daftar')}/>
            <RegisterForm/>
        </div>
        )
}

export default RegisterPages;   