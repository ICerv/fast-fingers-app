import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const LessonsList = ({ lessons, sectionId }) => {
  const navigate = useNavigate();

  return (
    <div className="lessons__list">
      {lessons.map((lesson) => (
        <div
          className="lessons__list--card"
          key={lesson.id}
          onClick={() => navigate(`/section/${sectionId}/lesson/${lesson.id}/exercise/0`)}
        >
          <span className="lessons__list--lesson-number">Lekce {lesson.number}</span>
          <div className="lessons__list--lesson-title">{lesson.title}</div>
          <p className="lessons__list--lesson_intro">{lesson.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default LessonsList;
