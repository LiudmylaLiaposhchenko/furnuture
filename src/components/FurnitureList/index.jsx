import { useEffect, useState } from 'react';
import { Furniture } from '../Furniture';
import './style.css';

export const FurnitureList = () => {
  const [furniture, setFurniture] = useState([]);
  const [selectedFurniture, setSelectedFurniture] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://apps.kodim.cz/react-2/xxxmuck/products',
      );
      setFurniture(await response.json());
    })();
  }, []);

  return furniture.length < 0 ? (
    <p>Loading...</p>
  ) : (
    <div className="furniture-list">
      {furniture.map((f) => (
        <Furniture
          id={f.id}
          key={f.id}
          title={f.name}
          src={f.image}
          onSelect={() => setSelectedFurniture(f)}
          isSelected={selectedFurniture ? f.id === selectedFurniture.id : false}
        />
      ))}
    </div>
  );
};
