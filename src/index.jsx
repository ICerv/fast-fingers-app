import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './components/Header/index.';
import Footer from './components/Footer';
import Keyboard from './pages/TrainingSection/Keyboard';

const App = () => {
  return (
    <div className="container">
      <Header />

      <main>
        <Keyboard />
      </main>


      <Footer />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
