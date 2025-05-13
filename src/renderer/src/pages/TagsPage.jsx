import { useState } from 'react'
import useStore from '../state/useStore'

const TagsPage = () => {
  const tags = useStore((state) => state.tags)
  const snippets = useStore((state) => state.snippets)

  const addTag = useStore((state) => state.addTag)
  const renameTag = useStore((state) => state.renameTag)
  const deleteTag = useStore((state) => state.deleteTag)

  const [newTag, setNewTag] = useState('')
  const [editingTag, setEditingTag] = useState(null)
  const [editedName, setEditedName] = useState('')

  // Recalculate tag usage
  const tagCounts = {}
  snippets.forEach((snippet) => {
    snippet.tags?.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1
    })
  })

  // Add a new tag
  const handleAddTag = () => {
    const trimmed = newTag.trim()
    if (trimmed && !tags.includes(trimmed)) {
      addTag(trimmed)
      setNewTag('')
    }
  }

  // Rename a tag
  const handleRenameTag = () => {
    if (editedName.trim() && editedName !== editingTag) {
      renameTag(editingTag, editedName)
      setEditingTag(null)
    }
  }

  // Delete a tag
  const handleDeleteTag = (tag) => {
    deleteTag(tag)
  }

  return (
    <div className="container">
      <h1>🏷️ Manage Tags</h1>

      {/* Add tag input */}
      <div
        className="tag-input-container"
        style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}
      >
        <input
          type="text"
          placeholder="Add a tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          className="tag-input"
          style={{ flex: 1 }}
        />
        <button onClick={handleAddTag} className="button">
          Add Tag
        </button>
      </div>

      {/* Tag list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {tags.length === 0 && <p style={{ color: '#888' }}>No tags available.</p>}

        {tags.map((tag) => (
          <div
            key={tag}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'var(--color-muted)',
              border: '1px solid var(--color-border)',
              borderRadius: '8px',
              padding: '1rem',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}
          >
            {editingTag === tag ? (
              <div style={{ display: 'flex', gap: '0.5rem', flex: 1 }}>
                <input
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                  className="tag-input"
                  style={{ flex: 1 }}
                />
                <button className="button" onClick={handleRenameTag}>
                  Save
                </button>
                <button
                  className="button"
                  style={{ backgroundColor: '#ccc', color: '#333' }}
                  onClick={() => setEditingTag(null)}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <span>
                  <strong>{tag}</strong>{' '}
                  <span style={{ color: '#777' }}>({tagCounts[tag] || 0} use)</span>
                </span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    className="button"
                    onClick={() => {
                      setEditingTag(tag)
                      setEditedName(tag)
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="button"
                    onClick={() => handleDeleteTag(tag)}
                    style={{ backgroundColor: '#9a48d0', color: 'white' }}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TagsPage
