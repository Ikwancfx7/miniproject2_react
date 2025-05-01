function RegisterForm () {
    return (
        <>
            <div className='flex justify-center items-center w-full h-screen'>
                <div className='flex flex-col justify-center items-center bg-slate-300/70 p-6 rounded-lg backdrop-blur-md'>
                    <p className='text-2xl text-slate-950'>Registration Form</p>
                    <form action="" className='flex flex-col gap-2 p-5'>
                        <div className='flex flex-row h-12'>
                            <input 
                                type="text" 
                                placeholder="Masukkan email"
                                className='rounded-lg px-4 bg-white w-85'/>
                        </div>
                        <div className='flex flex-row h-12'>
                            <input
                                type="text"
                                placeholder="Masukkan password"
                                className='rounded-lg px-4 bg-white w-85'/>
                        </div>
                        <div className='flex flex-row h-12'>
                            <input
                                type="text"
                                placeholder="Masukkan ulang password"
                                className='rounded-lg px-4 bg-white w-85'/>
                        </div>
                        <div className='flex flex-row h-12'>
                            <button
                                type="submit"
                                placeholder="password"
                                className='rounded-lg bg-slate-700 w-85 hover:bg-slate-800 hover:cursor-pointer text-sky-50'
                            >Daftar</button>
                        </div>
                        <div>
                            <p>
                                Sudah punya akun? <span><a className='text-slate-700 hover:text-slate-900' href="#">Login</a></span>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default RegisterForm