import React, { useState } from 'react';
import { Product } from '../types/types';

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <>
      <div className="card" onClick={openModal}>
        <div className="card-img">
          <img src={`${product.thumbnail}`} alt={`${product.brand} ${product.title}`} width="220" />
        </div>
        <div className="product-title">{product.title}</div>
        <div className="product-info">
          <div className="info category">
            <span>Brand</span>
            <span>{product.brand}</span>
          </div>
          <div className="info brand">
            <span>Price</span>
            <span>{product.price}</span>
          </div>
          <div className="info discount">
            <span>Rating</span>
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <div className="modal-close" onClick={closeModal}>
              &#10005;
            </div>
            <div className="modal-content">
              <img
                src={`${product.thumbnail}`}
                alt={`${product.brand} ${product.title}`}
                width="220"
              />
              <div className="product-title">{product.title}</div>
              <div className="product-info">
                <div className="info category">
                  <span>Brand</span>
                  <span>{product.brand}</span>
                </div>
                <div className="info brand">
                  <span>Price</span>
                  <span>{product.price}</span>
                </div>
                <div className="info discount">
                  <span>Rating</span>
                  <span>{product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { Card };
