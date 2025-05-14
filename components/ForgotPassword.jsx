import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation";

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [valid, setValid] = useState(false);
    const Navigate = useNavigate();

    const buttonValid = () => {
        const isValid = email.trim() !== '';
        setValid(isValid);  
    }

    const hanldeChangePassword = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setMessage('We’ve sent you an email with instructions to reset your password.');
            
            setTimeout(() => {
                Navigate('/login');
            }, 3000)
        }, 3000)
    }

    useEffect(() => {
        buttonValid();
    }, [email]);

    return (
        <div className='flex justify-center'>
            <div className='flex flex-col justify-center bg-slate-200 px-8 py-10 items-center rounded-lg shadow-xl/70 mt-10 md:mt-15'>
                <div className='flex flex-col items-center w-75 md:w-95'>
                    <p className='text-justify text-sm md:text-lg text-slate-950'>Please enter your email address. You will receive an email message with instructions on how to reset your password...</p>
                </div>
                <form onSubmit={hanldeChangePassword} className='flex flex-col gap-7 lg:gap-6 px-5 text-sm lg:text-lg mt-5'>
                    <div className='flex flex-col text-sm md:text-lg w-75 md:w-95'>
                        <div>
                            <p>Email <span className='text-red-600'>*</span></p>
                        </div>
                        <div>
                            <input 
                                type={"text"} 
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='form-input w-full'/>
                        </div>
                    </div>
                    <div className='flex h-10 md:h-12 text-sm md:text-lg'>
                        <button
                            type="submit"
                            disabled={loading || !valid}
                            className={`rounded-lg bg-slate-700 w-75 md:w-95 text-sky-50 ${valid ? 'hover:bg-slate-800 hover:cursor-pointer':'pointer-events-none opacity-50'}`}
                        >
                            {loading ? (
                                <div className='flex flex-row justify-center items-center'>
                                    <LoadingAnimation/>
                                    <div>Submit</div>
                                </div>
                            ):(
                                <div>Submit</div>
                            )}
                        </button>
                    </div>
                </form>
                
                {message && (
                    <div className='mt-5 w-75 md:w-95'>
                        <p className='w-full text-center text-sm md:text-lg text-green-600'>{message}</p>
                    </div>
                )}
                <div className='flex justify-start mt-5 w-75 md:w-95'>
                    <p className='text-sm lg:text-lg'><Link
                            to={'/login'} 
                            className={`text-slate-950 hover:text-slate-800`} href="#">Back to login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;