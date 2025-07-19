import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../../config/config";

export const teamApiSlice = createApi({
    reducerPath: "teamApi",
    baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
    endpoints: (builder) => ({
        getTeamMembers: builder.query({
            query: () => "/about/team-members",
            transformResponse: (response) => response.data, // only return the data array
        }),
    }),
});

export const { useGetTeamMembersQuery } = teamApiSlice;
