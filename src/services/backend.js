import axios from "axios";

// const PROD = "PROD";
const DEV = "DEV";
const MOCK = "MOCK";

const URL = {
  PROD: "https://loicantoniak.github.io/LoicAntoniak_12_30042022/mocks/",
  DEV: "http://localhost:3000/user/",
  MOCK: "http://localhost:3000/mocks/",
};

const env = MOCK;
const string = env === DEV ? "" : ".json";

const API = axios.create({ baseURL: URL[env] });

const getUser = (userId) => {
  return API.get(userId + string);
};

const getUserActivity = (userId) => {
  return API.get(userId + "/activity" + string);
};

const getUserAverageSessions = (userId) => {
  return API.get(userId + "/average-sessions" + string);
};

const getUserPerformance = (userId) => {
  return API.get(userId + "/performance" + string);
};

const backend = {
  getUser,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};

export default backend;
