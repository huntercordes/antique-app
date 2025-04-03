import { useNavigate } from "react-router-dom";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/intro"); // Changed from /cutscene to /intro
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Gladiator's Fate</h1>
      <video className={styles.video} autoPlay loop muted>
        <source src={`${process.env.PUBLIC_URL}/assets/videos/fightscene.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={handleStart} className={styles.startButton}>
        Start Game
      </button>
    </div>
  );
};

export default HomePage;
