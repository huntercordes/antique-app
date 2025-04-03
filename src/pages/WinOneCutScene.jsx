import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextScene from "../components/TextScene";
import styles from "../styles/IntroCutScene.module.css";

const WinOneCutScene = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleNextStep = () => setStep((prev) => prev + 1);

  const handleProceed = () => {
    // Play the click sound
    const clickAudio = new Audio(`${process.env.PUBLIC_URL}/assets/audio/scificlick.wav`);
    clickAudio.play();

    // Navigate to the next stage
    navigate("/round-2-weapons");
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
        <video className={styles.video} autoPlay onEnded={handleNextStep}>
          <source src={`${process.env.PUBLIC_URL}/assets/videos/fightscene.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {step === 1 && (
        <TextScene
          text="Congratulations! Your choice of weapon and armor has led you to victory."
          onComplete={handleNextStep}
        />
      )}
      {step === 2 && (
        <video className={styles.video} autoPlay onEnded={handleNextStep}>
          <source src={`${process.env.PUBLIC_URL}/assets/videos/win1.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {step === 3 && (
        <TextScene
          text="You have proven yourself as a true gladiator. Your next opponent will be using a Net and a Scutum. Choose wisely!"
          onComplete={handleNextStep}
        />
      )}
      {step === 4 && (
        <button className={styles.nextButton} onClick={handleProceed}>
          Proceed to the Next Stage
        </button>
      )}
    </div>
  );
};

export default WinOneCutScene;