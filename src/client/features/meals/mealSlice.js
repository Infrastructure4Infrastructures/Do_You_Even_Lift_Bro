import api from "../../store/api";

const mealsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getMeals: builder.query({
      query: () => "/meal",
      providesTags: ["meal"],
    }),
    getMealById: builder.query({
      query: (id) => `/meal/${id}`,
      providesTags: ["meal"],
    }),
    createMeal: builder.mutation({
      query: (meal) => ({
        url: "/meal",
        method: "POST",
        body: { meal },
      }),
      invalidatesTags: ["Meal"],
    }),
    editMeal: builder.mutation({
      query: (id) => ({
        url: `/meal/${id}`,
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
    // addToJournal: builder.mutation({
    //   query: (journal) => ({
    //     url: "/journal",
    //     method: "POST",
    //     body: journal,
    //   }),
    // const JournalSlice = createSlice({
    //   name: "Journal",
    //   initialState,
    //   reducers: {
    //     /** Adds a number to the bank */
    //     addToJournal: (state, { payload }) => {
    //       state.bank.push(payload);
    //     }}
  }),
});

export const {
  useGetMealsQuery,
  useGetMealByIdQuery,
  useCreateMealMutation,
  useEditMealMutation,
  useDeleteMealMutation,
} = mealsApi;
