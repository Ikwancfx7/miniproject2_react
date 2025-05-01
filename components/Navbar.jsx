function Navbar () {
    return (
        <>
        <header className="flex flex-row justify-center gap-5 py-6 bg-slate-50">
            <div className="bg-slate-400 px-8 py-2 rounded-4xl text-slate-50">
                <p>Login</p>
            </div>
            <div className="bg-slate-400 px-8 py-2 rounded-4xl text-slate-50">
                <p>Daftar</p>
            </div>
        </header>
        </>
    );
};

export default Navbar;