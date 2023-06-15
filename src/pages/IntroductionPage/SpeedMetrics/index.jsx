import React from 'react';
import './style.css';

export const SpeedMetrics = () => {
  return (
    <div className="gauge-container">
      <h6 className="gauge-title">Průměrné rychlosti psaní WPM (Words Per Minutes)</h6>
      <div className="wpm-gauge">
        <span className="col begginer">0 - 20 Začatečník</span>
        <span className="col average">20 - 40 Pruměrný</span>
        <span className="col advanced">40 - 60 Pokročily</span>
        <span className="col top">60 - 80 Top</span>
        <span className="col expert">80 - 100+ Expert</span>
      </div>
    </div>
  );
};
