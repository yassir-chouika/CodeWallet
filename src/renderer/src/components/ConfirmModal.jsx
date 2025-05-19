import PropTypes from 'prop-types'

const ConfirmModal = ({ visible, onCancel, onConfirm }) => {
  if (!visible) return null

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 style={{ marginBottom: '1rem' }}>⚠️ Confirm Deletion</h2>
        <p style={{ marginBottom: '1.5rem' }}>
          Are you sure you want to delete this snippet? This action cannot be undone.
        </p>
        <div className="modal-footer" style={{ justifyContent: 'flex-end', gap: '0.5rem' }}>
          <button className="close-btn" onClick={onCancel}>
            Cancel
          </button>
          <button className="close-btn" style={{ backgroundColor: '#ff6b6b' }} onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

ConfirmModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
}

export default ConfirmModal
