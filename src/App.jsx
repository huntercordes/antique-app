import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeaponSelection from "./pages/WeaponSelection"; // Placeholder for next step

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weapons" element={<WeaponSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
