import axios from "axios";

export const apiKey = "a7cfde0e";

export const API = axios.create({
  baseURL: "https://omdbapi.com/?t=",
});
