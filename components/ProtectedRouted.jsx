import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

function ProtectedRouted({ children }) {
    const token = localStorage.getItem('token');

    if(!token) {
        return <Navigate to="/login" />
    }

    return <>{children || <Outlet />} </>;
}

export default ProtectedRouted;