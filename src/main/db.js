import pkg from 'electron-store'
const Store = pkg.default

const store = new Store({ name: 'snippets' })

export const loadSnippets = () => {
  return store.get('snippets', [])
}

export const saveSnippets = (snippets) => {
  store.set('snippets', snippets)
}
