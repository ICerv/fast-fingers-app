import React, { useState, useEffect } from 'react';
import './style.css';
import { SpeedMetrics } from './SpeedMetrics';

const IntroductionPage = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  //Event for to top button
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="introduction__container">
      <h1 className="introduction__container--title">ÚVOD</h1>{' '}
      <section className="introduction__container--section">
        <h4 className="introduction__container--section-intro">
          Fast Fingers je interaktivní program navržený pro výuku a trénink psaní na klávesnici všemi deseti. Pro
          efektivní využití aplikace a dosaženi nejlepších výsledků, doporučujeme dodržovat následující tipy a postupy.
        </h4>

        {/* INTRODUCTION TO KEYBOARD */}
        <h2 className="introduction__container--subtitle">Seznámení s klávesnicí</h2>
        <p> Ilustrace obrázku ukazuje, které prsty jsou zodpovědné za stisk jednotlivých kláves.</p>
        <div className="introduction__container--keyboard-instruction">
          <img
            className="introduction__container--color-keyboard"
            src={require('./img/keyboard-color.png')}
            alt="Color keyboard"
          />
        </div>
        <div className="introduction__container--finger-placement">
          <img className="left-hand" src={require('./img/left-hand.png')} alt="Left hand" />
          <img className="right-hand" src={require('./img/right-hand.png')} alt="Right hand" />
        </div>
      </section>
      {/* CORRECT FINGER PLACEMENT */}
      <section className="introduction__container--section">
        <h2 className="introduction__container--subtitle">Správný prstoklad</h2>
        <p>
          {' '}
          Správný prstoklad je základním předpokladem pro efektivní a rychlé psaní. Zvláštní zarážky na klávesách F a J
          slouží jako navigační průvodci pro psaní poslepu. Tyto zarážky označují{' '}
          <strong>
            {' '}
            <em>základní pozici prstů</em>{' '}
          </strong>
          , kdy levá ruka odpovídá za klávesy F-D-S-A a pravá za klávesy J-K-L-Ů.
        </p>
        <div className="introduction__container--keyboard-instruction">
          <img
            className="introduction__container--color-keyboard"
            src={require('./img/home-keys.png')}
            alt="Home keys keyboard"
          />
        </div>
      </section>
      {/* FINGER EXERCISES */}
      <section className="introduction__container--section">
        <h2 className="introduction__container--subtitle">Prstové cviky</h2>
        <p>
          Pohyblivé prsty jsou základem pro rychlé a bezchybné psaní. Příprava spočívá v procvičování prstů před každým
          psaním a dodržováním pravidelného rytmu úhozů.
        </p>
        <p>
          Na začátku může být cvičení obtížné, ale s průběhem času se klouby uvolní a pohyb prstů na klávesnici se stane
          snazším. Prstové cviky se provádějí oběma rukama a zahrnují pohyb palců směrem od ukazováčku, posouvání
          ukazováčku pryč od prostředníčku, prostředníčkem pryč od prsteníčku a nakonec malíčkem pryč od prsteníčku. Při
          změně polohy jednoho prstu by neměla být ovlivněna poloha ostatních prstů na stejné ruce, aby se předešlo
          nejistotě v psaní a chybám.
        </p>
        <div className="introduction__container--exercise-images">
          <img
            className="introduction__container--finger-exercise"
            src={require('./img/finger-exercise1.png')}
            alt="Finger exercise"
          />
          <img
            className="introduction__container--finger-exercise"
            src={require('./img/finger-exercise2.png')}
            alt="Finger exercise"
          />
          <img
            className="introduction__container--finger-exercise"
            src={require('./img/finger-exercise3.png')}
            alt="Finger exercise"
          />
          <img
            className="introduction__container--finger-exercise"
            src={require('./img/finger-exercise4.png')}
            alt="Finger exercise"
          />
          <img
            className="introduction__container--finger-exercise"
            src={require('./img/finger-exercise5.png')}
            alt="Finger exercise"
          />
        </div>
        <p>
          Je také důležité dodržovat správnou polohu těla a zápěstí pro udržení rychlosti a přesnosti. Sedněte si rovně
          na židli v patřičné výšce, aby byla klávesnice v úrovni břicha a lokty ohnuté v úhlu 90 stupňů.
        </p>
      </section>
      {/* TYPING SPEED METRICS */}
      <section className="introduction__container--section">
        <h2 className="introduction__container--subtitle">Hodnocení cvičení a testů</h2>
        <div className="introduction__container--metrics-description">
          <p>
            Pro komplexní vyhodnocení schopností psaní se vychází ze tří klíčových kritérií:{' '}
            <strong>Chyby, Přesnost, WPM (slov za minutu)</strong> Nicméně, tato kritéria se uplatňují různým způsobem v
            závislosti na tom, zda se jedná o cvičení nebo test.
          </p>
          <div className="introduction__container--metrics-container">
            <div className="introduction__container--metric-item">
              <h3 className="introduction__container--metric-title">Chyby</h3>
              <p className="introduction__container--content">
                Počet chyb, které uživatel udělá při psaní, je důležitým ukazatelem jeho schopnosti psaní. Při hodnocení
                je třeba se zaměřit na to, jak často dochází k překlepům, špatnému použití interpunkčních znamének nebo
                nesprávnému psaní slov. Menší počet chyb znamená vyšší kvalitu psaní a větší kontrolu nad klávesnicí.
              </p>
            </div>
            <div className="introduction__container--metric-item">
              <h3 className="introduction__container--metric-title">Přesnost</h3>
              <p className="introduction__container--content">
                Přesnost je měřena jako procento správně napsaných znaků z celkového počtu pokusů. Toto kritérium je
                klíčové pro hodnocení, jak je uživatel schopen správně a přesně psát text. Vyšší procento samozřejmě
                znamená, že je schopen psát efektivněji a s menším počtem chyb.
              </p>
            </div>
            <div className="introduction__container--metric-item">
              <h3 className="introduction__container--metric-title"> WPM (Počet Slov za Minutu)</h3>
              <p className="introduction__container--content">
                WPM je metrika, která měří, kolik slov je uživatel schopný napsat za jednu minutu. Vyšší WPM obvykle
                značí vyšší rychlost a efektivitu psaní. Tato hodnota je důležitá pro určení, jak rychle a plynule může
                uživatel psát. Svůj pokrok muže uživatel sledovat dle níže uvedeného diagramu.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SpeedMetrics />
      {showTopBtn && (
        <img
          src={require('./img/icon-up.png')}
          className="introduction__container--icon-to-top"
          alt="icon-to-top"
          onClick={goToTop}
        />
      )}
    </div>
  );
};
export default IntroductionPage;
