import axios from "axios";
export const axiosIntance = axios.create({
    baseURL: " https://mycollegegram.herokuapp.com/api",
});
