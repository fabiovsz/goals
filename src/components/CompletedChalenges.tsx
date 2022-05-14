import React from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/CompletedChalenges.module.css";
import { useContext } from "react";

export const CompletedChalenges = () => {
  const { challengesCompleted } = useContext(ChallengeContext);

  return (
    <div className={styles.completedChallenges}>
      <span>Desafios Completos</span>
      <span>{`${challengesCompleted}`}</span>
    </div>
  );
};
