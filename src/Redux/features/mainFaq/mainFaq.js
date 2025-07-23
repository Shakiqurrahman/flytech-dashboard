import { apiSlice } from "../../api/apiSlice";

export const mainFaqApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMainFaqs: builder.query({
      query: () => "/main-faq",
      transformResponse: (response) => response.data, // only return the data array
      providesTags: ["Main_Faq"],
    }),
    createOrUpdateFaqs: builder.mutation({
      query: (faqData) => ({
        url: `/main-faq`,
        method: "POST",
        body: { faq: faqData },
      }),
      invalidatesTags: ["Main_Faq"],
    }),
  }),
});

export const { useCreateOrUpdateFaqsMutation, useGetMainFaqsQuery } =
  mainFaqApiSlice;
