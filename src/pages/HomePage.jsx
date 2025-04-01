import { useNavigate } from "react-router-dom";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/weapons");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Gladiator's Fate</h1>
      <video className={styles.video} autoPlay loop muted>
        <source src="/assets/videos/testvideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={handleStart} className={styles.startButton}>
        Start Game
      </button>
    </div>
  );
};

export default HomePage;