import React from 'react';
import './Button.css'; // Importe o arquivo CSS para estilização

const Button = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
