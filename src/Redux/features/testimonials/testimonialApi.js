import { apiSlice } from "../../api/apiSlice";

export const testimonialApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTestimonial: builder.query({
            query: () => "/testimonials",
            transformErrorResponse: (response) => response.data,
            providesTags: ["Testimonial"],
        }),
        createTestimonial: builder.mutation({
            query: ({ data, avatarFile }) => {
                const formData = new FormData();
                formData.append("data", JSON.stringify(data));
                formData.append("avatar", avatarFile);

                return {
                    url: "/testimonials",
                    method: "POST",
                    body: formData,
                };
            },
            invalidatesTags: ["Testimonial"],
        }),
        updateTestimonial: builder.mutation({
            query: ({ data, avatarFile, id }) => {
                const formData = new FormData();
                formData.append("data", JSON.stringify(data));
                if (avatarFile) {
                    formData.append("avatar", avatarFile);
                }

                return {
                    url: `/testimonials/${id}`,
                    method: "PUT",
                    body: formData,
                };
            },
            invalidatesTags: ["Testimonial"],
        }),
        deleteTestimonial: builder.mutation({
            query: (id) => ({
                url: `/testimonials/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Testimonial"],
        }),
    }),
});

export const {
    useGetTestimonialQuery,
    useCreateTestimonialMutation,
    useUpdateTestimonialMutation,
    useDeleteTestimonialMutation,
} = testimonialApiSlice;
