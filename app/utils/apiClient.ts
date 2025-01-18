import axios from "axios";

// Define the base URL once to avoid repetition
const baseURL = process.env.NEXT_PUBLIC_BE_URL;

// Authenticated Axios instance
const authRequest = axios.create({
    baseURL,
    timeout: 2000000,
});

authRequest.interceptors.request.use(async (request) => {
    const accessToken = "Bearer Access Token";
    if (accessToken) {
        request.headers["Authorization"] = `Bearer ${accessToken}`;
        request.headers["Secret-Key"] = `Bearer ${accessToken}`;
    }

    // Set headers based on content type
    request.headers["Content-Type"] = "application/json";
    request.headers["Accept"] = "application/json";

    return request;
});

// authFormRequest
const authFormRequest = axios.create({
    baseURL,
    timeout: 2000000,
});

authFormRequest.interceptors.request.use(async (request) => {
    const accessToken = "Bearer Access Token";
    if (accessToken) {
        request.headers["Authorization"] = `Bearer ${accessToken}`;
        request.headers["Secret-Key"] = `Bearer ${accessToken}`;
    }

    // Set headers based on content type
    request.headers["Content-Type"] = "multipart/form-data";
    request.headers["Accept"] = "application/json";

    return request;
});

// Unauthenticated Axios instance
const noAuthRequest = axios.create({
    baseURL,
    timeout: 200000,
});

noAuthRequest.interceptors.request.use((request) => {
    request.headers["Accept"] = "application/json";
    request.headers["Content-Type"] = "application/json";
    return request;
});

const noAuthFormRequest = axios.create({
    baseURL,
    timeout: 200000,
});

noAuthFormRequest.interceptors.request.use((request) => {
    request.headers["Accept"] = "application/json";
    request.headers["Content-Type"] = "multipart/form-data";
    return request;
});

export { noAuthRequest, noAuthFormRequest, authRequest, authFormRequest };
