import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextScene from "../components/TextScene";
import styles from "../styles/IntroCutScene.module.css";

const WinTwoCutScene = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleNextStep = () => setStep((prev) => prev + 1);

  const handleProceed = () => {
    // Play the click sound
    const clickAudio = new Audio(`${process.env.PUBLIC_URL}/assets/audio/scificlick.wav`);
    clickAudio.play();

    // Navigate to the next stage
    navigate("/");
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
      {step === 0 && (
        <TextScene
          text="Congratulations! Your choice of weapon and armor has led you to victory in Round 2."
          onComplete={handleNextStep}
        />
      )}
      {step === 1 && (
        <video className={styles.video} autoPlay onEnded={handleNextStep}>
          <source src={`${process.env.PUBLIC_URL}/assets/videos/cartoonvictory.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {step === 2 && (
        <button className={styles.nextButton} onClick={handleProceed}>
          Finished
        </button>
      )}
    </div>
  );
};

export default WinTwoCutScene;