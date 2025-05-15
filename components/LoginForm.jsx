import { Link, useNavigate  } from 'react-router-dom';
import IconPerson from '../src/assets/IconPerson.png'
import axios from 'axios';
import { useState, useEffect } from 'react';
import IconShowPassword from '../src/assets/show.png'
import IconHidePassword from '../src/assets/hide.png'
import LoadingAnimation from './LoadingAnimation';


function LoginForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [valid, setValid] = useState(false);
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
                Navigate('/dashboard');
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
                <div className='flex flex-col justify-center bg-slate-200 px-3 py-8 items-center rounded-lg shadow-sm/70 mt-10 md:mt-15'>
                    <div className='flex'>
                        <p className='flex justify-center text-sm md:text-lg text-slate-950 w-75 md:w-95'>Welcome back! Please login to your account</p>
                    </div>
                    <form onSubmit={handleLogin} action="" className='flex flex-col gap-7 lg:gap-6 text-sm lg:text-lg px-5 mt-5'>
                        <div className='flex flex-col text-sm md:text-lg'>
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
                        <div className='flex flex-col text-sm md:text-lg'>
                            <div>
                                <p>Password <span className='text-red-600'>*</span></p>
                            </div>
                            <div className='relative flex'>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='form-input w-full'/>
                                <img
                                    src={showPassword ? IconHidePassword : IconShowPassword}
                                    alt="toggle visibility"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 bottom-1/2 transform translate-y-1/2 h-4 md:h-5 cursor-pointer"
                                />
                            </div>
                        </div>
                        <div>
                            <Link to={'/forgot-password'} className='text-sm md:text-lg hover:text-slate-700'>Forgot Password?</Link>
                        </div>
                        <div className='flex h-10 md:h-12 text-sm md:text-lg'>
                            <button
                                type="submit"
                                disabled={loading || !valid}
                                className={`rounded-lg bg-slate-700 w-75 md:w-95 text-sky-50 ${valid ? 'hover:bg-slate-800 hover:cursor-pointer':'pointer-events-none opacity-50'}`}
                            >
                                {loading ? (
                                    <div className='flex flex-row justify-center items-center'>
                                        <div>
                                            <LoadingAnimation/>
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
                            Don't have an account? <span><Link
                                to={'/register'} 
                                className={`text-slate-700 hover:text-slate-900`} href="#">Register</Link></span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm;