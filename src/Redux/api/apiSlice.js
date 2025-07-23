import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../config/config";
import { logoutUser, setToken } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: `${config.apiUrl}`,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = getState()?.auth?.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Check for a 403 response, meaning token may be expired
  if (result?.error?.status === 403) {
    try {
      // Request a new token from the refresh endpoint
      const refreshResult = await fetch(`${config.apiUrl}/auth/refresh-token`, {
        method: "POST",
        credentials: "include",
      });

      const data = await refreshResult.json();

      if (data?.data) {
        api.dispatch(setToken(data?.data));
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logoutUser());
        console.log(
          "Refresh token not found or invalid. Redirecting to login..."
        );
      }
    } catch (error) {
      console.error("Failed to refresh token:", error);
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithRefreshToken,
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChanges: true,
  tagTypes: ["user", "Main_Faq"],
  endpoints: () => ({}),
});
