import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingAnimation from "./LoadingAnimation";
import IconShowPassword from '../src/assets/show.png'
import IconHidePassword from '../src/assets/hide.png'

function RegisterForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [rePassword, setRePassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [valid,setValid] = useState(false);
    const Navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);

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
                <div className='flex flex-col justify-center items-center px-3 py-8 bg-slate-200 rounded-lg shadow-sm/70 mt-10'>
                    <p className='text-xl md:text-2xl text-slate-950'>Welcome!</p>
                    <p className='text-lg text-slate-950'>Register to Create Your Account.</p>
                    <form onSubmit={handleSubmit} className='flex flex-col text-sm md:text-lg gap-7 lg:gap-3 md:gap-4 px-5 mt-5'>
                        <div className='flex flex-col text-sm md:text-lg'>
                            <div>
                                <p>Email <span className='text-red-600'>*</span></p>
                            </div>
                            <input 
                                type="text" 
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='form-input w-full'/>
                        </div>
                        <div className='flex flex-col text-sm md:text-lg'>
                            <div>
                                <p>Password <span className='text-red-600'>*</span></p>
                            </div>
                            <div className='relative flex'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Masukkan password"
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
                        <div className='flex flex-col text-sm md:text-lg'>
                            <div>
                                <p>Confirm Password <span className='text-red-600'>*</span></p>
                            </div>
                            <div className='relative flex'>
                                <input
                                    type={showRePassword ? 'text' : 'password'}
                                    placeholder="Confirm your password"
                                    value={rePassword}
                                    onChange={(e) => setRePassword(e.target.value)}
                                    className='form-input w-full'/>
                                <img
                                    src={showRePassword ? IconHidePassword : IconShowPassword}
                                    alt="toggle visibility"
                                    onClick={() => setShowRePassword(!showRePassword)}
                                    className="absolute right-3 bottom-1/2 transform translate-y-1/2 h-4 md:h-5 cursor-pointer"
                                />
                            </div>

                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading || !valid}
                                className={`flex justify-center items-center h-10 md:h-12 text-sm md:text-lg rounded-lg bg-slate-700 w-75 lg:w-95 text-sky-50 ${valid ? 'hover:bg-slate-800 hover:cursor-pointer':'pointer-events-none opacity-50'}`}
                            >
                                {loading ? (
                                    <div className='flex flex-row justify-center items-center'>
                                        <div>
                                            <LoadingAnimation />
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
                        <div className="mt-5 text-sm md:text-lg">
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