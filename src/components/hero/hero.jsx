'use client';
import styles from './hero.module.scss';
import React, { useRef, useEffect } from "react";

const Hero = ({ hero }) => {
  const titleH1 = useRef(null);
  const { title, name } = hero;

  useEffect(() => {

    const waitForMs = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const typeSentence = async (textValue, reference, delay = 100) => {
      const letters = textValue.split("");
      const lettersLength = letters.length;
      reference.innerText = '';
      for (let i = 0; i < lettersLength; i++) {
        await waitForMs(delay);
        if (i === 8) {
          const br = document.createElement("br");
          reference.append(br);
        }
        reference.append(letters[i]);
      }
    }

    const selectTypeSentence = async () => {
      const titleH1$$ = titleH1.current;
      const titleH1Value = titleH1.current.innerText;
      await typeSentence(titleH1Value, titleH1$$);
    }

    selectTypeSentence();
  });

  return (
    <section className={styles.hero}>
      <h1 ref={titleH1}>{title}</h1>
      <h2>{name}</h2>
    </section>
  );
};

export default Hero;