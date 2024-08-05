// components/ColoredWords.js
import React from 'react';
import styles from './ColoredWords.module.scss';

const ColoredWords = ({ text, wordsToColor }) => {
  const wordsRegex = new RegExp(`(${wordsToColor.join('|')})`, 'gi');

  const coloredText = text.split(wordsRegex).map((word, index) => 
    wordsToColor.includes(word) ? 
    <span key={index} className={styles.coloredWord}>{word}</span> : 
    word
  );

  return (
    <h1 className={styles.title}>
      {coloredText}
    </h1>
  );
};

export default ColoredWords;
