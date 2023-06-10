import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const TestsPage = () => {

    const navigate = useNavigate();

    const handleLevelClick = (level) => {
        navigate(`/training/${level}`);
    };

    return (
        <div className="tests-container">
            <div className='tests-intro'>
                <h2 className='tests-title'>Zkontroluj své dovednosti psaní</h2>
                <h4 className='tests-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit corrupti, aliquam totam veniam quibusdam veritatis nisi asperiores harum minus dolores aperiam inventore deserunt? Illo odio non autem nemo quidem impedit?</h4>
            </div>
            <div className='tests-list'>

                <div className='tests-card'>

                    <div className="test-level" onClick={() => handleLevelClick('beginner')}>
                        <h2 className='level-title'>Začátečník</h2>
                        <img src={require('./img/begginer.png')} className='level-image' />

                        <p className='start-test'>Začít test</p>
                    </div>
                </div>
                <div className='tests-card'>

                    <div className="test-level" onClick={() => handleLevelClick('advanced')}>
                        <div className='test-level'>
                            <h2 className='level-title'>Pokročilý</h2>
                            <img src={require('./img/advanced.png')} className='level-image' />

                            <p className='start-test'>Začít test</p>
                        </div>
                    </div>
                </div>
                <div className='tests-card'>

                    <div className="test-level" onClick={() => handleLevelClick('expert')}>
                        <div className='test-level'>

                            <h2 className='level-title'>Expert</h2>
                            <img src={require('./img/expert.png')} className='level-image' />

                            <p className='start-test'>Začít test</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestsPage