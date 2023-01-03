import axios from "axios";

export const api = axios.create({
    // baseURL: "http://localhost:3344"
    baseURL:"https://foodexplorer-api-g42c.onrender.com"
});
