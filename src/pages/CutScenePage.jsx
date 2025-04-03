import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/CutScenePage.module.css";

const CutScenePage = () => {
  const navigate = useNavigate();
  const { outcome } = useParams(); // win1, win2, or lose
  const [showText, setShowText] = useState(false); // Show text after video ends

  useEffect(() => {
    const videoDuration = 5000; // Adjust based on actual video length

    // If it's the losing cutscene, show text after the video
    if (outcome === "lose") {
      setTimeout(() => {
        setShowText(true);
      }, videoDuration);

      // Navigate back to the start menu after additional delay
      setTimeout(() => {
        navigate("/");
      }, videoDuration + 3000);
    } else {
      // For winning cutscenes, navigate back without showing "Defeated" text
      setTimeout(() => {
        navigate(outcome === "win1" ? "/weapons" : "/");
      }, videoDuration);
    }
  }, [navigate, outcome]);

  return (
    <div className={styles.container}>
      <video className={styles.video} autoPlay>
        <source src={`${process.env.PUBLIC_URL}/assets/videos/${outcome}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Show defeat text only if the player lost */}
      {outcome === "lose" && showText && <p className={styles.loseText}>Defeated... You must try again.</p>}
    </div>
  );
};

export default CutScenePage;
