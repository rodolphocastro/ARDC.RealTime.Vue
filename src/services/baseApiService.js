const axios = require("axios");
const apiBaseUrl = process.env.VUE_APP_API;

const axiosClient = axios.create({
    baseURL: apiBaseUrl
});

export default axiosClient;