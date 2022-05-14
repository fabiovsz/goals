import React, { useState, useEffect, useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Countdown.module.css";

export const Countdown = () => {
  let countdownTimeout: NodeJS.Timeout;
  const { startNewChallenge } = useContext(ChallengeContext);

  const [hasFinished, setHasFinished] = useState(false);
  const [time, setTime] = useState(0.05 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const startCountdown = () => {
    setActive(true);
  };

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setActive(false);
    setTime(0.05 * 60);
  };

  useEffect(() => {
    if (active && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (active && time === 0) {
      setHasFinished(true);
      setActive(false);
      startNewChallenge();
    }
  }, [active, time]);

  return (
    <div>
      <div className={styles.countdown}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          className={`${styles.btnStartCountdown} ${styles.btnHasFinished}`}
        >
          Ciclo Finalizado
        </button>
      ) : (
        <>
          {active ? (
            <button
              className={`${styles.btnStartCountdown} ${styles.btnStartCountdownActive}`}
              onClick={resetCountdown}
            >
              Encerrar o ciclo
            </button>
          ) : (
            <button
              className={styles.btnStartCountdown}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
};
