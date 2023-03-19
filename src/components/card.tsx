import React from 'react';

interface Props {
  car: {
    brand: string;
    model: string;
    year: number;
    color: string;
    price: number;
    image: string;
  };
}

const Card: React.FC<Props> = ({ car }) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src={`assets/cars/${car.image}`} alt={`${car.brand} ${car.model}`} width="220" />
      </div>
      <div className="product-title">{car.brand}</div>
      <div className="product-info">
        <div className="info category">
          <span>Модель</span>
          <span>{car.model}</span>
        </div>
        <div className="info brand">
          <span>Год</span>
          <span>{car.year}</span>
        </div>
        <div className="info discount">
          <span>Цвет</span>
          <span>{car.color}</span>
        </div>
        <div className="info price">
          <span>Цена</span>
          <span>{car.price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
