import { useState } from 'react'
import { Link } from 'react-router-dom'
import SnippetCard from '../components/SnippetCard'
import Modal from '../components/Modal'
import useStore from '../state/useStore'

const FragmentsPage = () => {
  const snippets = useStore((state) => state.snippets)
  const deleteSnippet = useStore((state) => state.deleteSnippet)
  const [selectedCode, setSelectedCode] = useState('')
  const [isModalVisible, setModalVisible] = useState(false)

  const handleView = (snippet) => {
    setSelectedCode(snippet.code)
    setModalVisible(true)
  }

  const handleDelete = (id) => {
    deleteSnippet(id)
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>📄 Code Snippets</h1>
        <Link to="/fragment">
          <button className="button">+ New Fragment</button>
        </Link>
      </div>

      <div className="fragment-list">
        {snippets.map((snippet) => (
          <SnippetCard
            key={snippet.id}
            snippet={snippet}
            onView={handleView}
            onDelete={handleDelete}
          />
        ))}
      </div>

      <Modal visible={isModalVisible} code={selectedCode} onClose={() => setModalVisible(false)} />
    </div>
  )
}

export default FragmentsPage
