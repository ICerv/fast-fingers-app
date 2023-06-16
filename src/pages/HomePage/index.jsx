import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const HomePage = () => {
  const banner = 'Program pro trénink psaní na klávesnici';
  const subHeadings = [
    'Zlepši své psaní',
    'Získej rychlost',
    'Přesnost',
    'Produktivitu',
    'Psaní naslepo',
    // 'Větší šancí na trhu práce',
  ];
  const typingState = 'istyping';
  const deletingState = 'isdeleting';
  const navigate = useNavigate();


  const [typing, setTyping] = useState(typingState);
  const [bannerText, setBannerText] = useState('');
  const [subHeadingIndex, setSubHeadingIndex] = useState(0);
  const [subHeading, setSubHeading] = useState('');
  const [isBannerFinished, setIsBannerFinished] = useState(false);

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isBannerFinished) {
        if (typing === typingState && bannerText !== banner) {
          setBannerText((originalText) => banner.slice(0, originalText.length + 1));
        } else if (bannerText === banner && typing === typingState) {
          setIsBannerFinished(true);
        }
      } else if (typing === typingState && subHeading !== subHeadings[subHeadingIndex]) {
        setSubHeading((originalText) => subHeadings[subHeadingIndex].slice(0, originalText.length + 1));
      } else if (subHeading === subHeadings[subHeadingIndex] && typing === typingState) {
        sleep(1000).then(() => {
          setTyping(deletingState);
        });
      } else if (
        (subHeading === subHeadings[subHeadingIndex] && typing === deletingState) ||
        typing === deletingState
      ) {
        setSubHeading((originalText) => subHeadings[subHeadingIndex].slice(0, originalText.length - 1));
        if (subHeading.length <= 2) {
          setTyping(typingState);
          setSubHeadingIndex((prevIndex) => (prevIndex + 1) % subHeadings.length);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [bannerText, subHeading, typing, isBannerFinished]);

  return (
    <section className="homepage-section">
      <div className="homepage-content">
        <div className="homepage">
          <div className='homepage-info'>
            <h1 className="homepage-banner">
              <pre className={isBannerFinished ? '' : 'blinking-cursor bannert-cursor'}>{bannerText}</pre>
            </h1>
            <p className="homepage-subheading">
              <span className={isBannerFinished ? 'subheading-text subheading-cursor blinking-cursor' : ''}>
                {subHeading}
              </span>
            </p>
          </div>
          <div className='homepage-button'>
            <button className='button start' onClick={() => navigate('/introduction')}>Jak začít?</button>
            <button className='button lessons'  onClick={() => navigate('/lessons')}>K lekcím</button>
          </div>
        </div>

        <div className="homepage-image">
          <img src={require('./img/laptop.png')} alt="Laptop image" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
