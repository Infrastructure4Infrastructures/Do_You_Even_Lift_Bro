import api from "../../store/api";

const journalEntryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getjournalEntry: builder.query({
      query: () => "/Journal",
      providesTags: ["Journals"],
    }),
    getjournalEntryById: builder.query({
      query: (id) => `/Journal/${id}`,
      providesTags: ["Journals"],
    }),
    createjournalEntry: builder.mutation({
      query: (journalEntry) => ({
        url: "/Journal",
        method: "POST",
        body: journal,
      }),
      invalidatesTags: ["Journals"],
    }),
    editjournalEntry: builder.mutation({
      query: (journalEntry) => ({
        url: `/journal/${journal.id}`,
        method: "PATCH",
        body: journalEntry,
      }),
      invalidatesTags: ["Journals"],
    }),
    deletejournalEntry: builder.mutation({
      query: (id) => ({
        url: `/journalEntry/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["journalEntry"],
    }),
  }),
});

export const {
  usejournalEntryQuery,
  usejournalEntryByIdQuery,
  usejournalEntryMutation,
  useEditjournalEntryMutation,
  useDeletejournalEntryMutation,
} = exercisesApi;
