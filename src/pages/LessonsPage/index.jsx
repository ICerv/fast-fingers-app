import React from 'react';
import { exercisesSections } from '../exercisesSections'
import LessonsList from './LessonsList'
import './style.css'; 

const LessonsPage = () => {

    return (
        <>
            {exercisesSections.map((section) => 
                <div className='lessons-container' key={section.id}>
                    <div className='lessons-section'>
                        <div className='section-container'>
                            <div className='section-info'>
                                <img src={require(`${section.url}`)} className='section-image' />
                                <div className='section-description'>
                                    <h2 className='title'>{section.title}</h2>
                                    <p className='amount'>{section.amount}</p>
                                </div>
                            </div>
                            <div className='section-icon icon-closed'></div>
                        </div>
                    </div>
                    <LessonsList 
                    lessons={section.lessons} 
                    sectionId={section.id}/>
                </div>
            )}
       </>
    )
}

export default LessonsPage