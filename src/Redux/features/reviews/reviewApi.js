import { apiSlice } from "../../api/apiSlice";

export const reviewApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getReview: builder.query({
            query: () => "/reviews",
            transformErrorResponse: (response) => response.data,
            providesTags: ["Reviews"],
        }),
        updateReview: builder.mutation({
            query: ({ data, avatarFile, id }) => {
                const formData = new FormData();
                formData.append("data", JSON.stringify(data));
                if (avatarFile) {
                    formData.append("avatar", avatarFile);
                }

                return {
                    url: `/reviews/${id}`,
                    method: "PUT",
                    body: formData,
                };
            },
            invalidatesTags: ["Reviews"],
        }),
        deleteReview: builder.mutation({
            query: (id) => ({
                url: `/reviews/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Reviews"],
        }),
        createReview: builder.mutation({
            query: ({ data, avatarFile }) => {
                const formData = new FormData();
                formData.append("data", JSON.stringify(data));
                formData.append("avatar", avatarFile);

                return {
                    url: "/reviews",
                    method: "POST",
                    body: formData,
                };
            },
            invalidatesTags: ["Reviews"],
        }),
    }),
});

export const {
    useGetReviewQuery,
    useUpdateReviewMutation,
    useCreateReviewMutation,
    useDeleteReviewMutation,
} = reviewApiSlice;
