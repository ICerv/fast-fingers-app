import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import { testsSections } from '../testsSections';

const TestsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="tests__container">
      <div className="tests__container--intro">
        <h2 className="tests__container--title">Zkontroluj své dovednosti psaní</h2>
        <h4 className="tests__container--description">
          Absolvováním testu psaní získáte přehled o své aktuální rychlosti a přesnosti psaní.
        </h4>
      </div>
      <div className="tests__container--level-card">
        {testsSections.map((section) => (
          <div className="tests__container--level-box" key={section.id}>
            <div className="tests__container--tests-info">
              <h2 className="tests__container--level-title">{section.title}</h2>
              <p className="tests__container--tests-amount">{section.amount}</p>
              <img src={require(`${section.url}`)} className="tests__container--level-image" />
              <a className="tests__container--start-test" onClick={() => navigate(`/section/${section.id}/test/1`)}>
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
