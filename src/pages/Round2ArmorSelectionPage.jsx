import { useNavigate } from "react-router-dom";
import styles from "../styles/ArmorSelectionPage.module.css";
import armor from "../data/armor";
import ArmorCard from "../components/ArmorCard";

const Round2ArmorSelectionPage = ({ selectedWeapon, setSelectedArmor }) => {
  const navigate = useNavigate();

  const handleArmorSelect = (armor) => {
    setSelectedArmor(armor);

    // Check the new winning combination for Round 2
    if (isWinningCombinationRound2(selectedWeapon, armor)) {
      navigate("/win-two-cutscene"); // Navigate to the WinTwoCutScene
    } else {
      navigate("/lose-cutscene"); // Navigate to the LoseCutScene
    }
  };

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/marbletexture.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className={styles.title}>Choose Your Armor for Round 2</h1>
      <div className={styles.grid}>
        {armor.map((armorItem) => (
          <ArmorCard
            key={armorItem.id}
            armor={armorItem}
            onSelect={handleArmorSelect}
          />
        ))}
      </div>
    </div>
  );
};

// Function to determine if the selected weapon and armor form a winning combination for Round 2
const isWinningCombinationRound2 = (weapon, armor) => {
  const winningCombination = { weapon: "Trident", armor: "Galea" };
  return weapon.name === winningCombination.weapon && armor.name === winningCombination.armor;
};

export default Round2ArmorSelectionPage;