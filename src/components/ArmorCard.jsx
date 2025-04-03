import { useState } from "react";
import styles from "../styles/ArmorCard.module.css";

const ArmorCard = ({ armor, onSelect }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={styles.card} onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`${styles.inner} ${isFlipped ? styles.flipped : ""}`}>
        {/* Front Side - Shows Armor Image */}
        <div className={styles.front}>
          <img src={armor.image} alt={armor.name} className={styles.image} />
        </div>

        {/* Back Side - Shows Description and Select Button */}
        <div className={styles.back}>
          <p className={styles.text}>{armor.description}</p>
          <button 
            className={styles.selectButton} 
            onClick={(e) => {
              e.stopPropagation(); // Prevent the card from flipping again
              onSelect(armor);
            }}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArmorCard;
