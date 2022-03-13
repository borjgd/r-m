import axiosClient from "../apiClient.js";

export function getRM() {
  return axiosClient.get("/rm");
}
