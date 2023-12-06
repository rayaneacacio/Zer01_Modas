import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api-zer01modas.onrender.com'
});