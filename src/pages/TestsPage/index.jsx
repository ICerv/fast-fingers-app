import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import { testsSections } from '../testsSections';

const TestsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="tests-container">
      <div className="tests-intro">
        <h2 className="tests-title">Zkontroluj své dovednosti psaní</h2>
        <h4 className="tests-description">
          Absolvováním testu psaní získáte přehled o své aktuální rychlosti a přesnosti psaní.
        </h4>
      </div>
      <div className="level-card">
        {testsSections.map((section) => (
          <div className="level-box" key={section.id}>
            <div className="tests-info">
              <h2 className="level-title">{section.title}</h2>
              <p className="tests-amount">{section.amount}</p>
              <img src={require(`${section.url}`)} className="level-image" />
              <a className="start-test" onClick={() => navigate(`/section/${section.id}/test/1`)}>
                Začít test
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestsPage;
