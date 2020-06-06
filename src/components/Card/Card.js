import React from 'react';
import './Card.css';

const Card = ({ shadow, rounded, children }) => {
  const cardClasses= `card ${shadow ? 'card-shadow' : ''} ${rounded ? 'card-rounded' : ''}`;

  return (
    <div className={cardClasses}>
      {children}
    </div>
  )
}

export default Card;