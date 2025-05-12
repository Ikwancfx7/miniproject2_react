import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function RegisterForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [rePassword, setRePassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [valid,setValid] = useState(false);
    const Navigate = useNavigate();

    const buttonValid = () => {
        const isValid = email.trim() !== '' && password.trim() !== '' && rePassword.trim() !== '';
        setValid(isValid);  
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setLoading(true);

        if (password !== rePassword) {
            setTimeout(() => {
                setLoading(false);
                setMessage('Password does not match');
            }, 2000)
            return;
        } 

        try{
            console.log("Email:", email);
            console.log("Password:", password);
            const response = await axios.post('https://reqres.in/api/register', {
                email: email,
                password: password
            },{
                headers: {
                    'x-api-key': 'reqres-free-v1',
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            setEmail('');
            setPassword('');
            setRePassword('');
            setMessage('Success');
            if(response.status === 200){
                setTimeout(() => {
                    setLoading(false);
                    Navigate('/login');
                }, 2000);
            }
        } catch (error) {
            if(error.response){
                setTimeout(() => {
                    setLoading(false);
                    console.error("Error detail:", error);
                    setMessage(error.response.data.error || "Registration failed");
                }, 2000)
            } else {
                setTimeout(() => {
                    setLoading(false);
                    setMessage('Something went wrong');
                }, 2000)
            }
        }
    }

    useEffect(() => {
        buttonValid();
    }, [email, password, rePassword]);

    return (
        <>
            <div className="flex justify-center">
                <div className='flex flex-col justify-center items-center px-8 py-10 bg-slate-200 rounded-lg shadow-xl/70 mt-10 md:mt-15'>
                    <p className='text-2xl text-slate-950'>Register Form</p>
                    <form onSubmit={handleSubmit} action="" className='flex flex-col gap-7 lg:gap-6 md:gap-4 px-5 mt-5'>
                        <div className='flex flex-row h-12 md:h-13'>
                            <input 
                                type="text" 
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='rounded-lg px-4 bg-white w-full'/>
                        </div>
                        <div className='flex flex-row h-12 md:h-13'>
                            <input
                                type="password"
                                placeholder="Masukkan password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='rounded-lg px-4 bg-white w-full'/>
                        </div>
                        <div className='flex flex-row h-12 md:h-13'>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)}
                                className='rounded-lg px-4 bg-white w-full'/>
                        </div>
                        <div className='flex flex-row h-12 md:h-13'>
                            <button
                                type="submit"
                                disabled={loading || !valid}
                                className={`rounded-lg bg-slate-700 w-75 lg:w-85 text-sky-50 ${valid ? 'hover:bg-slate-800 hover:cursor-pointer':'pointer-events-none opacity-50'}`}
                            >
                                {loading ? (
                                    <div className='flex flex-row justify-center items-center'>
                                        <div>
                                            <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24">
                                                <circle
                                                    className="opacity-25"
                                                    fill="none"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                >
                                                </circle>
                                                <circle 
                                                    className="opacity-80" 
                                                    fill="none" cx="12" cy="12" r="10" 
                                                    stroke="currentColor" 
                                                    strokeWidth="4" 
                                                    strokeLinecap="round"
                                                    strokeDasharray="60"
                                                    strokeDashoffset="30"
                                                >    
                                                </circle>
                                            </svg>
                                        </div>
                                        <div>Register</div>
                                    </div>
                                ):(
                                    <div>Register</div>
                                )}
                            </button>
                        </div>
                    </form>
                        {message && (
                            <div className="mt-5">
                                <p className={`text-center text-sm md:text-lg ${message === 'Success' ? 'text-green-600' : 'text-red-600'}`}>{message}</p>
                            </div>
                        )}
                        <div className="mt-5">
                            <p>
                                Already have an account? <span><Link 
                                    to={'/login'}
                                    className='text-slate-700 hover:text-slate-900' href="#">Login</Link></span>
                            </p>
                        </div>
                </div>
            </div>
        </>
    );
};

export default RegisterForm