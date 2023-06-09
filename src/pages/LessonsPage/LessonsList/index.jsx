import React from 'react';
import { useNavigate } from "react-router-dom";
// import { lessons } from '../../exercisesSections';
import './style.css'; 

const LessonsList = ({lessons}) => {

    const navigate = useNavigate()

    return (
        <div className='lessons-list'>
            {lessons.map((lesson) =>
                <div className="lesson-card" key={lesson.id} onClick={() => navigate('/lesson/lesson1')}>
                    <span className="lesson-number">Lekce {lesson.number}</span>
                    <div className="lesson-title">{lesson.title}</div>
                    <p className="lesson_intro">{lesson.amount}</p>
                </div>
            )}
        </div>

    )
}

export default LessonsList