import api from "../../store/api";

const journalEntryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getJournalEntry: builder.query({
      query: () => "/journal_entry",
      providesTags: ["Journals"],
    }),
    getJournalEntryById: builder.query({
      query: (id) => `/journal_entry/${id}`,
      providesTags: ["Journals"],
    }),
    createJournalEntry: builder.mutation({
      query: (journalEntry) => ({
        url: "/journal_entry",
        method: "POST",
        body: journalEntry,
      }),
      invalidatesTags: ["Journal"],
    }),
    editJournalEntry: builder.mutation({
      query: (journalEntry) => ({
        url: `/journal_entry/${journal_entry.id}`,
        method: "PATCH",
        body: journalEntry,
      }),
      invalidatesTags: ["Journal"],
    }),
    deleteJournalEntry: builder.mutation({
      query: (id) => ({
        url: `/journal_entry/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Journal"],
    }),
  }),
});

export const {
  useGetJournalEntryQuery,
  useGetJournalEntryByIdQuery,
  useEditJournalEntryMutation,
  useCreateJournalEntryMutation,
  useDeleteJournalEntryMutation,
} = journalEntryApi;
