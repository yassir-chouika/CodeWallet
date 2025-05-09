import PropTypes from 'prop-types'

const Modal = ({ visible, onClose, code }) => {
  if (!visible) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Code Preview</h2>
        <pre className="code-box">
          <code>{code}</code>
        </pre>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
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
