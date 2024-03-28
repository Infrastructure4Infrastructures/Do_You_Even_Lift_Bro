import api from "../../store/api";

const mealsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMeals: builder.query({
      query: () => "/meal",
      providesTags: ["meal"],
    }),
    getMeal: builder.query({
      query: (id) => `/meal/${id}`,
      providesTags: ["meal"],
    }),
    createMeal: builder.mutation({
      query: (meal) => ({
        url: "/meal",
        method: "POST",
        body: meal,
      }),
      invalidatesTags: ["Meal"],
    }),
    editMeal: builder.mutation({
      query: (meal) => ({
        url: `/meal/${food_Item.id}`,
        method: "PATCH",
        body: meal,
      }),
      invalidatesTags: ["Meal"],
    }),
    deleteMeal: builder.mutation({
      query: (id) => ({
        url: `/meal/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Meal"],
    }),
  }),
});

export const {
  useGetMealsQuery,
  useGetMealQuery,
  useCreateMealMutation,
  useEditMealMutation,
  useDeleteMealMutation,
} = mealsApi;
