import { useState } from "react";
import styles from "../styles/WeaponCard.module.css";

const WeaponCard = ({ weapon, onSelect }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={styles.card} onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`${styles.inner} ${isFlipped ? styles.flipped : ""}`}>
        {/* Front Side - Shows Weapon Image */}
        <div className={styles.front}>
          <img src={weapon.image} alt={weapon.name} className={styles.image} />
        </div>

        {/* Back Side - Shows Description and Select Button */}
        <div className={styles.back}>
          <p className={styles.text}>{weapon.description}</p>
          <button 
            className={styles.selectButton} 
            onClick={(e) => {
              e.stopPropagation(); // Prevent the card from flipping again
              onSelect(weapon);
            }}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default WeaponCard;
