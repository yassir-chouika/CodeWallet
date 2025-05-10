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
    }))
}))

export default useStore
