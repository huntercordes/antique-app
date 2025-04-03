import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import IntroCutScene from "./pages/IntroCutScene";
import CutScenePage from "./pages/CutScenePage";
import WeaponSelectionPage from "./pages/WeaponSelectionPage";
import ArmorSelectionPage from "./pages/ArmorSelectionPage";
import FightScenePage from "./pages/FightScenePage";
import TextScenePage from "./pages/TextScenePage";

function App() {
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  const [selectedArmor, setSelectedArmor] = useState(null);

  return (
    <Router basename="/antique-app">
      <audio autoPlay loop>
        <source src={`${process.env.PUBLIC_URL}/assets/audio/battle.mp3`} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<IntroCutScene />} />
        <Route path="/weapons" element={<WeaponSelectionPage setSelectedWeapon={setSelectedWeapon} />} />
        <Route path="/armor" element={<ArmorSelectionPage selectedWeapon={selectedWeapon} setSelectedArmor={setSelectedArmor} />} />
        <Route path="/fight" element={<FightScenePage selectedWeapon={selectedWeapon} selectedArmor={selectedArmor} />} />
        <Route path="/text-scene/:outcome" element={<TextScenePage />} />
        <Route path="/cutscene/:outcome" element={<CutScenePage />} />
      </Routes>
    </Router>
  );
}

// ✅ Define isWinningCombination here so we don't need a utils.js file
const isWinningCombination = (weapon, armor) => {
  if (!weapon || !armor) return false;
  const winningCombination = { weapon: "Pugio", armor: "Manicae" };
  return weapon.name === winningCombination.weapon && armor.name === winningCombination.armor;
};

export default App;
