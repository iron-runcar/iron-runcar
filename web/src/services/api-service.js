import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:3001",
    withCredentials: true,
});

export function getCars() {
    return http.get("/api/cars");
}

export function getCarDetail(id) {
    return http.get(`/api/cars/${id}`);
} 