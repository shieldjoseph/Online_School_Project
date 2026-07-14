// frontend/src/api/courses.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export async function getCourses() {
  const { data } = await api.get("/api/courses");
  return data; // [{ id, name, description }, ...]
}