import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styles from "../styles/FightScenePage.module.css";

const FightScenePage = ({ selectedWeapon, selectedArmor }) => {
  const navigate = useNavigate();

  const handleVideoEnd = () => {
    // Check if the player won or lost
    const isWinning = isWinningCombination(selectedWeapon, selectedArmor);
    console.log("Is Winning Combination:", isWinning);

    if (isWinning) {
      navigate("/text-scene/win"); // Navigate to the win scene
    } else {
      navigate("/text-scene/lose"); // Navigate to the lose scene
    }
  };

  useEffect(() => {
    // Ensure that the video onEnded event is set up correctly
    const video = document.getElementById("fight-video");
    video.addEventListener("ended", handleVideoEnd);

    // Cleanup event listener on component unmount
    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [selectedWeapon, selectedArmor, navigate]);

  return (
    <div className={styles.container}>
      <video
        id="fight-video"
        className={styles.video}
        autoPlay
        controls={false}
      >
        <source src="/assets/videos/fightscene.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

// ✅ Winning combination for the first round
const isWinningCombination = (weapon, armor) => {
  if (!weapon || !armor) return false;

  const winningCombination = { weapon: "Pugio", armor: "Manicae" }; // First round win

  return weapon.name === winningCombination.weapon && armor.name === winningCombination.armor;
};

export default FightScenePage;
