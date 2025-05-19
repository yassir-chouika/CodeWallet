import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import '../assets/SnippetCard.css'

const SnippetCard = ({ snippet, onView, onDelete }) => {
  const navigate = useNavigate()

  return (
    <div className="snippet-card">
      <div className="snippet-header">
        <h3 onClick={() => navigate(`/fragment/${snippet.id}`)}>{snippet.title}</h3>

        <div className="snippet-actions">
          <button onClick={() => onView(snippet)}>View</button>
          <button onClick={() => onDelete(snippet.id)}>Delete</button>
        </div>
      </div>

      <SyntaxHighlighter
        language={snippet.language || 'javascript'}
        style={oneLight}
        className="snippet-code"
        showLineNumbers={false}
        wrapLines={true}
      >
        {snippet.code}
      </SyntaxHighlighter>

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

SnippetCard.propTypes = {
  snippet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    language: PropTypes.string
  }).isRequired,
  onView: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default SnippetCard
