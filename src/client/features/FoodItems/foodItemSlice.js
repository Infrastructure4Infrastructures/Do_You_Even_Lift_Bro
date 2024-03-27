import api from "../../store/api";

const foodItemsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFoodItems: builder.query({
      query: () => "/food_item",
      providesTags: ["Food_Item"],
    }),
    getFoodItem: builder.query({
      query: (id) => `/food_item/${id}`,
      providesTags: ["Food_Item"],
    }),
    createFoodItem: builder.mutation({
      query: (food_Item) => ({
        url: "/food_item",
        method: "POST",
        body: food_Item,
      }),
      invalidatesTags: ["Food_Item"],
    }),
    editFoodItem: builder.mutation({
      query: (food_Item) => ({
        url: `/food_item/${food_Item.id}`,
        method: "PATCH",
        body: food_Item,
      }),
      invalidatesTags: ["Food_Item"],
    }),
    deleteFoodItem: builder.mutation({
      query: (id) => ({
        url: `/food_item/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Food_Item"],
    }),
  }),
});

export const {
  useGetFoodItemsQuery,
  useGetFoodItemQuery,
  useCreateFoodItemMutation,
  useEditFoodItemMutation,
  useDeleteFoodItemMutation,
} = foodItemsApi;
