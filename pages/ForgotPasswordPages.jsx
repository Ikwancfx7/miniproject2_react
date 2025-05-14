import { useEffect } from "react";
import ForgotPassword from "../components/ForgotPassword"
import Navbar from "../components/Navbar";

function ForgotPasswordPages ({isForgotPassword, setIsForgotPassword}) {
    useEffect(() => {
        setIsForgotPassword(true);
        
        return () => {
            setIsForgotPassword(false);
            console.log("isForgotPassword:", isForgotPassword);
        };
    }, [setIsForgotPassword]);

    return (
        <div className='w-full min-h-screen bg-slate-100'>
            <Navbar isForgotPassword={isForgotPassword}/>
            <ForgotPassword/>
        </div>
    )
}

export default ForgotPasswordPages; 