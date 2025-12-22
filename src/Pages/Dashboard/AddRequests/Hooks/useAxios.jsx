import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://blood-donation-site-server-bh6wfl7dc.vercel.app/'
})

const useAxios = () => {
    return axiosInstance
}

export default useAxios;