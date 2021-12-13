import axios from "axios";
export const axiosIntance = axios.create({
    baseURL: "https://mycollege-gram.herokuapp.com/api/",
});
