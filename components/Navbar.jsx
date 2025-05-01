function Navbar () {
    
    return (
        <>
        <header className="flex flex-row justify-center gap-5 py-3 bg-slate-50">
            <div className="bg-slate-400 px-8 py-2 rounded-4xl text-slate-50 hover:cursor-pointer hover:bg-slate-500"
                >
                <p>Login</p>
            </div>
            <div className="bg-slate-400 px-8 py-2 rounded-4xl text-slate-50 hover:cursor-pointer hover:bg-slate-500"
                >
                <p>Daftar</p>
            </div>
        </header>
        </>
    );
};

export default Navbar;