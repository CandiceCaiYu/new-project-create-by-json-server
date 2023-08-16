import axios, { AxiosRequestConfig } from "axios";

export const axiosRequest = async (config: AxiosRequestConfig) => {
    try {
        return await axios(config)
    } catch (e) {
        return null
    }
}
