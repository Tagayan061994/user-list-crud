import { USER_LIST_URL } from "./conf";
import ApiService from "./api";

export const getUserDataAPI = () => ApiService.GET(USER_LIST_URL);
