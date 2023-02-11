/* eslint-disable prettier/prettier */
import axios from "axios";

export const API_URL = "http://localhost:2000";
export const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 5000,
});
