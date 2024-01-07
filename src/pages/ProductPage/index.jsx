import './style.css';
import { useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Detail } from '../../components/Detail';
import { useEffect, useState } from 'react';

export const ProductPage = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://apps.kodim.cz/react-2/xxxmuck/products/${id}`,
      );
      setProduct(await response.json());
    })();
  }, []);

  return (
    <div className="container">
      <Header />
      {product ? <Detail title={product.name} src={product.image} /> : null}
    </div>
  );
};
