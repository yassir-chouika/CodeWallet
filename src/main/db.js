// Imports the 'electron-store' package for persistent data storage
import pkg from 'electron-store'
// Accesses the default export (Store class) from the package
const Store = pkg.default

// Creates a new Store instance with the namespace 'snippets'
const store = new Store({ name: 'snippets' })

// Retrieves stored snippets; returns an empty array if none exist
export const loadSnippets = () => {
  return store.get('snippets', [])
}

// Overwrites stored snippets with the provided 'snippets' array
export const saveSnippets = (snippets) => {
  store.set('snippets', snippets)
}
