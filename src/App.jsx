import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"; // Added useLocation
import { useState, useEffect, useRef } from "react";
import HomePage from "./pages/HomePage";
import IntroCutScene from "./pages/IntroCutScene";
import CutScenePage from "./pages/CutScenePage";
import WeaponSelectionPage from "./pages/WeaponSelectionPage";
import ArmorSelectionPage from "./pages/ArmorSelectionPage";
import FightScenePage from "./pages/FightScenePage";
import TextScenePage from "./pages/TextScenePage";
import WinOneCutScene from "./pages/WinOneCutScene";
import LoseCutScene from "./pages/LoseCutScene";
import Round2WeaponSelectionPage from "./pages/Round2WeaponSelectionPage";
import Round2ArmorSelectionPage from "./pages/Round2ArmorSelectionPage";
import WinTwoCutScene from "./pages/WinTwoCutScene";

function App() {
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [selectedArmor, setSelectedArmor] = useState(null);
  const audioRef = useRef(null); // Reference to the audio element

  return (
    <div>
      <audio ref={audioRef} autoPlay loop>
        <source src={`${process.env.PUBLIC_URL}/assets/audio/battle.mp3`} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <Router basename="/antique-app">
        <AudioController audioRef={audioRef}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/intro" element={<IntroCutScene />} />
            <Route
              path="/weapons"
              element={<WeaponSelectionPage setSelectedWeapon={setSelectedWeapon} />}
            />
            <Route
              path="/armor"
              element={<ArmorSelectionPage selectedWeapon={selectedWeapon} setSelectedArmor={setSelectedArmor} />}
            />
            <Route
              path="/fight"
              element={<FightScenePage selectedWeapon={selectedWeapon} selectedArmor={selectedArmor} />}
            />
            <Route path="/text-scene/:outcome" element={<TextScenePage />} />
            <Route path="/cutscene/:outcome" element={<CutScenePage />} />
            <Route path="/win-one-cutscene" element={<WinOneCutScene />} />
            <Route path="/lose-cutscene" element={<LoseCutScene />} />
            <Route
              path="/round-2-weapons"
              element={<Round2WeaponSelectionPage setSelectedWeapon={setSelectedWeapon} />}
            />
            <Route
              path="/round-2-armor"
              element={<Round2ArmorSelectionPage selectedWeapon={selectedWeapon} setSelectedArmor={setSelectedArmor} />}
            />
            <Route path="/win-two-cutscene" element={<WinTwoCutScene />} />
          </Routes>
        </AudioController>
      </Router>
    </div>
  );
}

function AudioController({ audioRef, children }) {
  const location = useLocation(); // Now useLocation is inside the Router context

  // List of routes where the audio should be muted
  const cutsceneRoutes = [
    "/intro",
    "/win-one-cutscene",
    "/lose-cutscene",
    "/win-two-cutscene",
    "/cutscene/:outcome",
  ];

  useEffect(() => {
    if (audioRef.current) {
      // Mute the audio if the current route is a cutscene
      const isCutscene = cutsceneRoutes.some((route) =>
        location.pathname.startsWith(route.replace(":outcome", ""))
      );
      audioRef.current.muted = isCutscene;
    }
  }, [location, audioRef]); // Re-run when the route changes

  return children;
}

export default App;