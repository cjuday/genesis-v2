import React from 'react';
import { router } from '@inertiajs/react'

const DeleteModal = ({ isOpen, closeModal, productId }) => {
  if (!isOpen) return null;

  const handleDelete = () => {
    router.delete(`/products/${productId}`, {
      onSuccess: () => closeModal(),
    });
  };

  return (
    <>
        <div className="modal-backdrop show"/>
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button type="button" aria-label="close" className="close" onClick={closeModal}>
                    <span className="fs-3">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                <p className="fs-3">Are you sure you want to delete the product # {productId}?</p>
                </div>
                <div className="modal-footer">
                <button type="button" aria-label="cancel" className="btn btn-secondary" onClick={closeModal}>
                    Cancel
                </button>
                <button type="button" aria-label="delete" className="btn btn-danger" onClick={handleDelete}>
                    Delete
                </button>
                </div>
            </div>
            </div>
        </div>
    </>
  );
};

export default DeleteModal;
