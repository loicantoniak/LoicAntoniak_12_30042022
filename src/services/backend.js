import axios from "axios";

const PROD = "prod";
const DEV = "dev";
const environnement = DEV;

const URL =
  environnement === PROD ? "http://localhost:3000" : "http://localhost:3001";

const API = axios.create({ baseURL: URL });

const getUser = (userId) => {
  if (environnement === PROD) {
    return API.get(`/user/${userId}`);
  }
  return API.get(`/mocks/${userId}.json`);
};

const getUserActivity = (userId) => {
  if (environnement === PROD) {
    return API.get(`/user/${userId}/activity`);
  }

  return API.get(`/mocks/${userId}/activity.json`);
};

const getUserAverageSessions = (userId) => {
  if (environnement === PROD) {
    return API.get(`/user/${userId}/average-sessions`);
  }

  return API.get(`/mocks/${userId}/average-session.json`);
};

const getUserPerformance = (userId) => {
  if (environnement === PROD) {
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
