import { create } from 'zustand'
// import { persist } from 'zustand/middleware'

const useStore = create((set) => ({
  snippets: [],

  addSnippet: (snippet) =>
    set((state) => ({
      snippets: [...state.snippets, snippet]
    })),

  deleteSnippet: (id) =>
    set((state) => ({
      snippets: state.snippets.filter((s) => s.id !== id)
    })),

  updateSnippet: (updated) =>
    set((state) => ({
      snippets: state.snippets.map((s) => (s.id === updated.id ? updated : s))
    }))
}))

export default useStore
