import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/CutScenePage.module.css";

const CutScenePage = () => {
  const navigate = useNavigate();
  const { outcome } = useParams();
  const [showText, setShowText] = useState(false);

  const handleVideoEnd = () => {
    if (outcome === "lose") {
      setShowText(true);
      setTimeout(() => {
        navigate("/"); // Go back to the homepage if the player loses
      }, 3000); // Wait for text display before navigating
    } else if (outcome === "win") {
      setTimeout(() => {
        navigate("/round-2-weapons"); // Go to Round 2 Weapon Selection page
      }, 2000); // You can adjust this time for the video effect
    }
  };

  useEffect(() => {
    const video = document.getElementById("cutscene-video");
    video.addEventListener("ended", handleVideoEnd);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [outcome, navigate]);

  return (
    <div className={styles.container}>
      <video
        id="cutscene-video"
        className={styles.video}
        autoPlay
        controls={false}
      >
        <source src={`${process.env.PUBLIC_URL}/assets/videos/${outcome}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {outcome === "lose" && showText && <p className={styles.loseText}>Defeated... You must try again.</p>}
    </div>
  );
};

export default CutScenePage;
