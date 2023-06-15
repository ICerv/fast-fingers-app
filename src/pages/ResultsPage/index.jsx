import React from 'react';
import { useNavigate } from 'react-router-dom';
import { exercisesSections } from '../exercisesSections';
import './style.css';

const ResultesPage = () => {

    const navigate = useNavigate();
    const section = exercisesSections.find((section) => section.id === Number(localStorage.getItem('sectionId')));
    const lesson = section.lessons.find((lesson) => lesson.id ===  Number(localStorage.getItem('lesson.id')));

    const getExercise = (event) => {
        const exerciseId = event.target.textContent - 1;
        navigate(`/section/${localStorage.getItem('sectionId')}/lesson/${localStorage.getItem('lesson.id')}/exercise/${exerciseId}`)
    }

    return (
        <div className='results-container'>
            <div className='results-section'>
                <h2 className='results-title'>Skvělé psaní!</h2>
                <p>Počet provedených chyb: <span className='results-value'> {localStorage.getItem('errorCount')}</span> a přesnost: <span className='results-value'>{localStorage.getItem('accuracy')}%.</span></p>
                <div className='results-links'>
                 <a href='/lessons' className='lessons-link'>← Zpět k lekcím</a>
                 <a href={localStorage.getItem('currentUrl')} className='restart-button'></a>
                 <a href={localStorage.getItem('nextLink')} className='next-link'>Pokračovat →</a>
                </div>
                <div className='exercises-list'>
                    {lesson.exercises.map((exercise, index) =>  
                        <div key={index} className='exercise-item' onClick={getExercise}> {index + 1}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ResultesPage; 