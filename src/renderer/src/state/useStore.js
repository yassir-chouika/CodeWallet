import { create } from 'zustand'

export const useStore = create((set) => ({
  snippets: [],
  tags: [],
  addSnippet: (snippet) => set((state) => ({ snippets: [...state.snippets, snippet] })),
  updateSnippet: (id, updated) =>
    set((state) => ({
      snippets: state.snippets.map((s) => (s.id === id ? updated : s))
    })),
  deleteSnippet: (id) =>
    set((state) => ({
      snippets: state.snippets.filter((s) => s.id !== id)
    })),
  addTag: (tag) => set((state) => ({ tags: [...state.tags, tag] }))
}))
