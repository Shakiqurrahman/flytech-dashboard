import { apiSlice } from "../../api/apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => `/users/me`,
      providesTags: ["user"],
      transformResponse: (response) => response?.data,
    }),

    // updateUserProfile: builder.mutation({
    //   query: ({ userId, ...data }) => ({
    //     url: `/users/${userId}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["UserProfile"],
    // }),
  }),
});

export const { useGetUserProfileQuery } = userApi;
