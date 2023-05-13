import React from 'react';
// this is a decorative component
function Card({ children, reverse }) {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

export default Card;
