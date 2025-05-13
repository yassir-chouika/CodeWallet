import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SnippetCard from '../components/SnippetCard'
import Modal from '../components/Modal'
import useStore from '../state/useStore'

const FragmentsPage = () => {
  const deleteSnippet = useStore((state) => state.deleteSnippet)
  const searchTerm = useStore((state) => state.searchTerm)
  const setSearchTerm = useStore((state) => state.setSearchTerm)
  const getFilteredSnippets = useStore((state) => state.getFilteredSnippets)

  const [selectedCode, setSelectedCode] = useState('')
  const [isModalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    useStore.getState().initSnippets()
  }, [])

  const handleView = (snippet) => {
    setSelectedCode(snippet.code)
    setModalVisible(true)
  }

  const handleDelete = (id) => {
    deleteSnippet(id)
  }

  const snippets = useStore((state) => state.snippets)
  const filteredSnippets = searchTerm ? getFilteredSnippets() : snippets

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>📄 Code Snippets</h1>
        <Link to="/fragment">
          <button className="button">+ New Fragment</button>
        </Link>
      </div>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search snippets..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input mb-4 mt-2 w-full"
      />

      <div className="fragment-list">
        {filteredSnippets.length === 0 ? (
          <p style={{ marginTop: '1rem' }}>No snippets found.</p>
        ) : (
          filteredSnippets.map((snippet) => (
            <SnippetCard
              key={snippet.id}
              snippet={snippet}
              onView={handleView}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>

      <Modal visible={isModalVisible} code={selectedCode} onClose={() => setModalVisible(false)} />
    </div>
  )
}

export default FragmentsPage
