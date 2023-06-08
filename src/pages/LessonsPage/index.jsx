import React from 'react';
import './style.css'; 

const LessonsPage = () => {
    return (
        <div className='lessons-container'>
            <div className='lessons-section'>
                <div className='section-container'>
                    <div className='section-info'>
                        <img src={require('./img/capital-letters.png')} className='section-image'/>
                        <div className='section-description'>
                            <h2 className='title'>Malá písmena</h2>
                            <p className='amount'>17 lekcí</p>
                        </div>
                    </div>
                    <div className='section-icon icon-closed'></div>
                </div>
            </div>
            <div className='lessons-list'>
                <div className="lesson-card">
                    <span className="lesson-number">Lekce 1</span>
                    <div className="lesson-title">Písmena f, j а mezera</div>
                    <p className="lesson_intro">5 úkolů</p>
                </div>
                <div className="lesson-card">
                    <span className="lesson-number">Lekce 2</span>
                    <div className="lesson-title">Písmena d, k</div>
                    <p className="lesson_intro">8 úkolů</p>
                </div>
                <div className="lesson-card">
                    <span className="lesson-number">Lekce 3</span>
                    <div className="lesson-title">Písmena ů, a </div>
                    <p className="lesson_intro">9 úkolů</p>
                </div>
                <div className="lesson-card">
                    <span className="lesson-number">Lekce 4</span>
                    <div className="lesson-title">Písmena s, l</div>
                    <p className="lesson_intro">8 úkolů</p>
                </div>
                <div className="lesson-card">
                    <span className="lesson-number">Lekce 5</span>
                    <div className="lesson-title">Písmena u, r</div>
                    <p className="lesson_intro">8 úkolů</p>
                </div>
                <div className="lesson-card">
                    <span className="lesson-number">Lekce 6</span>
                    <div className="lesson-title">Písmena e, i</div>
                    <p className="lesson_intro">8 úkolů</p>
                </div>
            </div>
            <div className="lessons-section">
                <div className='section-container'>
                    <div className='section-info'>
                        <img src={require('./img/small-letters.png')} className='section-image'/>
                        <div className='section-description'>
                            <h2 className="title">Velká písmena</h2>
                            <p className='lessons-amount'>4 lekcí</p>
                        </div>
                    </div>
                    <div className='section-icon icon-closed'></div>
                </div>
            </div>
            <div className="lessons-section">
                <div className='section-container'>
                    <div className='section-info'>
                        <img src={require('./img/numbers.png')} className='section-image'/>
                        <div className='section-description'>
                            <h2 className="title">Číselná řada kláves</h2>
                            <p className='lessons-amount'>1 lekcí</p>
                        </div>
                    </div>
                    <div className='section-icon icon-closed'></div>
                </div>
            </div>
            <div className="lessons-section">
                <div className='section-container'>
                    <div className='section-info'>
                        <img src={require('./img/signs.png')} className='section-image'/>
                        <div className='section-description'>
                            <h2 className="title">Znaky</h2>
                            <p className='lessons-amount'>8 lekcí</p>
                        </div>
                    </div>
                    <div className='section-icon icon-closed'></div>
                </div>
            </div>
        </div>
    )
}

export default LessonsPage