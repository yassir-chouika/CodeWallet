import { create } from 'zustand'
import { loadSnippets, saveSnippets } from '../utils/storage'

const useStore = create((set, get) => ({
  snippets: [],
  searchTerm: '',

  initSnippets: async () => {
    const data = await loadSnippets()
    set({ snippets: data })
  },

  setSearchTerm: (term) => {
    set({ searchTerm: term })
  },

  getFilteredSnippets: () => {
    const { snippets, searchTerm } = get()
    return snippets.filter((s) =>
      s.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
  },

  addSnippet: (snippet) => {
    const updated = [...get().snippets, snippet]
    set({ snippets: updated })
    saveSnippets(updated)
  },

  deleteSnippet: (id) => {
    const updated = get().snippets.filter((s) => s.id !== id)
    set({ snippets: updated })
    saveSnippets(updated)
  },

  updateSnippet: (updatedSnippet) => {
    const updated = get().snippets.map((s) => (s.id === updatedSnippet.id ? updatedSnippet : s))
    set({ snippets: updated })
    saveSnippets(updated)
  }
}))

export default useStore
