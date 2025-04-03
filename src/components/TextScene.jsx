import { useState, useEffect } from "react";
import styles from "../styles/TextScene.module.css";

const TextScene = ({ text, onComplete }) => {
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 100; // Typing speed in milliseconds
  const pauseDuration = 2000; // Pause after typing finishes (2 seconds)

  useEffect(() => {
    let index = 0;

    // Ensure the text is reset when the component is re-rendered
    setDisplayedText("");

    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index)); // Use charAt to ensure valid character access
        index++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, pauseDuration); // Pause before calling onComplete
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [text, onComplete]);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/marbletexture.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <p className={styles.text}>{displayedText}</p>
    </div>
  );
};

export default TextScene;