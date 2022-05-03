import axios from "axios";

const API = axios.create({baseURL: "http://localhost:3000"})

const getUser = (userId) => {
  return API.get(`/user/${userId}`);
};

const getUserActivity = (userId) => {
  return API.get(`/user/${userId}/activity`);
};

const getUserAverageSessions = (userId) => {
  return API.get(`/user/${userId}/average-sessions`);
};

const getUserPerformance = (userId) => {
  return API.get(`/user/${userId}/performance`);
};

const backend = {
  getUser,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};

export default backend;
