import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000" });

const environnement = "dev";

const getUser = (userId) => {
  if (environnement === "production") {
    return API.get(`/user/${userId}`);
  }
  return API.get(`/mocks/${userId}.json`);
};

const getUserActivity = (userId) => {
  if (environnement === "production") {
    return API.get(`/user/${userId}/activity`);
  }

  return API.get(`/mocks/${userId}/activity.json`);
};

const getUserAverageSessions = (userId) => {
  if (environnement === "production") {
    return API.get(`/user/${userId}/average-sessions`);
  }

  return API.get(`/mocks/${userId}/average-session.json`);
};

const getUserPerformance = (userId) => {
  if (environnement === "production") {
    return API.get(`/user/${userId}/performance`);
  }

  return API.get(`/mocks/${userId}/performance.json`);
};

const backend = {
  getUser,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};

export default backend;
