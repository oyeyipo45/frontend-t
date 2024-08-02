import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IPost, PostResponse } from "../interfaces";

export const { VITE_BASE_API_URL } = import.meta.env;

// Define a service using a base URL and expected endpoints
export const postAPI = createApi({
  reducerPath: "posts",
  tagTypes: ["Post"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9090/api/v1" }),
  endpoints: (builder) => ({
    createPost: builder.mutation<PostResponse, Partial<IPost>>({
      query: (body) => ({
        url: "/posts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Post"],
    }),
    getPosts: builder.query<PostResponse, string>({
      query: (filter) => ({
        url: "/posts",
        params: {
          filter,
        },
      }),
      providesTags: (result, error, arg) => (result ? [...result.data.map(({ _id }) => ({ type: "Post", _id })), "Post"] : ["Post"]),
    }),
    updatePost: builder.mutation<PostResponse, IPost>({
      query: ({ ...body }) => ({
        url: `/posts/${body._id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Post", id: arg._id }],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreatePostMutation, useGetPostsQuery, useUpdatePostMutation } = postAPI;
