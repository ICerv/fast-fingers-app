import React, { useState, useEffect } from 'react';
import { exercisesSections } from '../exercisesSections';
import LessonsList from './LessonsList';
import './style.css';

const LessonsPage = () => {
  const [showLists, setShowLists] = useState({});
  const [showTopBtn, setShowTopBtn] = useState(false);

  //Function to toggle the list of lessons
  const toggleList = (sectionId) => {
    setShowLists((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }));
  };

  //Event for the to top button
  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
  };

  return (
    <section className="lessonspage">
    <div className="lessonspage__page--container">
      {exercisesSections.map((section) => (
        <div className="lessonspage__lessons--container" key={section.id}>
          <div className="lessonspage__lessons--section" onClick={() => toggleList(section.id)}>
            <div className="lessonspage__section--container">
              <div className="lessonspage__section--info">
                <img src={require(`${section.url}`)} className="lessonspage__section--image" alt='section icon'/>
                <div className="lessonspage__section--description">
                  <h2 className="lessonspage__section--title">{section.title}</h2>
                  <p className="lessonspage__section--amount">{section.amount}</p>
                </div>
              </div>
              <div
                className={`lessonspage__section--icon ${showLists[section.id] ? 'lessonspage__icon--opened' : 'lessonspage__icon--closed'}`}
              ></div>
            </div>
          </div>
          {showLists[section.id] && <LessonsList lessons={section.lessons} sectionId={section.id} />}
        </div>
      ))}
      {showTopBtn && <img src={require('./img/icon-up.png')} className="lessonspage__icon-to-top" alt="icon-to-top" onClick={goToTop} />}
    </div>
  </section>
  );
};

export default LessonsPage;
