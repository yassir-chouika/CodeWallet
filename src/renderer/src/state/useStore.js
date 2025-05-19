// Import the Zustand state management library and storage utility functions
import { create } from 'zustand'
import { loadSnippets, saveSnippets } from '../utils/storage'

/**
 * Helper function to extract unique tags from an array of snippets
 * @param {Array} snippets - Array of snippet objects
 * @returns {Array} - Array of unique tags
 */
const extractUniqueTags = (snippets) => {
  // Use a Set to automatically handle uniqueness
  const tagSet = new Set()
  // Iterate through each snippet and its tags
  snippets.forEach((snippet) => {
    snippet.tags?.forEach((tag) => tagSet.add(tag))
  })
  // Convert Set back to array before returning
  return Array.from(tagSet)
}

// Create a Zustand store for managing snippets and tags
const useStore = create((set, get) => ({
  // State variables
  snippets: [], // Array to store all code snippets
  tags: [], // Array to store all unique tags
  searchTerm: '', // Current search term for filtering snippets

  // Action to update the search term
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Computed property to get filtered snippets based on search term
  getFilteredSnippets: () => {
    const term = get().searchTerm.toLowerCase()
    // Filter snippets where title includes the search term (case insensitive)
    return get().snippets.filter((snippet) => snippet.title.toLowerCase().includes(term))
  },

  // Initialize the store by loading snippets from storage
  initSnippets: async () => {
    const data = await loadSnippets()
    const tags = extractUniqueTags(data)
    // Update state with loaded snippets and extracted tags
    set({ snippets: data, tags })
  },

  // Add a new snippet to the store
  addSnippet: (snippet) => {
    // Add new snippet to beginning of array (newest first)
    const updated = [snippet, ...get().snippets]
    const tags = extractUniqueTags(updated)
    // Update state and persist to storage
    set({ snippets: updated, tags })
    saveSnippets(updated)
  },

  // Update an existing snippet
  updateSnippet: (updatedSnippet) => {
    // Map through snippets and replace the one with matching ID
    const updated = get().snippets.map((s) => (s.id === updatedSnippet.id ? updatedSnippet : s))
    const tags = extractUniqueTags(updated)
    // Update state and persist to storage
    set({ snippets: updated, tags })
    saveSnippets(updated)
  },

  // Delete a snippet by ID
  deleteSnippet: (id) => {
    // Filter out the snippet with matching ID
    const updated = get().snippets.filter((s) => s.id !== id)
    const tags = extractUniqueTags(updated)
    // Update state and persist to storage
    set({ snippets: updated, tags })
    saveSnippets(updated)
  },

  // Tag management methods

  // Add a new tag to the global tags list
  addTag: (newTag) => {
    const trimmed = newTag.trim()
    // Only add if the tag doesn't already exist
    if (!get().tags.includes(trimmed)) {
      const updatedTags = [...get().tags, trimmed]
      set({ tags: updatedTags })
    }
  },

  // Rename a tag across all snippets
  renameTag: (oldTag, newTag) => {
    const trimmed = newTag.trim()
    // Update all snippets that contain the old tag
    const updatedSnippets = get().snippets.map((s) => {
      if (s.tags?.includes(oldTag)) {
        const newTags = s.tags.map((tag) => (tag === oldTag ? trimmed : tag))
        return { ...s, tags: newTags }
      }
      return s
    })
    // Extract new unique tags and update state
    const newTags = extractUniqueTags(updatedSnippets)
    set({ snippets: updatedSnippets, tags: newTags })
    saveSnippets(updatedSnippets)
  },

  // Delete a tag from all snippets
  deleteTag: (tagToRemove) => {
    // Remove the tag from all snippets that contain it
    const updatedSnippets = get().snippets.map((s) => {
      if (s.tags?.includes(tagToRemove)) {
        const newTags = s.tags.filter((t) => t !== tagToRemove)
        return { ...s, tags: newTags }
      }
      return s
    })
    // Extract new unique tags and update state
    const newTags = extractUniqueTags(updatedSnippets)
    set({ snippets: updatedSnippets, tags: newTags })
    saveSnippets(updatedSnippets)
  }
}))

// Export the store for use in components
export default useStore
