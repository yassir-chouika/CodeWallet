import { create } from 'zustand'
import { loadSnippets, saveSnippets } from '../utils/storage'

const extractUniqueTags = (snippets) => {
  const tagSet = new Set()
  snippets.forEach((snippet) => {
    snippet.tags?.forEach((tag) => tagSet.add(tag))
  })
  return Array.from(tagSet)
}

const useStore = create((set, get) => ({
  snippets: [],
  tags: [],

  searchTerm: '',

  setSearchTerm: (term) => set({ searchTerm: term }),

  getFilteredSnippets: () => {
    const term = get().searchTerm.toLowerCase()
    return get().snippets.filter((snippet) => snippet.title.toLowerCase().includes(term))
  },

  // Initialize from storage
  initSnippets: async () => {
    const data = await loadSnippets()
    const tags = extractUniqueTags(data)
    set({ snippets: data, tags })
  },

  // Add a new snippet
  addSnippet: (snippet) => {
    const updated = [...get().snippets, snippet]
    const tags = extractUniqueTags(updated)
    set({ snippets: updated, tags })
    saveSnippets(updated)
  },

  // Update a snippet
  updateSnippet: (updatedSnippet) => {
    const updated = get().snippets.map((s) => (s.id === updatedSnippet.id ? updatedSnippet : s))
    const tags = extractUniqueTags(updated)
    set({ snippets: updated, tags })
    saveSnippets(updated)
  },

  // Delete a snippet
  deleteSnippet: (id) => {
    const updated = get().snippets.filter((s) => s.id !== id)
    const tags = extractUniqueTags(updated)
    set({ snippets: updated, tags })
    saveSnippets(updated)
  },

  // Tag-specific methods
  addTag: (newTag) => {
    const trimmed = newTag.trim()
    if (!get().tags.includes(trimmed)) {
      const updatedTags = [...get().tags, trimmed]
      set({ tags: updatedTags })
    }
  },

  renameTag: (oldTag, newTag) => {
    const trimmed = newTag.trim()
    const updatedSnippets = get().snippets.map((s) => {
      if (s.tags?.includes(oldTag)) {
        const newTags = s.tags.map((tag) => (tag === oldTag ? trimmed : tag))
        return { ...s, tags: newTags }
      }
      return s
    })
    const newTags = extractUniqueTags(updatedSnippets)
    set({ snippets: updatedSnippets, tags: newTags })
    saveSnippets(updatedSnippets)
  },

  deleteTag: (tagToRemove) => {
    const updatedSnippets = get().snippets.map((s) => {
      if (s.tags?.includes(tagToRemove)) {
        const newTags = s.tags.filter((t) => t !== tagToRemove)
        return { ...s, tags: newTags }
      }
      return s
    })
    const newTags = extractUniqueTags(updatedSnippets)
    set({ snippets: updatedSnippets, tags: newTags })
    saveSnippets(updatedSnippets)
  }
}))

export default useStore
