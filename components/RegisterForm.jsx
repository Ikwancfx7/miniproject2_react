import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function RegisterForm () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [rePassword, setRePassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password !== rePassword) {
            setMessage('Password does not match');
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
            if(response.status === 200){
                setMessage('Success');
            }
        } catch (error) {
            if(error.response){
                console.error("Error detail:", error);
                setMessage(error.response.data.error || "Registration failed");
            } else {
                setMessage('Terjadi kesalahan jaringan');
            }
        }
    }

    return (
        <>
            <div>
                <div className='flex flex-col justify-center items-center bg-slate-300/70 p-6 rounded-lg backdrop-blur-md sahdow-2xl mt-20'>
                    <p className='text-2xl text-slate-950'>Registration Form</p>
                    <form onSubmit={handleSubmit} action="" className='flex flex-col gap-2 p-5'>
                        <div className='flex flex-row h-12'>
                            <input 
                                type="text" 
                                placeholder="Masukkan email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='rounded-lg px-4 bg-white w-85'/>
                        </div>
                        <div className='flex flex-row h-12'>
                            <input
                                type="password"
                                placeholder="Masukkan password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='rounded-lg px-4 bg-white w-85'/>
                        </div>
                        <div className='flex flex-row h-12'>
                            <input
                                type="password"
                                placeholder="Masukkan ulang password"
                                value={rePassword}
                                onChange={(e) => setRePassword(e.target.value)}
                                className='rounded-lg px-4 bg-white w-85'/>
                        </div>
                        <div className='flex flex-row h-12'>
                            <button
                                type="submit"
                                placeholder="password"
                                className='rounded-lg bg-slate-700 w-85 hover:bg-slate-800 hover:cursor-pointer text-sky-50'
                            >Daftar</button>
                        </div>
                        {message && (
                            <p className={`text-center text-sm mt-2 ${message === 'Success' ? 'text-green-600' : 'text-red-600'}`}>{message}</p>)}
                        <div>
                            <p>
                                Sudah punya akun? <span><Link 
                                    to={'/login'}
                                    className='text-slate-700 hover:text-slate-900' href="#">Login</Link></span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RegisterForm