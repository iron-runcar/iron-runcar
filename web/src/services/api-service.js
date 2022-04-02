import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true,
});

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            localStorage.clear();
            window.location.replace("/login");
        }

        return Promise.reject(error);
    }
);

export function getCars() {
    return http.get("/api/cars");
}

export function getCarDetail(id) {
    return http.get(`/api/cars/${id}`);
} 

export function register(user) {
    return http.post("/api/register", user);
  }

export function login(user) {
    return http.post("/api/login", user);
}

export function profile(user) {
    return http.get("/api/profile", user);
}

export function contact() {
    return http.get("/contact");
}

export function faqs() {
    return http.get("/faqs");
}

export function booking(id, data) {
    return http.post(`/api/cars/${id}/bookings`, data);
}

export function getBooking() {
    return http.get("/api/bookings");
}