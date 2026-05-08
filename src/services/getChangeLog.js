import { buildQuery } from "../utils/buildQuery";
import { API_ENDPOINTS } from "../api/endpoints";
import { API_BASE_URL } from "../config/api";
import toast from "react-hot-toast";

export const getChangeLog = async ({ date, language }) => {
  const url =
    API_BASE_URL + API_ENDPOINTS.CHANGELOG + buildQuery({ date, lang: language });

  try {
    const response = await fetch(url);
    const contentType = response.headers.get("content-type");
    const isJsonResponse = contentType?.includes("application/json");
    const data = isJsonResponse ? await response.json() : null;

    if (!response.ok) {
      throw new Error(
        data?.message ||
        data?.error ||
        `Request failed with status ${response.status}`
      );
    }

    if (!isJsonResponse) {
      throw new Error("Server response was not valid JSON.");
    }

    return data;
  } catch (error) {
    const message =
      error instanceof TypeError
        ? "Network error. Please check your internet connection."
        : error?.message || "Request failed.";

    toast.error(message);
    throw error;
  }
};
