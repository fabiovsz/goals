import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/ExperienceBar.module.css";

export const ExperienceBar = () => {
  const { currentExperience, xpToNextLevel } = useContext(ChallengeContext);
  const percentToNextLevel =
    Math.round(currentExperience * 100) / xpToNextLevel;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div className={styles.totalExperience}>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience}xp
        </span>
      </div>
      <span>{xpToNextLevel}xp</span>
    </header>
  );
};
