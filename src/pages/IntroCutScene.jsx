import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextScene from "../components/TextScene";
import styles from "../styles/IntroCutScene.module.css";

const IntroCutScene = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const handleNextStep = () => setStep((prev) => prev + 1);

  return (
    <div className={styles.container}>
      {step === 0 && (
        <TextScene
          text="You go to visit the oracle before your gladiator fight"
          onComplete={handleNextStep}
        />
      )}

      {step === 1 && (
        <video className={styles.video} autoPlay onEnded={handleNextStep}>
          <source src={`${process.env.PUBLIC_URL}/assets/videos/intro.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {step === 2 && (
        <TextScene
          text="The fates have decided you will die within the day."
          onComplete={handleNextStep}
        />
      )}
      {step === 3 && (
        <TextScene
          text="Your first opponent has a spear and a shield. You must choose your weapon wisely to avoid the oracles prediction."
          onComplete={handleNextStep}
        />
      )}

      {step === 4 && (
        <button className={styles.nextButton} onClick={() => navigate("/weapons")}>
          Next
        </button>
      )}
    </div>
  );
};

export default IntroCutScene;
