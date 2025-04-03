import { useState } from "react";
import styles from "../styles/WeaponCard.module.css";

const WeaponCard = ({ weapon, onSelect }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSelect = (e) => {
    e.stopPropagation(); // Prevent the card from flipping again
    // Play the click sound
    const clickAudio = new Audio(`${process.env.PUBLIC_URL}/assets/audio/scificlick.wav`);
    clickAudio.play();

    // Call the onSelect callback
    onSelect(weapon);
  };

  return (
    <div className={styles.card} onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`${styles.inner} ${isFlipped ? styles.flipped : ""}`}>
        {/* Front Side - Shows Weapon Image */}
        <div className={styles.front}>
          <img src={weapon.image} alt={weapon.name} className={styles.image} />
          <h3 className={styles.name}>{weapon.name}</h3>
        </div>

        {/* Back Side - Shows Description and Select Button */}
        <div className={styles.back}>
          <p className={styles.text}>{weapon.description}</p>
          <button className={styles.selectButton} onClick={handleSelect}>
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeaponCard;