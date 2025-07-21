import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../../config/config";

export const teamApiSlice = createApi({
    reducerPath: "teamApi",
    baseQuery: fetchBaseQuery({ baseUrl: config.apiUrl }),
    endpoints: (builder) => ({
        getTeamMembers: builder.query({
            query: () => "/about/team-members/admin",
            transformResponse: (response) => response.data, // only return the data array
            providesTags: ["Team"],
        }),
        createTeamMember: builder.mutation({
            query: ({ memberData, avatarFile }) => {
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
        deleteTeamMember: builder.mutation({
            query: (id) => ({
                url: `/about/team-members/${id}/status`,
                method: "PATCH",
                body: { status: "DELETED" },
            }),
            invalidatesTags: ["Team"],
        }),
        updateTeamMemter: builder.mutation({
            query: ({ memberData, avatarFile, id }) => {
                // const updatedData = !avatarFile
                //     ? { ...memberData, removeAvatar: true }
                //     : memberData;
                const formData = new FormData();
                formData.append("data", JSON.stringify(memberData));
                if (avatarFile) {
                    formData.append("avatar", avatarFile);
                }

                return {
                    url: `/about/team-members/${id}`,
                    method: "PUT",
                    body: formData,
                };
            },
            invalidatesTags: ["Team"],
        }),
    }),
});

export const {
    useGetTeamMembersQuery,
    useCreateTeamMemberMutation,
    useDeleteTeamMemberMutation,
    useUpdateTeamMemterMutation,
} = teamApiSlice;
