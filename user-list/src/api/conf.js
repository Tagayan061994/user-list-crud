export const USER_LIST_URL = "https://api.github.com/users";
export const COMMON_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
  Authorization: "TOKEN ", //write your GitHub npm token to get user data
};

export const HEADERS = {
  GET: COMMON_HEADERS,
  PATCH: COMMON_HEADERS,
  PUT: COMMON_HEADERS,
  POST: {
    "Content-Type": "application/json",
  },
  DELETE: {},
};

export const METHODS = ["GET", "PUT", "POST", "DELETE", "PATCH"];
