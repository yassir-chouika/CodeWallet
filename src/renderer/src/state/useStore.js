import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      snippets: [], // All code snippets
      tags: [], // All tags

      // --- Snippets ---
      addSnippet: (snippet) => set((state) => ({ snippets: [...state.snippets, snippet] })),

      updateSnippet: (id, updated) =>
        set((state) => ({
          snippets: state.snippets.map((s) => (s.id === id ? { ...s, ...updated } : s))
        })),

      deleteSnippet: (id) =>
        set((state) => ({
          snippets: state.snippets.filter((s) => s.id !== id)
        })),

      // --- Tags ---
      addTag: (tag) => set((state) => ({ tags: [...state.tags, tag] })),

      deleteTag: (id) =>
        set((state) => ({
          tags: state.tags.filter((t) => t.id !== id)
        }))
    }),
    {
      name: 'codewallet-storage' // Storage key
    }
  )
)

export default useStore
