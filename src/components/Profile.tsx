import React from 'react'
import styles from '../styles/components/Profile.module.css'

export const Profile = () => {
  return (
    <div className={styles.containerProfile}>
        <img src="https://github.com/fabiovsz.png" alt="Fabio Vieira" />
        <div>
          <strong>Fábio Vieira</strong>
          <p>
            <img src="icons/level.svg" alt="Level" />
            Level 1
          </p>    
        </div>
        
    </div>
  )
}
