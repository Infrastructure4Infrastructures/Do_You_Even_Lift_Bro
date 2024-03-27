import api from "../../store/api";

const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/users",
      providesTags: ["Users"],
    }),
    getTask: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["Users"],
    }),
    createTask: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    editTask: builder.mutation({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PATCH",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
} = usersApi;
