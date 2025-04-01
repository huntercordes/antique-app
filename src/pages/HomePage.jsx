import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/HomePage.module.css";
import testVideo from "../assets/videos/testvideo.mp4"; 

const HomePage = () => {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    setShowVideo(true);
    setTimeout(() => {
      navigate("/weapons");
    }, 5000); // Adjust timing to match the video length
  };

  return (
    <div className={styles.container}>
      {!showVideo ? (
        <>
          <h1 className={styles.title}>Welcome to the Gladiator's Fate</h1>
          <video className={styles.video} autoPlay loop muted>
            <source src="/assets/videos/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={handleStart} className={styles.startButton}>
            Start Game
          </button>
        </>
      ) : (
        <video className={styles.video} autoPlay onEnded={() => navigate("/weapons")}>
          <source src={testVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default HomePage;
