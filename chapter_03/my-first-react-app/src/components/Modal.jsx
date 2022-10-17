import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({ children, handleClose, isSalesModal }) => {
  return ReactDOM.createPortal(
    <div className='modal-backdrop'>
      <div
        className='modal'
        style={{
          border: '4px solid',
          borderColor: isSalesModal ? '#ff4500' : '#888',
          textAlign: 'center',
        }}>
        {children}
        <button
          onClick={() => handleClose(false)}
          className={isSalesModal ? 'sales-btn' : ''}>
          close
        </button>
      </div>
    </div>,
    document.body
  )
}

export default Modal
