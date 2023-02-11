/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PageProtected({ children, needLogin = false, guestOnly = false, adminOnly = false }) {
    let navigate = useNavigate();
    const userSelector = useSelector((state) => state.auth);

    useEffect(() => {
        if (needLogin && !userSelector.username) {
            return navigate("/login", { replace: true });
        }
        if (guestOnly && userSelector.username) {
            return navigate("/", { replace: true });
        }
        if (adminOnly && !userSelector.username || !userSelector.admin) {
            // menuju page yang mengharuskan kita untuk 
            return navigate("/", { replace: true });
        }
    }, []);
    return children;
}

export default PageProtected;
