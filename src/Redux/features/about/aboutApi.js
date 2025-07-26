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
        createAboutContent: builder.mutation({
            query: ({ aboutData, missionThumbnail, visionThumbnail }) => {
                const formData = new FormData();
                console.log("recieved data", aboutData);

                formData.append("data", JSON.stringify(aboutData));

                if (missionThumbnail) {
                    // console.log("from api 🚀", missionThumbnail);
                    formData.append("missionThumbnail", missionThumbnail);
                }

                if (visionThumbnail) {
                    // console.log("from api", visionThumbnail);
                    formData.append("visionThumbnail", visionThumbnail);
                }

                return {
                    url: "/about/contents",
                    method: "POST",
                    body: formData,
                };
            },
            invalidatesTags: ["About"],
        }),
    }),
});

export const { useGetAboutContentQuery, useCreateAboutContentMutation } =
    aboutApiSlice;
