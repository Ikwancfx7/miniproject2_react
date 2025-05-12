import { Link, useNavigate  } from 'react-router-dom';
import IconPerson from '../src/assets/IconPerson.png'
import axios from 'axios';
import { useState, useEffect } from 'react';

function LoginForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [valid,setValid] = useState(false);
    const Navigate = useNavigate();
    const API = 'https://reqres.in/api/login';

    const buttonValid = () => {
        const isValid = email.trim() !== '' && password.trim() !== '';
        setValid(isValid);  
    }

    
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(API, {
                email,
                password
            }, {
                headers: {
                    'x-api-key': 'reqres-free-v1',
                    'Content-Type': 'application/json'
                }
            });
            console.log('Login success',response);
            setMessage('Login success');
            localStorage.setItem('token', response.data.token);
            setTimeout(() => {
                setLoading(false);
                Navigate('/');
            }, 2000);
        } catch (error){
            if(error.response){
                setTimeout(() => {
                    setLoading(false);
                    console.error("Error detail:", error);
                    setMessage(error.response.data.error || "Login failed");
                }, 2000);
            } else {
                setTimeout(() => {
                    setLoading(false);
                    setMessage('Something went wrong');
                }, 2000);
            }
        }
    }

    useEffect(() => {
        buttonValid();
    }, [email, password]);

    return (
        <>
            <div className='flex justify-center'>
                <div className='flex flex-col bg-slate-200 justify-center px-8 py-10 items-center rounded-lg shadow-xl/70 mt-10 md:mt-15'>
                    <div className='flex flex-col items-center'>
                        <img 
                            src={IconPerson} 
                            className='h-14 md:h-18 aspect-square'/>
                        <p className='text-xl md:text-2xl text-slate-950'>Login Member</p>
                    </div>
                    <form onSubmit={handleLogin} action="" className='flex flex-col gap-7 lg:gap-6 px-5 text-sm lg:text-lg mt-5'>
                        <div className='flex flex-row h-12 md:h-13'>
                            <input 
                                type="text" 
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='rounded-lg px-4 bg-white w-full'/>
                        </div>
                        <div className='flex flex-row h-12 md:h-13'>
                            <input
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='rounded-lg px-4 bg-white w-full'/>
                        </div>
                        
                        <div className='flex flex-row h-12 md:h-13'>
                            <button
                                type="submit"
                                disabled={loading || !valid}
                                className={`rounded-lg bg-slate-700 w-75 md:w-95 text-sky-50 ${valid ? 'hover:bg-slate-800 hover:cursor-pointer':'pointer-events-none opacity-50'}`}
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
                                        <div>Login</div>
                                    </div>
                                ):(
                                    <div>Login</div>
                                )}
                            </button>
                        </div>
                    </form>
                    {message && (
                        <div className='mt-5'>
                            <p className={`text-center lg:text-lg ${message === 'Login success' ? 'text-green-600' : 'text-red-600'}`}>{message}</p>
                        </div>
                    )}
                    <div className='flex justify-start mt-5'>
                        <p className='text-sm lg:text-lg'>
                            Belum punya akun? <span><Link
                                to={'/daftar'} 
                                className={`text-slate-700 hover:text-slate-900`} href="#">Daftar</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm;