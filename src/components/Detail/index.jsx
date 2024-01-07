import './style.css';

export const Detail = ({ src, title }) => {
  return (
    <div className="detail">
      <img className="detail-image" src={src} alt="" />
      <div className="detail-info">
        <p className="detail-title">{title}</p>
        <button type="submit">Objednat</button>
      </div>
    </div>
  );
};
