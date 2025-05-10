import { Link, useNavigate  } from 'react-router-dom';
import IconPerson from '../src/assets/IconPerson.png'
import axios from 'axios';
import { useState } from 'react';

function LoginForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const Navigate = useNavigate();
    const API = 'https://reqres.in/api/login';
    
    const handleLogin = async (e) => {
        e.preventDefault();
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
                Navigate('/');
            }, 1000);
        } catch (error){
            if(error.response){
                console.error("Error detail:", error);
                setMessage(error.response.data.error || "Login failed");
            } else {
                setMessage('Something went wrong');
            }
        }
    }
    return (
        <>
            <div className='flex justify-center'>
                <div className='flex flex-col justify-center items-center rounded-lg shadow-2xl mt-20'>
                    <img 
                        src={IconPerson} 
                        className='h-14 md:h-18 aspect-square'/>
                    <p className='text-xl md:text-2xl text-slate-950'>Login Member</p>
                    <form onSubmit={handleLogin} action="" className='flex flex-col gap-3 md:gap-4 p-5'>
                        <div className='flex flex-row h-10 md:h-12'>
                            <input 
                                type="text" 
                                placeholder="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='rounded-lg px-4 bg-white w-85'/>
                        </div>
                        <div className='flex flex-row h-10 md:h-12'>
                            <input
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='rounded-lg px-4 bg-white w-85'/>
                        </div>
                        <div className='flex flex-row h-10 md:h-12'>
                            <button
                                type="submit"
                                className='rounded-lg bg-slate-700 w-85 hover:bg-slate-800 hover:cursor-pointer text-sky-50'
                            >Login</button>
                        </div>
                        {message && (<p className={`text-center text-sm mt-2 ${message === 'Login success' ? 'text-green-600' : 'text-red-600'}`}>{message}</p>)}
                        <div>
                            <p>
                                Belum punya akun? <span><Link
                                    to={'/daftar'} 
                                    className={`text-slate-700 hover:text-slate-900`} href="#">Daftar</Link></span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginForm;