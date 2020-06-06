import React from 'react';
import './Image.css';

const Image = ({ src, alt, avatar=false, rounded=false, circle=false, width="auto", height="auto", fit="cover"}) => {
  const imgClasses = `
  img 
  ${avatar ? 'img-avatar' : ''} 
  ${rounded ? 'img-rounded' : ''} 
  ${circle ? 'img-circle' : ''} 
  object-${fit}
  `;

  return (
    <img className={imgClasses} src={src} alt={alt} style={{ width: width, height:height }}/>
  )
}

export default Image