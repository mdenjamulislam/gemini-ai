import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="flex items-center justify-center w-full h-screen">
                <span class="loading loading-dots loading-lg"></span>
            </div>
        );
    }

    if (user) {
        return children;
    }
    return <div>
        <Navigate to="/login"></Navigate>
    </div>;
};

export default PrivateRoute;
