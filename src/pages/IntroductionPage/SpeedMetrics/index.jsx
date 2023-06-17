import React from 'react';
import './style.css';

export const SpeedMetrics = () => {
  return (
    <div className="gauge__container">
      <h6 className="gauge__container--title">Průměrné rychlosti psaní WPM (Words Per Minutes)</h6>
      <div className="gauge__container--wpm-gauge">
        <span className="gauge__container--wpm-gauge col begginer">0 - 20 Začatečník</span>
        <span className="gauge__container--wpm-gauge col average">20 - 40 Pruměrný</span>
        <span className="gauge__container--wpm-gauge col advanced">40 - 60 Pokročily</span>
        <span className="gauge__container--wpm-gauge col top-speed">60 - 80 Top</span>
        <span className="gauge__container--wpm-gauge col expert">80 - 100+ Expert</span>
      </div>
    </div>
  );
};
