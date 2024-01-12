import { Link } from 'react-router-dom';
import './style.css';

export const Furniture = ({ id, src, title }) => {
  return (
    <Link to={`product/${id}`} className="card" key={id}>
      <img src={src} alt=""></img>
      <p className="title">{title}</p>
    </Link>
  );
};
