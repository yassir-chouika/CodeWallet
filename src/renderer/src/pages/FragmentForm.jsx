import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useStore from '../state/useStore'

const FragmentForm = () => {
  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [tags, setTags] = useState('')
  const addSnippet = useStore((state) => state.addSnippet)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const newSnippet = {
      id: crypto.randomUUID(),
      title,
      code,
      tags: tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)
    }

    addSnippet(newSnippet)
    navigate('/')
  }

  return (
    <div className="container">
      <h2>Add New Snippet</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} required />

        <label>Code</label>
        <textarea value={code} onChange={(e) => setCode(e.target.value)} required rows={6} />

        <label>Tags (comma-separated)</label>
        <input value={tags} onChange={(e) => setTags(e.target.value)} />

        <button className="button" type="submit">
          Save Snippet
        </button>
      </form>
    </div>
  )
}

export default FragmentForm
