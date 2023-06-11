import React from 'react';
import { useNavigate } from 'react-router-dom';

import './style.css';
import { testsSections } from '../testsSections';

const TestsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      {testsSections.map((section) => (
        <div className="tests-container" key={section.id}>
          <div className="tests-section">
            <div className="section-info">
              <div className="section-description">
                <h2 className="title">{section.title}</h2>
                <p className="amount">{section.amount}</p>
              </div>
              <img src={require(`${section.url}`)} className="section-image" />
            </div>
            <div className="section-icon icon-closed"></div>
          </div>
          <a
            className="start-test"
            onClick={() => navigate(`/section/${section.id}/test/1`)}
          >
            Začít test
          </a>
        </div>
      ))}
    </>
  );
};

export default TestsPage;
