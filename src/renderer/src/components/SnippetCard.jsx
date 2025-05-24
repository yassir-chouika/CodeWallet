// Import required dependencies
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import '../assets/SnippetCard.css'

// Component that displays a code snippet card with actions
const SnippetCard = ({ snippet, onView, onDelete }) => {
  const navigate = useNavigate()

  return (
    <>
      {/* Main container for the snippet card */}
      <div className="snippet-card">
        {/* Header section with title and action buttons */}
        <div className="snippet-header">
          {/* Clickable title that navigates to snippet detail */}
          <h3 onClick={() => navigate(`/fragment/${snippet.id}`)}>{snippet.title}</h3>

          {/* Container for action buttons */}
          <div className="snippet-actions">
            {/* Button to view snippet details */}
            <button onClick={() => onView(snippet)}>View</button>
            {/* Button to delete the snippet */}
            <button onClick={() => onDelete(snippet.id)}>Delete</button>
          </div>
        </div>

        {/* Syntax-highlighted code display */}
        <SyntaxHighlighter
          language={snippet.language || 'javascript'}
          style={oneLight}
          className="snippet-code"
          showLineNumbers={false}
          wrapLines={true}
        >
          {snippet.code}
        </SyntaxHighlighter>

        {/* Container for displaying tags */}
        <div className="snippet-tags">
          {/* Map through tags to display each one */}
          {snippet.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  )
}

// Prop type validation for the component
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
