import axios from "axios";
import { BACKEND_BASE_URL } from "../constants";

// Create an Axios instance with default options
const axiosInstance = axios.create({
  baseURL: BACKEND_BASE_URL,
  withCredentials: false,
  headers: {
    "Cache-Control": "no-cache",
    "Content-Type": "application/x-www-form-urlencoded",
    'Access-Control-Allow-Methods': 'GET,POST',
    'Access-Control-Allow-Origin': '',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': '',
    'Access-Control-Expose-Headers': '*',
  },
});

export default axiosInstance;