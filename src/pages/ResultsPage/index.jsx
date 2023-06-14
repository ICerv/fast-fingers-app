import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const ResultesPage = () => {
    const navigate = useNavigate();

    return (
        <div className='results-container'>
            <div className='results-section'>
                <h2 className='results-title'>Skvělé psaní!</h2>
                <p>Počet provedených chyb: <span className='results-value'> {localStorage.getItem('errorCount')}</span> a přesnost: <span className='results-value'>{localStorage.getItem('accuracy')}%.</span></p>
                {/* {localStorage.getItem('exerciseMode') ? 
                    <p>Počet provedených chyb: <span className='results-value'> {localStorage.getItem('errorCount')}</span> a přesnost: <span className='results-value'>{localStorage.getItem('accuracy')}%.</span></p>
                    :
                    <p>Vaše rychlost byla <span className='results-value'> {localStorage.getItem('wpm')} WPM</span> s přesností <span className='results-value'>{localStorage.getItem('accuracy')}%.</span></p>
                } */}
                <div className='results-links'>
                 <a href='/lessons' className='lessons-link'>← Zpět k lekcím</a>
                 <a href={localStorage.getItem('currentUrl')} className='restart-button'></a>
                 <a href={localStorage.getItem('nextLink')} className='next-link'>Pokračovat →</a>
                </div>
            </div>
        </div>
    )
}

export default ResultesPage; 