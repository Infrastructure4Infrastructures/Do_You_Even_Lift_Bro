import api from "../../store/api";

const user_exercisesAPI = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsersExercise: builder.query({
      query: () => "/user_exercises",
      providesTags: ["User_exercises"],
    }),
    getUsersExerciseById: builder.query({
      query: (id) => `/user_exercises/${id}`,
      providesTags: ["User_exercises"],
    }),
    createUsersExercise: builder.mutation({
      query: (user_exercises, userId) => ({
        url: `/user_exercises/${userId}`,
        method: "POST",
        body: { user_exercises },
      }),
      invalidatesTags: ["User_exercises"],
    }),
    editUsersExercise: builder.mutation({
      query: (user_exercises, exerciseId) => ({
        url: `/user_exercises/${exerciseId}`,
        method: "PATCH",
        body: user_exercises,
      }),
      invalidatesTags: ["User_exercises"],
    }),
    deleteUsersExercise: builder.mutation({
      query: (exerciseId) => ({
        url: `/user_exercises/${exerciseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User_exercises"],
    }),
  }),
});

export const {
  useGetUsersExerciseQuery,
  useGetUsersExerciseByIdQuery,
  useCreateUsersExerciseMutation,
  useEditUsersExerciseMutation,
  useDeleteUsersExerciseMutation,
} = user_exercisesAPI;
