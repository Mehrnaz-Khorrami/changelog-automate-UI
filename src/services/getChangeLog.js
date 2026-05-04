import { buildQuery } from "../utils/buildQuery";
import { API_ENDPOINTS } from "../api/endpoints";
import { API_BASE_URL } from "../config/api";

export const getChangeLog = async ({ date, language }) => {
  const url =
    API_BASE_URL + API_ENDPOINTS.CHANGELOG + buildQuery({ date, lang: language });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Request Failed");
  }

  const contentType = response.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Response is not JSON");
  }

  const data = await response.json();
  return data;
};
