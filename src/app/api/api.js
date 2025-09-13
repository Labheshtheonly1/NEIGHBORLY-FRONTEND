import axios from "axios";

// Prefer an explicit API base URL env, fallback to common local dev default.
const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.NEXT_PUBLIC_BASE_URL ||
  "http://localhost:5000/api";

const api = axios.create({
  baseURL: BASE_URL,
  // Required so browser includes HttpOnly cookies (e.g., access_token)
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

export default api;
