import Axios from "axios";
import Cookies from "js-cookie"; 

// const baseURL = "http://localhost:3004/";
const baseURL = 'https://chat-web-app-1358486b4ea0.herokuapp.com/';

export const HeroServices = Axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

HeroServices.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? Cookies.get("Authorization") : null; 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => Promise.reject(error));

