import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../../config/config";

export const aboutApiSlice = createApi({
    reducerPath: "aboutApi",
    baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
    endpoints: (builder) => ({
        getAboutContent: builder.query({
            query: () => "/about/contents",
            transformResponse: (response) => response.data, // only return the data array
            providesTags: ["About"],
        }),
    }),
});

export const { useGetAboutContentQuery } = aboutApiSlice;
