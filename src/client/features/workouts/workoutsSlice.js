import api from "../../store/api";

const workoutsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWorkouts: builder.query({
      query: () => "/workouts",
      providesTags: ["Workouts"],
    }),
    getWorkoutsById: builder.query({
      query: (id) => `/workouts/${id}`,
      providesTags: ["Workouts"],
    }),
    createWorkouts: builder.mutation({
      query: (workouts) => ({
        url: "/workouts",
        method: "POST",
        body: workouts,
      }),
      invalidatesTags: ["Workouts"],
    }),
    editWorkouts: builder.mutation({
      query: (workouts) => ({
        url: `/workouts/${workouts.id}`,
        method: "PATCH",
        body: workouts,
      }),
      invalidatesTags: ["Workouts"],
    }),
    deleteWorkouts: builder.mutation({
      query: (id) => ({
        url: `/workouts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Workouts"],
    }),
  }),
});

export const {
  useGetWorkoutsQuery,
  useGetWorkoutsByIdQuery,
  useCreateWorkoutsMutation,
  useEditWorkoutsMutation,
  useDeleteWorkoutsMutation,
} = workoutsApi;
