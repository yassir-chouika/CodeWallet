import PropTypes from 'prop-types'
import '../assets/SnippetCard.css'

const SnippetCard = ({ snippet, onView, onDelete }) => {
  return (
    <div className="snippet-card">
      <div className="snippet-header">
        <h3>{snippet.title}</h3>
        <div className="snippet-actions">
          <button onClick={() => onView(snippet)}>View</button>
          <button onClick={() => onDelete(snippet.id)}>Delete</button>
        </div>
      </div>
      <pre className="snippet-code">{snippet.code}</pre>
      <div className="snippet-tags">
        {snippet.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

// this block to validate props and suppress ESLint
SnippetCard.propTypes = {
  snippet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  onView: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default SnippetCard
