import React, { useState } from 'react';
import { exercisesSections } from '../exercisesSections'
import LessonsList from './LessonsList'
import './style.css'; 

const LessonsPage = () => {
    const [showLists, setShowLists] = useState({})

    const toggleList = (sectionId) => {
        setShowLists(prevState => ({
            ...prevState,
            [sectionId]: !prevState[sectionId]
        }));
    }

    return (
        <>
            {exercisesSections.map((section) => (
                <div className='lessons-container' key={section.id}>
                    <div className='lessons-section' onClick={() => toggleList(section.id)}> 
                        <div className='section-container'>
                            <div className='section-info'>
                                <img src={require(`${section.url}`)} className='section-image' />
                                <div className='section-description'>
                                    <h2 className='title'>{section.title}</h2>
                                    <p className='amount'>{section.amount}</p>
                                </div>
                            </div>
                            <div className={`section-icon ${showLists[section.id] ? 'icon-opened' : 'icon-closed'}`}></div>
                        </div>
                    </div>
                    {showLists[section.id] && (
                        <LessonsList 
                            lessons={section.lessons} 
                            sectionId={section.id}
                        />
                    )}
                </div>
            ))}
       </>
    )
}

export default LessonsPage