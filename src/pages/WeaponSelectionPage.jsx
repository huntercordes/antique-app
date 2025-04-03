import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/WeaponSelectionPage.module.css";
import weapons from "../data/weapons";
import WeaponCard from "../components/WeaponCard";

const WeaponSelectionPage = ({ setSelectedWeapon }) => {
  const navigate = useNavigate();

  const handleWeaponSelect = (weapon) => {
    setSelectedWeapon(weapon); // Store the selected weapon
    navigate("/armor"); // Move to armor selection
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Choose Your Weapon</h1>
      <div className={styles.grid}>
        {weapons.map((weapon) => (
          <WeaponCard 
            key={weapon.id} 
            weapon={weapon} 
            onSelect={handleWeaponSelect} 
          />
        ))}
      </div>
    </div>
  );
};

export default WeaponSelectionPage;
