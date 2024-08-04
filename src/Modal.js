import React from 'react';
import './Modal.css';

const Modal = ({ src, onClose, onNext, onPrev }) => {
  return (
    <div className="modal" onClick={onClose}>
      <span className="close" onClick={onClose}>&times;</span>
      <span className="prev" onClick={(e) => { e.stopPropagation(); onPrev(); }}>&#10094;</span>
      <span className="next" onClick={(e) => { e.stopPropagation(); onNext(); }}>&#10095;</span>
      <img className="modal-content" src={src} alt="Modal Content" />
    </div>
  );
};

export default Modal;
