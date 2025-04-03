import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TextScene from "../components/TextScene";

const TextScenePage = () => {
  const navigate = useNavigate();
  const { outcome } = useParams(); // Get the outcome (win or lose)

  const handleTextSceneComplete = () => {
    // Ensure it waits for text before going to cutscene
    if (outcome === "win") {
      navigate("/cutscene/win1"); 
    } else if (outcome === "lose") {
      navigate("/cutscene/lose"); 
    }
  };

  // Define the text based on outcome
  const text = outcome === "win" 
    ? "Victory is yours! You have proven yourself in the arena." 
    : "Defeat... The sands of the arena drink your blood.";

  return (
    <div>
      <TextScene text={text} onComplete={handleTextSceneComplete} />
    </div>
  );
};

export default TextScenePage;
