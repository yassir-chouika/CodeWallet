import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SnippetCard from '../components/SnippetCard'
import Modal from '../components/Modal'
import useStore from '../state/useStore'
import Swal from 'sweetalert2'

const FragmentsPage = () => {
  const deleteSnippet = useStore((state) => state.deleteSnippet)
  const searchTerm = useStore((state) => state.searchTerm)
  const setSearchTerm = useStore((state) => state.setSearchTerm)
  const getFilteredSnippets = useStore((state) => state.getFilteredSnippets)
  const snippets = useStore((state) => state.snippets)
  const [selectedCode, setSelectedCode] = useState('')
  const [isModalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    useStore.getState().initSnippets()
  }, [])

  const handleView = (snippet) => {
    setSelectedCode(snippet.code)
    setModalVisible(true)
  }

  const handleDeleteRequest = (id) => {
    const isDark = document.documentElement.classList.contains('dark')

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      background: isDark ? '#2b2b2b' : '#ffffff',
      color: isDark ? '#f0f0f0' : '#333',
      showCancelButton: true,
      confirmButtonColor: '#9a48d0',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      customClass: {
        popup: isDark ? 'swal2-dark-popup' : ''
      }
    }).then((result) => {
      if (result.isConfirmed) {
        deleteSnippet(id)

        Swal.fire({
          title: 'Deleted!',
          text: 'Your snippet has been deleted.',
          icon: 'success',
          background: isDark ? '#2b2b2b' : '#ffffff',
          color: isDark ? '#f0f0f0' : '#333',
          confirmButtonColor: '#7bc950',
          customClass: {
            popup: isDark ? 'swal2-dark-popup' : ''
          }
        })
      }
    })
  }

  const filteredSnippets = searchTerm ? getFilteredSnippets() : snippets

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1>📄 Code Snippets</h1>
        <Link to="/fragment">
          <button className="button">+ New Snippet</button>
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
              onDelete={() => handleDeleteRequest(snippet.id)}
            />
          ))
        )}
      </div>

      <Modal visible={isModalVisible} code={selectedCode} onClose={() => setModalVisible(false)} />
    </div>
  )
}

export default FragmentsPage
