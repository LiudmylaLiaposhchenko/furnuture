import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import './global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'product/:id',
    element: <ProductPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

createRoot(document.querySelector('#app')).render(<App />);
