import React from 'react';
import { useNavigate } from 'react-router-dom';
import { exercisesSections } from '../exercisesSections';
import './style.css';

const ResultesPage = () => {

    const navigate = useNavigate();
    //Getting id for navigation
    const section = exercisesSections.find((section) => section.id === Number(localStorage.getItem('sectionId')));
    const lesson = section.lessons.find((lesson) => lesson.id ===  Number(localStorage.getItem('lesson.id')));

    //Returns the navigation of the selected exercise
    const getExercise = (event) => {
        const exerciseId = event.target.textContent - 1;
        navigate(`/section/${localStorage.getItem('sectionId')}/lesson/${localStorage.getItem('lesson.id')}/exercise/${exerciseId}`)
    }

    return (
        <div className='results__container'>
            <div className='results__container--section'>
                <h2 className='results__container--title'>Skvělé psaní!</h2>
                <p>Počet provedených chyb: <span className='results__container--value'> {localStorage.getItem('errorCount')}</span> a přesnost: <span className='results__container--value'>{localStorage.getItem('accuracy')}%.</span></p>
                <div className='results__container--links'>
                 <a href='/lessons' className='results__container--lessons-link'>← Zpět k lekcím</a>
                 <a href={localStorage.getItem('currentUrl')} className='results__container--restart-link'></a>
                 <a href={localStorage.getItem('nextLink')} className='results__container--next-link'>Pokračovat →</a>
                </div>
                <div className='results__container--exercises-list'>
                    {lesson.exercises.map((exercise, index) =>  
                        <div key={index} className='results__container--exercise-item' onClick={getExercise}> {index + 1}</div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ResultesPage; 