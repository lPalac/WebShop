import React from 'react'
import "./css/dropdown.css"
import ReactDom from 'react-dom'

export default function Modal({ open, children, onClose, addToCart }) {
    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div className="modal-background" />
            <div className="modal">
                <span>{children}</span>
                <button onClick={addToCart}>
                    Add to Cart
                </button>
                <button onClick={onClose}>
                    Close
                </button>

            </div>
        </>,
        document.getElementById('portal')
    )
}
