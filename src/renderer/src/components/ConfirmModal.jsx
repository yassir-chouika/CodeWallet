// Import PropTypes for runtime type checking of component props
import PropTypes from 'prop-types'

// A modal dialog component that asks for confirmation before performing a destructive action
const ConfirmModal = ({ visible, onCancel, onConfirm }) => {
  // If not visible, render nothing (component won't appear in DOM)
  if (!visible) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Modal title with warning icon */}
        <h2 style={{ marginBottom: '1rem' }}>⚠️ Confirm Deletion</h2>
        {/* Warning message about irreversible action */}
        <p style={{ marginBottom: '1.5rem' }}>
          Are you sure you want to delete this snippet? This action cannot be undone.
        </p>
        {/* Action buttons container with custom spacing */}
        <div className="modal-footer" style={{ justifyContent: 'flex-end', gap: '0.5rem' }}>
          {/* Cancel button that triggers the onCancel callback */}
          <button className="close-btn" onClick={onCancel}>
            Cancel
          </button>
          {/* Delete button with danger styling that triggers onConfirm */}
          <button className="close-btn" style={{ backgroundColor: '#ff6b6b' }} onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

// Prop type definitions for runtime validation
ConfirmModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
}

export default ConfirmModal
