import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container">
      <Footer />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
