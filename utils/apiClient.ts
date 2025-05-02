import axios from "axios";

// Define the base URL once to avoid repetition
const baseURL = process.env.NEXT_PUBLIC_BE_URL;

// Default headers for different content types
const defaultHeaders = {
    json: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    form: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/json"
    }
};

// Authenticated Axios instance
const authRequest = axios.create({
    baseURL,
    timeout: 2000000,
});

authRequest.interceptors.request.use(async (request) => {
    const accessToken = "Bearer Access Token";
    if (accessToken) {
        request.headers.set("Authorization", `Bearer ${accessToken}`);
        request.headers.set("Secret-Key", `Bearer ${accessToken}`);
    }

    // Use default headers if no custom headers are provided
    if (!request.headers.get("Content-Type")) {
        const contentType = request.data instanceof FormData ? "form" : "json";
        Object.entries(defaultHeaders[contentType]).forEach(([key, value]) => {
            request.headers.set(key, value);
        });
    }

    return request;
});

// Unauthenticated Axios instance
const noAuthRequest = axios.create({
    baseURL,
    timeout: 200000,
});

noAuthRequest.interceptors.request.use((request) => {
    // Use default headers if no custom headers are provided
    if (!request.headers.get("Content-Type")) {
        const contentType = request.data instanceof FormData ? "form" : "json";
        Object.entries(defaultHeaders[contentType]).forEach(([key, value]) => {
            request.headers.set(key, value);
        });
    }
    return request;
});

export { noAuthRequest, authRequest };
