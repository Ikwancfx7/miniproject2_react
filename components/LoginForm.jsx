import { Link } from 'react-router-dom';
import IconPerson from '../src/assets/IconPerson.png'
// import IconPassword from '../src/assets/IconPassword.png'
// import { useState } from 'react';

function LoginForm () {
    return (
        <>
            <div className='flex justify-center items-center w-full h-screen'>
                <div className='flex flex-col justify-center items-center bg-slate-300/70 p-6 rounded-lg backdrop-blur-md'>
                    <img 
                        src={IconPerson} 
                        className='h-18 aspect-square'/>
                    <p className='text-2xl text-slate-950'>Login Member</p>
                    <form action="" className='flex flex-col gap-2 p-5'>
                        <div className='flex flex-row h-12'>
                            <input 
                                type="text" 
                                placeholder="email"
                                className='rounded-lg px-4 bg-white w-85'/>
                            {/* <img src={IconPerson} className='absolute aspect-square object-contain h-8 w-8 mt-2 ml-1'/> */}
                        </div>
                        <div className='flex flex-row h-12'>
                            <input
                                type="text"
                                placeholder="password"
                                className='rounded-lg px-4 bg-white w-85'/>
                            {/* <img src={IconPassword} className='absolute aspect-square object-contain h-8 w-8 mt-2 ml-1'/> */}
                        </div>
                        <div>
                            <a 
                                className='text-slate-700 hover:text-slate-900'
                                href="#"
                            >Lupa password?</a>
                        </div>
                        <div className='flex flex-row h-12'>
                            <button
                                type="submit"
                                placeholder="password"
                                className='rounded-lg bg-slate-700 w-85 hover:bg-slate-800 hover:cursor-pointer text-sky-50'
                            >Login</button>
                        </div>
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