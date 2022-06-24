export const USER_LIST_URL = "https://api.github.com/user";

export const COMMON_HEADERS = {
  Accept: "application/json",
  "Content-Type": "application/json",
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
