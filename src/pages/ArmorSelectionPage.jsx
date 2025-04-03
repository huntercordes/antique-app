import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/ArmorSelectionPage.module.css";
import armor from "../data/armor";
import ArmorCard from "../components/ArmorCard";

const ArmorSelectionPage = ({ selectedWeapon, setSelectedArmor }) => {
  const navigate = useNavigate();

  const handleArmorSelect = (armor) => {
    setSelectedArmor(armor);
  
    if (isWinningCombination(selectedWeapon, armor)) {
      navigate("/text-scene/win"); // Show win text before win cutscene
    } else {
      navigate("/text-scene/lose"); // Show lose text before lose cutscene
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose Your Armor</h1>
      <div className={styles.grid}>
        {armor.map((armorItem) => (
          <ArmorCard key={armorItem.id} armor={armorItem} onSelect={handleArmorSelect} />
        ))}
      </div>
    </div>
  );
};

// ✅ Define the function inside this file
const isWinningCombination = (weapon, armor) => {
  if (!weapon || !armor) return false;

  // Define the single correct weapon & armor combination
  const winningCombination = { weapon: "Pugio", armor: "Manicae" };

  return weapon.name === winningCombination.weapon && armor.name === winningCombination.armor;
};

export default ArmorSelectionPage;
