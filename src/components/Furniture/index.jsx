import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

export const Furniture = ({ id, src, title, onSelect, isSelected }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        onSelect();
        navigate(`product/${id}`);
      }}
      className={isSelected ? 'card card--select' : 'card'}
      key={id}
    >
      <img src={src} alt=""></img>
      <p className="title">{title}</p>
    </div>
  );
};
