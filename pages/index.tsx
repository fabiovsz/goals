import { ChallengeBox } from '../src/components/ChallengeBox'
import { CompletedChalenges } from '../src/components/CompletedChalenges'
import { Countdown } from '../src/components/Countdown'
import { ExperienceBar } from '../src/components/ExperienceBar'
import { Profile } from '../src/components/Profile'
import styles from '../src/styles/pages/Home.module.css'


export default function Home() {
  return (      
      <div className= {styles.container}>
        <ExperienceBar />         
          <section>
            <div>
              <Profile/>
              <CompletedChalenges/>
              <Countdown/>          
            </div>
            <div>
            <ChallengeBox/>
            </div>                               
          </section>                     
      </div>  
  )
}
