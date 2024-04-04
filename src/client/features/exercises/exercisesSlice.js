import api from "../../store/api";

const exercisesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getExercises: builder.query({
      query: () => "/exercises",
      // transformResponse: (response) => response.exercises,
      providesTags: ["Exercises"],
    }),
    getExercisesById: builder.query({
      query: (id) => `/exercises/${id}`,
      // transformResponse: (response) => response.exercises,
      providesTags: ["Exercises"],
    }),
    createExercises: builder.mutation({
      query: (exercises) => ({
        url: "/exercises",
        method: "POST",
        body: exercises,
      }),
      invalidatesTags: ["Exercises"],
    }),
    editExercises: builder.mutation({
      query: (exercises) => ({
        url: `/exercises/${exercises.id}`,
        method: "PATCH",
        body: exercises,
      }),
      invalidatesTags: ["Exercises"],
    }),
    deleteExercisesById: builder.mutation({
      query: (id, exerciseId) => ({
        url: `/workout_exercises/${id}/${exerciseId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Exercises"],
    }),
  }),
});

export const {
  useGetExercisesQuery,
  useGetExercisesByIdQuery,
  useCreateExercisesMutation,
  useEditExercisesMutation,
  useDeleteExercisesByIdMutation,
} = exercisesApi;
