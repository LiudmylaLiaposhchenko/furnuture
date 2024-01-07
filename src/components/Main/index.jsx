import { FurnitureList } from '../FurnitureList';
import './style.css';

export const Main = () => {
  return (
    <main>
      <div className="info">
        <h2>Aktuální nabídka</h2>
        <p>Nejnovější prémiové produkty od předních českých designerů.</p>
        <p>Doprava zdarma až k vám domů, na cenu nehled`te.</p>
      </div>
      <FurnitureList />
    </main>
  );
};
