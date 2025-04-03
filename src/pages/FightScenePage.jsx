import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "../styles/FightScenePage.module.css";

const FightScenePage = ({ selectedWeapon, selectedArmor }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const videoDuration = 5000; // Adjust based on the fight scene video length

    setTimeout(() => {
      const isWinning = isWinningCombination(selectedWeapon, selectedArmor);
      const outcome = isWinning ? "win" : "lose";
      navigate(`/text-scene/${outcome}`);
    }, videoDuration);
  }, [navigate, selectedWeapon, selectedArmor]);

  return (
    <div className={styles.container}>
      <video className={styles.video} autoPlay>
        <source src="/assets/videos/fight-scene.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// ✅ Define isWinningCombination inside this file if needed
const isWinningCombination = (weapon, armor) => {
  if (!weapon || !armor) return false;
  const winningCombination = { weapon: "Pugio", armor: "Manicae" };
  return weapon.name === winningCombination.weapon && armor.name === winningCombination.armor;
};

export default FightScenePage;
