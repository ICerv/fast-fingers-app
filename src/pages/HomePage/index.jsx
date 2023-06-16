import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

const HomePage = () => {
  const banner = 'Program pro trénink psaní na klávesnici';
  const subHeadings = ['Zlepši své psaní', 'Získej rychlost', 'Přesnost', 'Produktivitu'];
  const typingState = 'istyping';
  const deletingState = 'isdeleting';

  const [typing, setTyping] = useState(typingState);
  const [bannerText, setBannerText] = useState('');
  const [subHeadingIndex, setSubHeadingIndex] = useState(0);
  const [subHeading, setSubHeading] = useState('');
  const [isBannerFinished, setIsBannerFinished] = useState(false);

  // Helper function for sleep functionality
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Typing the banner text until it's completed
      if (!isBannerFinished) {
        if (typing === typingState && bannerText !== banner) {
          setBannerText((originalText) => banner.slice(0, originalText.length + 1));
        } else if (bannerText === banner && typing === typingState) {
          setIsBannerFinished(true);
        }

        // Once banner is typed, type the subheading
      } else if (typing === typingState && subHeading !== subHeadings[subHeadingIndex]) {
        setSubHeading((originalText) => subHeadings[subHeadingIndex].slice(0, originalText.length + 1));

        // When subheading is completed, wait for 1 sec and switch to deleting
      } else if (subHeading === subHeadings[subHeadingIndex] && typing === typingState) {
        sleep(1000).then(() => {
          setTyping(deletingState);
        });

        // Start deleting the subheading
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

    // Clear timeout when component unmounts
    return () => clearTimeout(timeout);
  }, [bannerText, subHeading, typing, isBannerFinished]);

  return (
    <section className="homepage">
      <div className="homepage__content">
        <div className="homepage__wrapper">
          <h1 className="homepage__banner">
            <pre className={isBannerFinished ? 'homepage__banner--text' : 'homepage__banner--blinking-cursor'}>
              {bannerText}
            </pre>
          </h1>
          <p className="homepage__subheading">
            <span
              className={isBannerFinished ? 'homepage__subheading--text homepage__subheading--blinking-cursor' : ''}
            >
              {subHeading}
            </span>
          </p>
        </div>

        <div className="homepage__image">
          <img src={require('./img/laptop.png')} alt="Laptop image" />
        </div>
      </div>
    </section>
  );
};
export default HomePage;
