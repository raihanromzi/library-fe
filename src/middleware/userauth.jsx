/* eslint-disable prettier/prettier */
import { axiosInstance } from "../../config/config";
import user_types from "../auth/types";

export function userLogin(values) {
    return async function (dispatch) {
        try {
            console.log("userauth jalan");
            const res = await axiosInstance.post("/auth/v2", values);
            const userData = res.data;
            console.log("res");
            console.log(res);
            if (userData["admin"] === true) {
                dispatch({
                    type: user_types.ADMIN_LOGIN,
                    payload: userData["user"],
                });
                localStorage.setItem("token", userData["token"]);
                return { status: true, data: userData["user"] };
            } else if (userData["admin"] === false) {
                dispatch({
                    type: user_types.USER_LOGIN,
                    payload: userData["user"],
                });
                localStorage.setItem("token", userData["token"]);
                return { status: true, data: userData["user"] };
            }
            return { status: false, data: {} };
        } catch (err) {
            console.log(err);
            return { status: false, data: {} };
        }
    };
}
