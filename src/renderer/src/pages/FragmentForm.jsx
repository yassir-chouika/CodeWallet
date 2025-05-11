import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useStore from '../state/useStore'

const FragmentForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const addSnippet = useStore((state) => state.addSnippet)
  const updateSnippet = useStore((state) => state.updateSnippet)
  const snippets = useStore((state) => state.snippets)

  const editingSnippet = id && snippets.find((s) => s.id === id)

  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [tags, setTags] = useState('')

  // 🧠 Load existing snippet data when editing
  useEffect(() => {
    if (id && snippets.length > 0) {
      const found = snippets.find((s) => s.id === id)

      if (found) {
        setTitle(found.title)
        setCode(found.code)
        setTags(found.tags.join(', '))
      }
    }
  }, [id, snippets])

  const handleSubmit = (e) => {
    e.preventDefault()

    const parsedTags = tags
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean)

    if (editingSnippet) {
      updateSnippet({
        ...editingSnippet,
        title,
        code,
        tags: parsedTags
      })
    } else {
      addSnippet({
        id: crypto.randomUUID(),
        title,
        code,
        tags: parsedTags
      })
    }

    navigate('/')
  }

  return (
    <div className="container">
      <h2>{editingSnippet ? 'Edit Snippet' : 'Add New Snippet'}</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Code</label>
        <textarea value={code} onChange={(e) => setCode(e.target.value)} required rows={6} />

        <label>Tags (comma-separated)</label>
        <input value={tags} onChange={(e) => setTags(e.target.value)} />

        <button className="button" type="submit">
          {editingSnippet ? 'Update Snippet' : 'Save Snippet'}
        </button>
      </form>
    </div>
  )
}

export default FragmentForm
