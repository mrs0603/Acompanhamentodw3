import axios from "axios";

const AxiosInstance = axios.create({
    baseURL:"http://localhost:38000"
})

export default AxiosInstance;