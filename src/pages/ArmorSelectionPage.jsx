import { useNavigate } from "react-router-dom";
import styles from "../styles/ArmorSelectionPage.module.css";
import armor from "../data/armor";
import ArmorCard from "../components/ArmorCard";

const ArmorSelectionPage = ({ selectedWeapon, setSelectedArmor }) => {
  const navigate = useNavigate();

  const handleArmorSelect = (armor) => {
    setSelectedArmor(armor);

    // Check if the selected weapon and armor form a winning combination
    if (isWinningCombination(selectedWeapon, armor)) {
      navigate("/win-one-cutscene"); // Navigate to the WinOneCutScene
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
      <h1 className={styles.title}>Choose Your Armor</h1>
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

// Function to determine if the selected weapon and armor form a winning combination
const isWinningCombination = (weapon, armor) => {
  if (!weapon || !armor) return false;

  // Define the winning combination
  const winningCombination = { weapon: "Pugio", armor: "Manicae" };

  return weapon.name === winningCombination.weapon && armor.name === winningCombination.armor;
};

export default ArmorSelectionPage;