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
      query: ({ userId, exerciseId, mySets, myReps }) => ({
        url: `/user_exercises/${userId}/${exerciseId}`,
        method: "POST",
        body: { mySets, myReps },
      }),
      invalidatesTags: ["User_exercises"],
    }),
    editUsersExercise: builder.mutation({
      query: ({ userId, exerciseId, user_exercises }) => ({
        url: `/user_exercises/${userId}/${exerciseId}`,
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
