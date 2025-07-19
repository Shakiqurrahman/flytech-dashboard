import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../../config/config";

export const teamApiSlice = createApi({
    reducerPath: "teamApi",
    baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
    endpoints: (builder) => ({
        getTeamMembers: builder.query({
            query: () => "/about/team-members",
            transformResponse: (response) => response.data, // only return the data array
            providesTags: ["Team"],
        }),
        createTeamMember: builder.mutation({
            query: ({ memberData, avatarFile }) => {
                console.log("kene par na --> ", avatarFile);
                const formData = new FormData();
                formData.append("data", JSON.stringify(memberData));
                if (avatarFile) {
                    formData.append("avatar", avatarFile);
                }

                return {
                    url: "/about/team-members",
                    method: "POST",
                    body: formData,
                };
            },
            invalidatesTags: ["Team"],
        }),
    }),
});

export const { useGetTeamMembersQuery, useCreateTeamMemberMutation } =
    teamApiSlice;
