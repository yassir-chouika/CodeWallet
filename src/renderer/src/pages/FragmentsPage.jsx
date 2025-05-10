import { useState } from 'react'
import SnippetCard from '../components/SnippetCard'
import Modal from '../components/Modal'

const FragmentsPage = () => {
  const [snippets, setSnippets] = useState([
    {
      id: crypto.randomUUID(),
      title: 'Fetch API Example',
      code: `fetch('/api/data')\n  .then(res => res.json())\n  .then(console.log);`,
      tags: ['api', 'fetch']
    }
  ])

  const [selectedCode, setSelectedCode] = useState('')
  const [isModalVisible, setModalVisible] = useState(false)

  const handleView = (snippet) => {
    setSelectedCode(snippet.code)
    setModalVisible(true)
  }

  const handleDelete = (id) => {
    setSnippets((prev) => prev.filter((s) => s.id !== id))
  }

  const handleAddSnippet = () => {
    const title = prompt('Enter title:')
    const code = prompt('Enter code:')
    const tags = prompt('Enter tags (comma-separated):')
      ?.split(',')
      .map((tag) => tag.trim())

    if (title && code) {
      const newSnippet = {
        id: crypto.randomUUID(),
        title,
        code,
        tags: tags ?? []
      }

      setSnippets((prev) => [...prev, newSnippet])
    }
  }

  return (
    <div>
      <h1>📄 Code Snippets</h1>
      <button onClick={handleAddSnippet} style={{ marginBottom: '1rem' }}>
        ➕ Add New Snippet
      </button>

      {snippets.map((snippet) => (
        <SnippetCard
          key={snippet.id}
          snippet={snippet}
          onView={handleView}
          onDelete={handleDelete}
        />
      ))}

      <Modal visible={isModalVisible} code={selectedCode} onClose={() => setModalVisible(false)} />
    </div>
  )
}

export default FragmentsPage
