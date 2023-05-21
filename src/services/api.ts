import axios  from "axios";

const api = axios.create({
    baseURL: "https://json-server-hii0.onrender.com/",
});

export default api;
