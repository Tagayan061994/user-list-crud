import { USER_LIST_URL } from "./conf";
import ApiService from "./api";

export const getUserDataAPI = () => ApiService.GET(USER_LIST_URL);

export const deleteUserDataAPI = (id: number) =>
  ApiService.DELETE(`${USER_LIST_URL}/${id}`);

export const getUserDataByIdAPI = (id: number) =>
  ApiService.GET(`${USER_LIST_URL}/${id}`);
