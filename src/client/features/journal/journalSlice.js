import { journal } from "../../../server/prisma";
import api from "../../store/api";

const journalApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getJournal: builder.query({
      query: () => "/journal",
      providesTags: ["journal"],
    }),
    getJournalById: builder.query({
      query: (id) => `/journal/${id}`,
      providesTags: ["journal"],
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
  useGetJournalEntryByIdQuery,
  useCreateJournalEntryMutation,
  useEditJournalEntryMutation,
  useDeleteJournalEntryMutation,
} = JournalApi;
