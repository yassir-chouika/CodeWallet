import PropTypes from 'prop-types'

const Modal = ({ visible, onClose, code }) => {
  if (!visible) return null

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Code Preview</h2>
          <button className="copy-btn" onClick={handleCopy}>📋 Copy</button>
        </div>

        <pre className="code-box">
          <code>{code}</code>
        </pre>

        <div className="modal-footer">
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  code: PropTypes.string.isRequired
}

export default Modal
