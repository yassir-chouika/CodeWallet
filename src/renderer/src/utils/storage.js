export const loadSnippets = async () => {
  return await window.api.loadSnippets()
}

export const saveSnippets = async (snippets) => {
  await window.api.saveSnippets(snippets)
}
