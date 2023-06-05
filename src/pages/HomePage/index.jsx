import React from "react";
import { useState, useEffect } from "react";
import './style.css';


const HomePage = () => {
  const banner = "Program pro trénink psaní na klávesnici";

  const typingState = "istyping";
  const deletingState = "isdeleting";

  const [typing, setTyping] = useState(typingState);
  const [text, setText] = useState("");

  //Funkce pro zpozdeni mezi psanim a mazanim textu
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    //Efekt spusteny pri kazde zmene hodnoty 'text' nebo 'typing'
    const timeout = setTimeout(() => {
      //Pokud probiha psani a text jeste nei cely, pridej dalsi znak
      if (typing === typingState && text !== banner) {
        setText(originalText => banner.slice(0, originalText.length + 1));

        //Pokud je text jiz cely a probiha psani, pockej 2sec a prepni do mazani
      } else if (text === banner && typing === typingState) {
        sleep(2000).then(() => {
          setTyping(deletingState);
        });

        //Pokud probiha mazani a text neni prazdny, odeber posledni znak
      } else if (
        (text === banner && typing === deletingState) ||
        typing === deletingState
      ) {
        setText(originalText => banner.slice(0, originalText.length - 1));

        //Pokud je text zkracen na 2 nebo mene znaky, prepni do psani
        if (text.length <= 2) {
          setTyping(typingState);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [text, typing]);

  return (
    <section className="homepage-section active">
      <div className="homepage">
        <h1 className="homepage-heading">
          <pre className="blinking-cursor"
            style={{ whiteSpace: 'pre-wrap' }}
          >
            {text}
          </pre>
        </h1>
        <p className="homepage-subheading">
          Zlepši své psaní všemi deseti, získej rychlost, přesnost a schopnost psát naslepo...
        </p>

      </div>
      <div className="homepage-image" >
        <img src={require('./img/laptop.png')} alt="Laptop image" />
      </div>
    </section >
  )
};

export default HomePage;