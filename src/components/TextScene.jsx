import { useState, useEffect } from "react";
import styles from "../styles/TextScene.module.css";

const TextScene = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 100; // Slower typing speed (increased from 50 to 150)
  const pauseDuration = 2000; // Increased pause after typing finishes (2 seconds)

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, pauseDuration); // Extended pause before proceeding
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return (
    <div className={styles.container}>
      <p className={styles.text}>{displayedText}</p>
    </div>
  );
};

export default TextScene;
