import axios from "axios";

const axiosinstance = axios.create({
  baseURL: process.env.VITE_API_URL,
});

export default axiosinstance;
