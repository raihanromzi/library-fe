/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../config/config";
import user_types from "../redux/auth/types";
import { useState } from "react";

const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            console.log("auth jalan");
            const savedDataToken = localStorage.getItem("token");
            if (savedDataToken) {
                await axiosInstance
                    .get("/auth/checktoken", {
                        headers: { Authorization: `Bearer ${savedDataToken}` },
                    })
                    .then((res) => {
                        const parseDataUser = res.data;
                        dispatch({
                            type: user_types.USER_LOGIN,
                            payload: parseDataUser,
                        });
                    })
                    .catch((err) => {
                        console.log("error");
                        console.log(err);
                        if (err.code !== "ERR_NETWORK") {
                            localStorage.removeItem("token");
                        }
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            } else {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    return isLoading ? <div>Loading</div> : children;
};

export default AuthProvider;
