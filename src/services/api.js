import axios from "axios";

export const api = axios.create({
    // baseURL:"https://foodexplorer-api-g42c.onrender.com"
    baseURL: "http://localhost:3344"
});
