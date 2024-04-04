import api from "../../store/api";

const journalApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getJournal: builder.query({
      query: () => "/journal",
      providesTags: ["Journal"],
    }),
    getJournalById: builder.query({
      query: (id) => `/journal/${id}`,
      providesTags: ["Journal"],
    }),
    createJournal: builder.mutation({
      query: (journal) => ({
        url: "/journal",
        method: "POST",
        body: { journal },
      }),
      invalidatesTags: ["Journal"],
    }),
    editJournal: builder.mutation({
      query: (id) => ({
        url: `/journal/${id}`,
        method: "PATCH",
        body: journal,
      }),
      invalidatesTags: ["Journal"],
    }),
    deleteJournal: builder.mutation({
      query: (id) => ({
        url: `/journal/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Journal"],
    }),
  }),
});

export const {
  useGetJournalQuery,
  useGetJournalByIdQuery,
  useCreateJournalMutation,
  useEditJournalMutation,
  useDeleteJournalMutation,
} = journalApi;
