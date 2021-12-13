import axios from "axios";
export const axiosIntance = axios.create({
    baseURL: "https://collegegram13.herokuapp.com/api",
});
