import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextScene from "../components/TextScene";
import styles from "../styles/IntroCutScene.module.css";

const LoseCutScene = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleNextStep = () => setStep((prev) => prev + 1);

  const handleTryAgain = () => {
    // Play the click sound
    const clickAudio = new Audio(`${process.env.PUBLIC_URL}/assets/audio/scificlick.wav`);
    clickAudio.play();

    // Navigate back to the home page
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
        <video className={styles.video} autoPlay onEnded={handleNextStep}>
          <source src={`${process.env.PUBLIC_URL}/assets/videos/fightscene.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {step === 1 && (
        <TextScene
          text="Your choice of weapon and armor has led to your defeat."
          onComplete={handleNextStep}
        />
      )}
      {step === 2 && (
        <video className={styles.video} autoPlay onEnded={handleNextStep}>
          <source src={`${process.env.PUBLIC_URL}/assets/videos/cartoondefeat.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {step === 3 && (
        <button className={styles.nextButton} onClick={handleTryAgain}>
          Try Again
        </button>
      )}
    </div>
  );
};

export default LoseCutScene;