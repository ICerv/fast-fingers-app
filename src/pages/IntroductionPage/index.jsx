import React from 'react';
import './style.css';
import { SpeedMetrics } from './SpeedMetrics';

const IntroductionPage = () => {
  return (
    <div className="introduction-container">
      <h2 className="introduction-title">ÚVOD</h2>{' '}
      {/* ABOUT APPLICATION 
      <section className="introduction-section">
         <h3 className="introduction-subtitle">O aplikaci</h3>
        <p> FastFingers je komplexní aplikace pro efektivní psaní na klávesnici.</p>
         <p>Skládá se ze tří částí:</p>
        <div className="section-container">
          <div className="section-description">
            <h4>Úvod</h4>
            <p>
              Poskytuje uživatelům přehled o aplikaci a seznamuje je s rozložením klávesnice. Ilustruje správné umístění
              prstů na klávesnici a vizuálně zobrazuje barevně označené indikace pro každou klávesu. To pomáhá
              uživatelům vyvinout svalovou paměť a vytvořit správné návyky při psaní.
            </p>
          </div>

          <div className="section-description">
            <h4>Cvičení</h4>
            <p>
              Lekce je rozdělena do čtyř kategorií: Malá písmena, Velká písmena, Číselná klávesnice a Zvláštní znaky.
              Každá kategorie nabízí řadu cvičení přizpůsobených konkrétním potřebám. Uživatelé si mohou vybrat cvičení
              na základě svých požadavků a preferencí. Po dokončení cvičení uživatelé obdrží zpětnou vazbu o svém
              výkonu, včetně počtu chyb a přesnosti psaní. Cílem každého cvičení je naučit uživatele zapamatovat si
              rozmístění každé klávesy a správné umístění prstů.
            </p>
          </div>

          <div className="section-description">
            <h4>Testy</h4>
            <p>
              Testy nabízi tři úrovně obtížnosti: Začátečník, Pokročilý a Expert. Každá úroveň obsahuje několik
              časovaných testů. Uživatelé mohou test spustit kliknutím na tlačítko "Start" a časovač je nastaven na
              jednu minutu. Pokud je potřeba, uživatelé mohou pomocí tlačítka "Stop" přerušit psaní a časovač. Po
              dokončení testu uživatelé obdrží podrobné informace o svém výkonu, včetně počtu chyb, přesnosti a slov za
              minutu (WPM). Mohou si vybrat, zda opakují stejný test nebo pokračují na další test v dané úrovni. Tato
              sekce si klade za cíl vyzvat uživatele a sledovat jejich pokrok v průbě hu času.
            </p>
          </div>
        </div>       
        </section>*/}
      {/* KEYBOARD INSTRUCTION */}
      <section className="introduction-section">
        <h4 className="introduction-intro">
          Pro efektivní využití aplikace FastFingers a dosaženi nejlepších výsledků, doporučujeme dodržovat následující
          tipy a postupy.
        </h4>
        <h3 className="introduction-subtitle">Seznámení s klávesnicí</h3>
        <p> Ilustrace obrázku ukazuje, které prsty jsou zodpovědné za stisk jednotlivých kláves.</p>
        <div className="keyboard-instruction">
          <img className="color-keyboard" src={require('./img/keyboard-color.png')} alt="Color keyboard" />
        </div>
        <div className="finger-placement">
          <img className="left-hand" src={require('./img/left-hand.png')} alt="Left hand" />
          <img className="right-hand" src={require('./img/right-hand.png')} alt="Right hand" />
        </div>
      </section>
      {/* CORRECT FINGER PLACEMENT */}
      <section className="introduction-section">
        <h3 className="introduction-subtitle">Správný prstoklad</h3>
        <p>
          {' '}
          Správný prstoklad je základním předpokladem pro efektivní a rychlé psaní. Zvláštní zarážky na klávesách F a J
          slouží jako navigační průvodci pro psaní poslepu. Tyto zarážky označují základní pozici prstů, kdy levá ruka
          odpovídá za klávesy F-D-S-A a pravá ruka za klávesy J-K-L-Ů.
        </p>
        <div className="keyboard-instruction">
          <img className="color-keyboard" src={require('./img/home-keys.png')} alt="Home keys keyboard" />
        </div>
      </section>
      {/* FINGER EXERCISES */}
      <section className="introduction-section">
        <h3 className="introduction-subtitle">Prstové cviky</h3>
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
        <div className="exercise-images">
          <img className="finger-exercise" src={require('./img/finger-exercise1.png')} alt="Finger exercise" />
          <img className="finger-exercise" src={require('./img/finger-exercise2.png')} alt="Finger exercise" />
          <img className="finger-exercise" src={require('./img/finger-exercise3.png')} alt="Finger exercise" />
          <img className="finger-exercise" src={require('./img/finger-exercise4.png')} alt="Finger exercise" />
          <img className="finger-exercise" src={require('./img/finger-exercise5.png')} alt="Finger exercise" />
        </div>
        <p>
          Je také důležité dodržovat správnou polohu těla a zápěstí pro udržení rychlosti a přesnosti. Sedněte si rovně
          na židli v patřičné výšce, aby byla klávesnice v úrovni břicha a lokty ohnuté v úhlu 90 stupňů.
        </p>
      </section>
      {/* TYPING SPEED METRICS */}
      <section className="introduction-section">
        <h3 className="introduction-subtitle">Hodnocení cvičení a testů</h3>
        <div className="metrics-description">
          <p>
            Pro komplexní vyhodnocení schopností psaní se vychází ze tří klíčových kritérií:{' '}
            <strong>Chyby, Přesnost, WPM (slov za minutu)</strong> Nicméně, tato kritéria se uplatňují různým způsobem v
            závislosti na tom, zda se jedná o cvičení nebo test.
          </p>
          <div className="metrics-container">
            <div className="metric-item">
              <h4>Chyby</h4>
              <p>
                Počet chyb, které jednotlivec udělá při psaní, je důležitým ukazatelem jeho schopnosti psaní. Při
                hodnocení je třeba se zaměřit na to, jak často dochází k překlepům, špatnému použití interpunkčních
                znamének nebo nesprávnému psaní slov. Menší počet chyb znamená vyšší kvalitu psaní a větší kontrolu nad
                klávesnicí.
              </p>
            </div>
            <div className="metric-item">
              <h4>Přesnost</h4>
              <p>
                Přesnost je měřena jako procento správně napsaných znaků z celkového počtu pokusů. Toto kritérium je
                klíčové pro hodnocení, jak dobře je jednotlivec schopen správně a přesně psát text. Vyšší přesnost
                znamená, že jednotlivec je schopen psát efektivněji a s menším počtem chyb.
              </p>
            </div>
            <div className="metric-item">
              <h4> WPM (Words Per Minute - slov za minutu)</h4>
              <p>
                WPM je metrika, která měří, kolik slov je jednotlivec schopný napsat za jednu minutu. Vyšší WPM obvykle
                značí vyšší rychlost a efektivitu psaní. Tato hodnota je důležitá pro určení, jak rychle a plynule může
                jednotlivec psát.
              </p>
            </div>
          </div>
        </div>
        <SpeedMetrics />
      </section>
    </div>
  );
};
export default IntroductionPage;
