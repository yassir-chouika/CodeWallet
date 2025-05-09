import SnippetCard from '../components/SnippetCard'
import { useState } from 'react'
import Modal from '../components/Modal'

const testSnippet = {
  id: '1',
  title: 'Fetch API Example',
  code: `fetch('/api/data')\n  .then(res => res.json())\n  .then(console.log);`,
  tags: ['api', 'fetch']
}

const FragmentsPage = () => {
  const [selectedCode, setSelectedCode] = useState('')
  const [isModalVisible, setModalVisible] = useState(false)

  const handleView = (snippet) => {
    console.log('Modal triggered with code:', snippet.code)
    setSelectedCode(snippet.code)
    setModalVisible(true)
  }

  const handleDelete = (id) => {
    console.log('Delete snippet with id:', id)
  }

  return (
    <div>
      <h1>📄 Code Snippets</h1>
      <SnippetCard snippet={testSnippet} onView={handleView} onDelete={handleDelete} />
      <Modal visible={isModalVisible} code={selectedCode} onClose={() => setModalVisible(false)} />
    </div>
  )
}

export default FragmentsPage
